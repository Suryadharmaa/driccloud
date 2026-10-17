import { mkdir, copyFile } from "node:fs/promises";
await mkdir("dist", { recursive: true });
for (const file of ["index.html", "styles.css", "_headers"])
  await copyFile(file, `dist/${file}`);
console.log(
  "Static website built in dist/. Tidak ada server Node pada hosting produksi.",
);
