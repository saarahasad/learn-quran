import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { ALL_WORKBOOKS, WORKBOOK_SERIES, MARFUAT_WORKBOOKS, workbookProgressId } from "../src/data/tuhfat/rafaWorkbooks.js";
import { workbookDocumentHtml } from "../src/utils/rafaWorkbookHtml.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/workbooks");
const chrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function fileUrl(absPath) {
  return `file://${absPath}`;
}

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function printPdf(htmlPath, pdfPath) {
  await new Promise((resolve, reject) => {
    const child = spawn(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--virtual-time-budget=3000",
        `--print-to-pdf=${pdfPath}`,
        fileUrl(htmlPath),
      ],
      { stdio: "inherit" },
    );
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Chrome exited ${code} for ${pdfPath}`));
    });
  });
}

function libraryIndexHtml() {
  const groups = WORKBOOK_SERIES.map((series) => {
    const cards = ALL_WORKBOOKS.filter((wb) => wb.series === series.id)
      .map((wb) => {
        const pdf = `./${wb.id}.pdf`;
        return `
      <article class="card" data-pdf="${esc(pdf)}" data-title="${esc(wb.titleEn)}" data-progress="${esc(workbookProgressId(wb))}">
        <div class="card__head">
          <button type="button" class="check" aria-label="Mark completed"></button>
          <div class="card__num">${wb.num}</div>
        </div>
        <h2 dir="rtl" lang="ar">${esc(wb.titleAr)}</h2>
        <p class="card__en">${esc(wb.titleEn)}</p>
        <div class="card__actions">
          <button type="button" class="btn btn--primary" data-view="${esc(pdf)}">View PDF</button>
          <a class="btn" href="${esc(pdf)}" download>Download</a>
        </div>
      </article>`;
      })
      .join("");
    return `<p class="group-label">${esc(series.en)}</p>
      <p class="group-label-ar" dir="rtl" lang="ar">${esc(series.ar)}</p>
      ${cards}`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Writing workbooks</title>
  <style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #f4efe6;
      color: #1c1917;
      font-family: "Iowan Old Style", Palatino, "Times New Roman", serif;
    }
    .wrap { max-width: 1120px; margin: 0 auto; padding: 28px 20px 48px; }
    h1 { margin: 0 0 4px; font-size: 1.7rem; font-weight: 600; }
    .lead { margin: 0 0 22px; color: #57534e; max-width: 40rem; }
    .layout {
      display: grid;
      grid-template-columns: minmax(260px, 340px) 1fr;
      gap: 18px;
      align-items: start;
    }
    .list { display: flex; flex-direction: column; gap: 12px; }
    .card {
      background: #fffef8;
      border: 1px solid #e7dcc8;
      padding: 14px 16px;
      cursor: pointer;
    }
    .card.is-done h2,
    .card.is-done .card__en { text-decoration: line-through; text-decoration-color: rgba(0,0,0,.28); }
    .card__head { display: flex; align-items: center; gap: 8px; }
    .check {
      width: 1.2rem; height: 1.2rem; flex-shrink: 0;
      border: 1.5px solid #78716c; border-radius: 4px;
      background: #fff; color: #fff; cursor: pointer; padding: 0;
      font-size: 0.8rem; font-weight: 800; line-height: 1;
    }
    .card.is-done .check { background: #166534; border-color: #166534; }
    .card.is-done { background: #f4faf4; border-color: #bbd7bb; }
    .card__num { color: #9a3412; font-size: 0.85rem; }
    .card h2 { margin: 4px 0 2px; font-size: 1.2rem; font-weight: 400; font-family: "Traditional Arabic", Amiri, serif; }
    .card__en { margin: 0 0 12px; color: #57534e; font-size: 0.92rem; }
    .card__actions { display: flex; gap: 8px; flex-wrap: wrap; }
    .group-label {
      margin: 14px 0 0;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #9a3412;
    }
    .group-label-ar {
      margin: 0 0 8px;
      color: #7c2d12;
      font-size: 1.05rem;
    }
    .btn {
      display: inline-block;
      padding: 7px 12px;
      border: 1px solid #9a3412;
      background: #fff;
      color: #7c2d12;
      text-decoration: none;
      font: inherit;
      font-size: 0.9rem;
      cursor: pointer;
    }
    .btn--primary { background: #7c2d12; color: #fffef8; border-color: #7c2d12; }
    .viewer {
      background: #fffef8;
      border: 1px solid #e7dcc8;
      min-height: 78vh;
      position: sticky;
      top: 12px;
      display: flex;
      flex-direction: column;
    }
    .viewer__bar {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      padding: 10px 12px;
      border-bottom: 1px solid #e7dcc8;
      background: #1c1917;
      color: #fafaf9;
    }
    .viewer__bar a { color: #fafaf9; }
    .viewer iframe, .viewer .empty {
      flex: 1;
      width: 100%;
      min-height: 72vh;
      border: 0;
      background: #fff;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #78716c;
      padding: 24px;
    }
    .empty[hidden],
    iframe[hidden] {
      display: none !important;
    }
    @media (max-width: 860px) {
      .layout { grid-template-columns: 1fr; }
      .viewer { position: static; min-height: 70vh; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <p dir="rtl" lang="ar" style="margin:0 0 4px;color:#7c2d12">كُرَّاسَةُ تَمَارِينَ</p>
    <h1>Writing workbooks</h1>
    <p class="lead">Click a workbook to view it here, then download the PDF to print and fill by hand. Arabic questions include English underneath.</p>
    <div class="layout">
      <div class="list">${groups}</div>
      <section class="viewer">
        <div class="viewer__bar">
          <span id="viewer-title">Select a workbook</span>
          <a id="viewer-download" href="#" download hidden>Download this PDF</a>
        </div>
        <div class="empty" id="viewer-empty">Choose a PDF on the left to preview it.</div>
        <iframe id="viewer-frame" title="PDF preview" hidden></iframe>
      </section>
    </div>
  </div>
  <script>
    const frame = document.getElementById("viewer-frame");
    const empty = document.getElementById("viewer-empty");
    const title = document.getElementById("viewer-title");
    const dl = document.getElementById("viewer-download");
    function showPdf(pdf, name, card) {
      document.querySelectorAll(".card").forEach((c) => c.classList.remove("is-active"));
      if (card) card.classList.add("is-active");
      empty.hidden = true;
      empty.style.display = "none";
      frame.hidden = false;
      frame.src = pdf;
      title.textContent = name;
      dl.hidden = false;
      dl.href = pdf;
    }
    document.querySelectorAll("[data-view]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        const card = btn.closest(".card");
        showPdf(btn.getAttribute("data-view"), card.dataset.title, card);
      });
    });
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest("a, .check")) return;
        showPdf(card.dataset.pdf, card.dataset.title, card);
      });
    });
    const KEY = "course_progress_v1";
    const COURSE = "ajrumiyyah";
    function readDone() {
      try {
        const store = JSON.parse(localStorage.getItem(KEY) || "{}");
        return Array.isArray(store[COURSE]) ? store[COURSE] : [];
      } catch { return []; }
    }
    function writeDone(ids) {
      let store = {};
      try { store = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch {}
      store[COURSE] = ids;
      localStorage.setItem(KEY, JSON.stringify(store));
    }
    function paintChecks() {
      const done = new Set(readDone());
      document.querySelectorAll(".card[data-progress]").forEach((card) => {
        const on = done.has(card.dataset.progress);
        card.classList.toggle("is-done", on);
        const btn = card.querySelector(".check");
        if (btn) btn.textContent = on ? "✓" : "";
      });
    }
    document.querySelectorAll(".check").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        const id = btn.closest(".card")?.dataset.progress;
        if (!id) return;
        const current = readDone();
        writeDone(current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
        paintChecks();
      });
    });
    paintChecks();
    const first = document.querySelector(".card");
    if (first) showPdf(first.dataset.pdf, first.dataset.title, first);
  </script>
</body>
</html>`;
}

const css = await readFile(join(root, "src/styles/ajrumiyyah-workbook.css"), "utf8");
const fontBuf = await readFile(join(root, "public/fonts/UthmanTN.woff2"));
const fontDataUrl = `data:font/woff2;base64,${fontBuf.toString("base64")}`;
const cssForFile = css.replace('url("/fonts/UthmanTN.woff2")', `url("${fontDataUrl}")`);

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "index.html"), libraryIndexHtml(), "utf8");
console.log("wrote", join(outDir, "index.html"));

for (const wb of MARFUAT_WORKBOOKS) {
  const html = workbookDocumentHtml(wb, { extraCss: cssForFile });
  const htmlPath = join(outDir, `${wb.id}.html`);
  const pdfPath = join(outDir, `${wb.id}.pdf`);
  await writeFile(htmlPath, html, "utf8");
  await printPdf(htmlPath, pdfPath);
  console.log("wrote", pdfPath);
}

console.log(`done — ${MARFUAT_WORKBOOKS.length} new workbooks; ${ALL_WORKBOOKS.length} listed in ${outDir}`);
