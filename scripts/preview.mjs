import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".gif": "image/gif",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
createServer(async (req, res) => {
  try {
    let path = resolve(
      root,
      "." +
        decodeURIComponent(
          new URL(req.url || "/", "http://localhost").pathname,
        ),
    );
    if (path !== root && !path.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    try {
      if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
    } catch {
      path = resolve(path, "index.html");
    }
    let data;
    try {
      data = await readFile(path);
    } catch {
      res
        .writeHead(404, { "Content-Type": "text/html" })
        .end(await readFile(resolve(root, "404.html")));
      return;
    }
    res.writeHead(200, {
      "Content-Type": types[extname(path)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(400).end("Bad request");
  }
}).listen(Number(process.env.PORT || 3000), "127.0.0.1", () =>
  console.log("Preview: http://127.0.0.1:" + (process.env.PORT || 3000)),
);
