import fs from "node:fs";
import assert from "node:assert/strict";
import crypto from "node:crypto";
const routes = JSON.parse(fs.readFileSync("src/data/routes.json", "utf8"));
for (const r of routes) {
  const file = "out" + (r.path === "/" ? "/" : r.path + "/") + "index.html";
  const text = fs.readFileSync(file, "utf8");
  assert.equal((text.match(/<h1(?:\s|>)/g) || []).length, 1, r.path + " h1");
  assert.ok(text.includes(r.title.replaceAll("&", "&amp;")), r.path + " title");
  for (const src of [...r.styles, ...r.scripts])
    assert.ok(fs.existsSync("out" + src), src);
  assert.ok(!text.includes("C:/Users/"), r.path + " leaked local path");
}
const original = JSON.parse(fs.readFileSync("ASSET-MANIFEST.json", "utf8"));
for (const a of original) {
  const digest = crypto
    .createHash("sha256")
    .update(fs.readFileSync("out/" + a.path))
    .digest("hex");
  assert.equal(digest, a.sha256, a.path + " changed");
}
assert.ok(fs.readFileSync("out/sitemap.xml", "utf8").includes("<urlset"));
console.log(
  `PASS: ${routes.length} routes, headings, titles, scripts/styles, and ${original.length} unchanged assets.`,
);
