/**
 * fetch() with a timeout and one retry. Third-party hosts (QuranFlash, QuranCDN, GitHub raw)
 * occasionally stall on mobile Safari; without a timeout the UI waits forever.
 */
export async function fetchWithTimeout(url, { timeoutMs = 10000, retries = 1, ...init } = {}) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...init, signal: controller.signal });
    } catch (err) {
      lastError = err;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}
