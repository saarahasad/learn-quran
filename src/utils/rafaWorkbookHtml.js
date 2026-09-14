/**
 * Printable HTML for a rafʿ workbook (writing pages + answer key).
 */

import { WORKBOOK_CATS } from "../data/tuhfat/rafaWorkbooks.js";

const CAT_LABEL = Object.fromEntries(WORKBOOK_CATS.map((c) => [c.id, c]));

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function linesBox(n, fill = "", max = 3) {
  const count = Math.min(max, Math.max(2, Number(n) || 3));
  const fillHtml = fill
    ? `<p class="wb-fill" dir="rtl" lang="ar">${esc(fill)}</p>`
    : "";
  return `<div class="wb-lines" style="--rows:${count}">${fillHtml}<div class="wb-lines__rules" aria-hidden="true">${"<span></span>".repeat(count)}</div></div>`;
}

function enLine(text) {
  if (!text) return "";
  return `<p class="wb-en-line" dir="ltr" lang="en">${esc(text)}</p>`;
}

function questionBlock(item, i) {
  const cat = CAT_LABEL[item.cat] || { ar: "", en: "" };
  return `
    <article class="wb-q">
      <header class="wb-q__head">
        <span class="wb-q__num">${i + 1}</span>
        <span class="wb-q__cat">${esc(cat.ar)}${cat.en ? ` · ${esc(cat.en)}` : ""}</span>
      </header>
      <div class="wb-q__prompt">
        <p class="wb-q__text" dir="rtl" lang="ar">${esc(item.q)}</p>
        ${enLine(item.qEn)}
      </div>
      ${linesBox(item.lines, item.answer)}
    </article>`;
}

