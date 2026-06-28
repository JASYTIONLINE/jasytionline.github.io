/**
 * Regenerate digiportai/index.html from the root index.html.
 * Run: npm run sync:digiportai
 */
const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");
const SOURCE = path.join(REPO_ROOT, "index.html");
const OUT_DIR = path.join(REPO_ROOT, "digiportai");
const OUT_FILE = path.join(OUT_DIR, "index.html");

const GENERATED_BANNER =
  "<!-- This file is generated from /index.html. Do not edit directly. Run scripts/sync-digiportai-page.js after updating the root index.html. -->\n";

const SEO = {
  title: "DigiPort AI | Jasyti Online",
  description:
    "DigiPort AI is the outreach and front-door brand under Jasyti Online, connecting people to AI-enabled tools, content, and services.",
  canonical: "https://jasyti.com/digiportai/",
  ogTitle: "DigiPort AI | Jasyti Online",
  ogUrl: "https://jasyti.com/digiportai/",
};

function buildSeoBlock() {
  const { title, description, canonical, ogTitle, ogUrl } = SEO;
  return [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${ogTitle}" />`,
    `<meta property="og:url" content="${ogUrl}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
  ].join("\n    ");
}

function stripCloneOnlyMarkup(html) {
  return html
    .replace(/<!-- This file is generated from \/index\.html\.[\s\S]*? -->\n?/g, "")
    .replace(/\s*<base href="\/"\s*\/?>\n?/gi, "")
    .replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>\n?/gi, "")
    .replace(/\s*<meta property="og:[^"]*" content="[^"]*"\s*\/?>\n?/gi, "")
    .replace(/\s*<meta name="twitter:[^"]*" content="[^"]*"\s*\/?>\n?/gi, "");
}

function applyDigiportSeo(html) {
  let out = stripCloneOnlyMarkup(html);

  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta\n      name="description"\n      content="${SEO.description}"\n    />`
  );

  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${SEO.title}</title>`);

  const inject = `${GENERATED_BANNER}    <base href="/" />\n    ${buildSeoBlock()}\n`;

  out = out.replace(
    /(<meta name="viewport"[^>]*\/?>)/i,
    `$1\n${inject}`
  );

  return out;
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    process.exit(1);
  }

  const sourceHtml = fs.readFileSync(SOURCE, "utf8");
  const outputHtml = applyDigiportSeo(sourceHtml);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, outputHtml, "utf8");

  console.log(`Generated ${path.relative(REPO_ROOT, OUT_FILE)} from index.html`);
}

main();
