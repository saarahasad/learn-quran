/**
 * Dev proxy for إعراب القرآن للدعاس via tafsir.app
 * GET /api/iraab-daas?s=6&a=112
 */

export async function handleIraabDaasRequest(req, res) {
  const url = new URL(req.url || "/", "http://localhost");
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const surah = Number(url.searchParams.get("s") || url.searchParams.get("surah"));
  const ayah = Number(url.searchParams.get("a") || url.searchParams.get("ayah"));
  if (!Number.isFinite(surah) || !Number.isFinite(ayah) || surah < 1 || ayah < 1) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Provide s (surah) and a (ayah) as positive numbers." }));
    return;
  }

  const upstream = `https://tafsir.app/get.php?src=iraab-daas&s=${surah}&a=${ayah}&ver=1`;
  try {
    const response = await fetch(upstream, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learn-quran-iraab-keyboard/1.0",
        Referer: `https://tafsir.app/iraab-daas/${surah}/${ayah}`,
      },
    });
    const text = await response.text();
    if (!response.ok) {
      res.statusCode = response.status;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: `tafsir.app returned ${response.status}`, detail: text.slice(0, 200) }));
      return;
    }
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid JSON from tafsir.app" }));
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.end(
      JSON.stringify({
        surah,
        ayah,
        source: "iraab-daas",
        sourceLabel: "إعراب القرآن للدعاس",
        sourceUrl: `https://tafsir.app/iraab-daas/${surah}/${ayah}`,
        ayahsStart: payload?.ayahs_start ?? null,
        count: payload?.count ?? null,
        data: payload?.data || "",
        ayahText: payload?.ayah || "",
      }),
    );
  } catch (err) {
    res.statusCode = 502;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: err?.message || "Failed to fetch Daas iʿrāb." }));
  }
}
