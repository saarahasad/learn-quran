/** Escape and format bilingual Tuḥfat commentary blocks for display */

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function playBtnHtml(text) {
  return `<button type="button" class="ajr-ar-play" data-ar="${esc(text)}" aria-label="Play Arabic" title="Play Arabic">▶</button>`;
}

function paraHtml(text) {
  if (!text) return "";
  return esc(text)
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

/** Arabic block with a single play button for the full passage */
export function arabicContentHtml(text, { inline = false, play = true } = {}) {
  if (!text) return "";
  const fullText = String(text).trim();
  const blockClass = inline ? "ajr-ar-block ajr-ar-block--inline" : "ajr-ar-block";
  return `<div class="${blockClass}" dir="rtl">
    ${play ? playBtnHtml(fullText) : ""}
    <div class="ajr-ar-block__text">${paraHtml(text)}</div>
  </div>`;
}

/** قَالَ = matn; وَأَقُولُ and following = sharḥ */
function resolveBlockKind(block) {
  if (block.kind) return block.kind;
  const ar = (block.ar ?? "").trim();
  if (ar.startsWith("[")) return "title";
  if (block.label === "قَالَ") return "matn";
  if (/^قَالَ:\s/.test(ar)) return "matn";
  if (/^الْكَلَامُ هُوَ|^الْإِعْرَابُ|^وَالْفِعْلُ عَلَى ثَلَاثَةِ/.test(ar)) return "matn";
  return "commentary";
}

/** Section-head titles are stored as "[...]" — strip the brackets for display */
function stripTitleBrackets(text) {
  if (!text) return text;
  return String(text).trim().replace(/^\[+/, "").replace(/\]+$/, "").trim();
}

/** Gold matn-line divider between commentary sections (as in the book) */
export function matnLineDividerHtml(ar, en) {
  return `<div class="ajr-tuhfat-matn-divider">
    <div class="ajr-tuhfat-matn-divider__ar">${arabicContentHtml(ar)}</div>
    ${en ? `<div class="ajr-tuhfat-matn-divider__en">${paraHtml(en)}</div>` : ""}
  </div>`;
}

export function blocksToHtml(blocks) {
  if (!blocks?.length) return null;
  return blocks
    .map((block) => {
      const kind = resolveBlockKind(block);
      const isTitle = kind === "title";
      const parts = [];

      if (block.label && block.label !== "قَالَ" && block.label !== "وَأَقُولُ") {
        parts.push(`<div class="ajr-tuhfat-label">${esc(block.label)}</div>`);
      }

      if (isTitle) {
        parts.push(`<span class="ajr-tuhfat-section-head__badge">Commentary</span>`);
        if (block.ar) {
          parts.push(`<div class="ajr-tuhfat-section-head__ar">${arabicContentHtml(stripTitleBrackets(block.ar), { play: false })}</div>`);
        }
        if (block.en) {
          parts.push(`<div class="ajr-tuhfat-section-head__en">${paraHtml(stripTitleBrackets(block.en))}</div>`);
        }
        return `<div class="ajr-tuhfat-section-head">${parts.join("")}</div>`;
      }

      const inner = [];
      if (block.ar) {
        inner.push(`<div class="ajr-tuhfat-ar ajr-tuhfat-ar--${kind}">${arabicContentHtml(block.ar)}</div>`);
      }
      if (block.en) {
        inner.push(`<div class="ajr-tuhfat-en ajr-tuhfat-en--${kind}">${paraHtml(block.en)}</div>`);
      }
      if (block.footnote) {
        inner.push(`<div class="ajr-tuhfat-footnote">${paraHtml(block.footnote)}</div>`);
      }

      return `<div class="ajr-tuhfat-passage ajr-tuhfat-passage--${kind}">${inner.join("")}</div>`;
    })
    .join("");
}

export function drillsHtml({ titleAr, titleEn, items, note }) {
  if (!items?.length) return "";
  const rows = items
    .map((item, i) => {
      const ar = item.ar ? `<div class="ajr-tuhfat-drill-ar">${arabicContentHtml(item.ar)}</div>` : "";
      const en = item.en ? `<div class="ajr-tuhfat-drill-en">${paraHtml(item.en)}</div>` : "";
      return `<li class="ajr-tuhfat-drill"><span class="ajr-tuhfat-drill-num">${i + 1}</span>${ar}${en}</li>`;
    })
    .join("");
  const noteHtml = note
    ? `<div class="ajr-tuhfat-footnote">${paraHtml(note)}</div>`
    : "";
  const title =
    titleAr && titleEn
      ? `<h3 class="ajr-tuhfat-drills-title">${arabicContentHtml(titleAr, { inline: true })} — ${esc(titleEn)}</h3>`
      : titleAr
        ? `<h3 class="ajr-tuhfat-drills-title">${arabicContentHtml(titleAr, { inline: true })}</h3>`
        : titleEn
          ? `<h3 class="ajr-tuhfat-drills-title">${esc(titleEn)}</h3>`
          : "";
  return `<div class="ajr-tuhfat-drills">
    ${title}
    ${noteHtml}
    <ol class="ajr-tuhfat-drills-list">${rows}</ol>
  </div>`;
}

export function frontMatterToHtml(section) {
  return blocksToHtml(section.blocks);
}