function exerciseBlock(ex, i) {
  let body = "";
  if (ex.passage) {
    body += `<p class="wb-passage" dir="rtl" lang="ar">${esc(ex.passage)}</p>`;
  }
  if (ex.blanks?.length) {
    body += `<ol class="wb-blanks" dir="rtl" lang="ar">${ex.blanks
      .map((b) => `<li>${esc(b)}</li>`)
      .join("")}</ol>`;
  }
  if (ex.tableRows && ex.columns) {
    const cols = ex.columns.map((c) => `<th>${esc(c)}</th>`).join("");
    const rows = Array.from({ length: ex.tableRows }, () => {
      const cells = ex.columns.map(() => `<td></td>`).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    body += `<table class="wb-table" dir="rtl" lang="ar"><thead><tr>${cols}</tr></thead><tbody>${rows}</tbody></table>`;
  }
  if (ex.lines) {
    body += linesBox(ex.lines, ex.answerAr, 4);
  } else if (!ex.tableRows && !ex.blanks) {
    body += linesBox(4, ex.answerAr, 4);
  } else if (ex.blanks) {
    body += linesBox(Math.min(4, Math.max(2, ex.blanks.length)), ex.answerAr, 4);
  } else if (ex.answerAr) {
    body += `<p class="wb-fill wb-fill--block" dir="rtl" lang="ar">${esc(ex.answerAr)}</p>`;
  }
  return `
    <article class="wb-ex">
      <div class="wb-ex__prompt">
        <h3 class="wb-ex__title" dir="rtl" lang="ar">${esc(ex.titleAr || `تَمْرِينٌ ${i + 1}`)}</h3>
        ${enLine(ex.titleEn || "Book exercise")}
        <p class="wb-ex__inst" dir="rtl" lang="ar">${esc(ex.instructionAr || "")}</p>
        ${enLine(ex.instructionEn || "")}
      </div>
      ${body}
    </article>`;
}

export function workbookInnerHtml(wb) {
  const questions = wb.questions || [];
  const exercises = wb.exercises || [];

  const writingQs = questions.map(questionBlock).join("");
  const writingEx = exercises.map(exerciseBlock).join("");

  return `
    <section class="wb-cover">
      <p class="wb-kicker" dir="rtl" lang="ar">كُرَّاسَةُ تَمَارِينَ</p>
      <p class="wb-en-line">Writing workbook</p>
      <p class="wb-series" dir="rtl" lang="ar">مِنْ مَتْنِ الْآجُرُّومِيَّةِ وَشَرْحِ التُّحْفَةِ السَّنِيَّةِ</p>
      <p class="wb-en-line">From the Ājurrūmiyyah matn and Tuḥfat al-Saniyyah commentary</p>
      <h1 dir="rtl" lang="ar">${esc(wb.titleAr)}</h1>
      <p class="wb-en">${esc(wb.titleEn)}</p>
      <ol class="wb-howto">
        <li>
          <span dir="rtl" lang="ar">اُكْتُبِ الْمَتْنَ مِنْ حِفْظِكَ.</span>
          ${enLine("Write the matn from memory.")}
        </li>
        <li>
          <span dir="rtl" lang="ar">أَجِبْ عَنِ الْأَسْئِلَةِ بِالْعَرَبِيَّةِ.</span>
          ${enLine("Answer the questions in Arabic.")}
        </li>
        <li>
          <span dir="rtl" lang="ar">لَا تُظْهِرِ الْإِجَابَاتِ حَتَّى تَكْتُبَ.</span>
          ${enLine("Do not show the answers until you have written.")}
        </li>
      </ol>
    </section>

    <section class="wb-matn-copy">
      <h2 dir="rtl" lang="ar">اِكْتُبِ الْمَتْنَ</h2>
      ${enLine("Write the matn")}
      <p class="wb-matn-ref" dir="rtl" lang="ar">${esc(wb.matnAr)}</p>
      ${enLine(wb.matnEn)}
      <div class="wb-copy-block">
        <p class="wb-repeat-label" dir="rtl">الْمَرَّةُ الْأُولَىٰ <span class="wb-en-inline">· 1st</span></p>
        ${linesBox(3, wb.matnAr)}
      </div>
      <div class="wb-copy-block">
        <p class="wb-repeat-label" dir="rtl">الْمَرَّةُ الثَّانِيَةُ <span class="wb-en-inline">· 2nd</span></p>
        ${linesBox(3)}
      </div>
    </section>

    <section class="wb-questions">
      <h2 dir="rtl" lang="ar">الْأَسْئِلَةُ</h2>
      ${enLine("Questions")}
      ${writingQs}
    </section>

    ${
      exercises.length
        ? `<section class="wb-exercises">
      <h2 dir="rtl" lang="ar">تَمَارِينُ الْكِتَابِ</h2>
      ${enLine("Book exercises")}
      ${writingEx}
    </section>`
        : ""
    }

    <section class="wb-repeat">
      <h2 dir="rtl" lang="ar">صَفْحَةُ التَّكْرَارِ</h2>
      ${enLine("Repeat page")}
      <p class="wb-matn-prompt" dir="rtl" lang="ar">أَعِدْ كِتَابَةَ مَا أَخْطَأْتَ فِيهِ.</p>
      ${enLine("Rewrite what you got wrong.")}
      ${linesBox(6, "", 6)}
    </section>`;
}

export function workbookDocumentHtml(wb, { fontUrl, cssHref, extraCss } = {}) {
  const fontFace = fontUrl
    ? `@font-face{font-family:"UthmanTN";src:url("${fontUrl}") format("woff2");font-weight:normal;font-style:normal;font-display:block;}`
    : "";
  const cssLink = cssHref ? `<link rel="stylesheet" href="${cssHref}">` : "";
  const style = extraCss ? `<style>${extraCss}</style>` : "";

  return `<!DOCTYPE html>
<html lang="ar" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>${esc(wb.titleAr)} — كراسة تمارين</title>
  <style>${fontFace}</style>
  ${cssLink}
  ${style}
</head>
<body class="wb-print">
  <main class="wb" dir="rtl" lang="ar">
    ${workbookInnerHtml(wb)}
  </main>
</body>
</html>`;
}
