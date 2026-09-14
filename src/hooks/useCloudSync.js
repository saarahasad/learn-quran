import { useEffect, useRef } from "react";
import { useAuth } from "./useAuth.js";
import { supabase } from "../lib/supabaseClient.js";

const TABLE = "progress_snapshots";
const PUSH_DEBOUNCE_MS = 4000;
const PULL_MARKER_KEY = "cloud_sync_pulled_for_user";

function readLocalSnapshot() {
  const snapshot = {};
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const key = window.localStorage.key(i);
    if (key === PULL_MARKER_KEY) continue;
    snapshot[key] = window.localStorage.getItem(key);
  }
  return snapshot;
}

function applyRemoteSnapshot(data) {
  if (!data || typeof data !== "object") return;
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "string") window.localStorage.setItem(key, value);
  });
}

async function pushSnapshot(userId) {
  const snapshot = readLocalSnapshot();
  await supabase
    .from(TABLE)
    .upsert({ user_id: userId, data: snapshot, updated_at: new Date().toISOString() });
}

export function useCloudSync() {
  const { user, configured } = useAuth();
  const pushTimer = useRef(null);
  const syncedUserId = useRef(null);

  useEffect(() => {
    if (!configured || !user) return;

    let cancelled = false;

    async function pullOnce() {
      const marker = window.localStorage.getItem(PULL_MARKER_KEY);
      if (marker === user.id) return;

      const { data, error } = await supabase
        .from(TABLE)
        .select("data")
        .eq("user_id", user.id)
        .maybeSingle();

      if (cancelled) return;

      if (!error && data?.data) {
        applyRemoteSnapshot(data.data);
      }
      window.localStorage.setItem(PULL_MARKER_KEY, user.id);
      syncedUserId.current = user.id;
      await pushSnapshot(user.id);
    }

    pullOnce();

    function schedulePush() {
      if (syncedUserId.current !== user.id) return;
      if (pushTimer.current) clearTimeout(pushTimer.current);
      pushTimer.current = setTimeout(() => {
        pushSnapshot(user.id);
      }, PUSH_DEBOUNCE_MS);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden" && syncedUserId.current === user.id) {
        if (pushTimer.current) clearTimeout(pushTimer.current);
        pushSnapshot(user.id);
      }
    }

    const originalSetItem = window.localStorage.setItem.bind(window.localStorage);
    const originalRemoveItem = window.localStorage.removeItem.bind(window.localStorage);
    window.localStorage.setItem = (key, value) => {
      originalSetItem(key, value);
      if (key !== PULL_MARKER_KEY) schedulePush();
    };
    window.localStorage.removeItem = (key) => {
      originalRemoveItem(key);
      if (key !== PULL_MARKER_KEY) schedulePush();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelled = true;
      if (pushTimer.current) clearTimeout(pushTimer.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.localStorage.setItem = originalSetItem;
      window.localStorage.removeItem = originalRemoveItem;
    };
  }, [configured, user]);
}
