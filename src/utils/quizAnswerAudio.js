/** IndexedDB storage for Ajrumiyyah quiz voice answers (stays on this device). */

const DB_NAME = "learn_quran_quiz_answers_v1";
const DB_VERSION = 1;
const STORE = "recordings";

function openDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not available."));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("Failed to open quiz audio DB."));
  });
}

export function quizAnswerKey(drillId, questionId) {
  return `${drillId}::${questionId}`;
}

export async function saveQuizAnswerAudio({ drillId, questionId, blob, mimeType }) {
  const db = await openDb();
  const id = quizAnswerKey(drillId, questionId);
  const record = {
    id,
    drillId,
    questionId,
    blob,
    mimeType: mimeType || blob.type || "audio/webm",
    savedAt: new Date().toISOString(),
    size: blob.size,
  };
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
  return record;
}

export async function loadQuizAnswerAudio(drillId, questionId) {
  const db = await openDb();
  const id = quizAnswerKey(drillId, questionId);
  const record = await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
  db.close();
  return record;
}

export async function deleteQuizAnswerAudio(drillId, questionId) {
  const db = await openDb();
  const id = quizAnswerKey(drillId, questionId);
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function extForMime(mimeType = "") {
  if (mimeType.includes("mp4") || mimeType.includes("m4a")) return "m4a";
  if (mimeType.includes("ogg")) return "ogg";
  if (mimeType.includes("wav")) return "wav";
  return "webm";
}
