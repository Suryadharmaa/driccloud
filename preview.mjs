import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const routes = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/styles.css", "styles.css"],
]);
createServer(async (req, res) => {
  const file = routes.get((req.url ?? "").split("?")[0]);
  if (!file || !["GET", "HEAD"].includes(req.method ?? "")) {
    res.writeHead(404);
    res.end();
    return;
  }
  try {
    const data = await readFile(new URL(file, import.meta.url));
    res.writeHead(200, {
      "Content-Type": file.endsWith(".css")
        ? "text/css; charset=utf-8"
        : "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  } catch {
    res.writeHead(500);
    res.end();
  }
}).listen(4173, "127.0.0.1", () =>
  console.log("Preview: http://127.0.0.1:4173"),
);
