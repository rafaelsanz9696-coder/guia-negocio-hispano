// Genera index.html (repo, lee book/ con fetch) y dist/guia.html (autocontenido, datos embebidos).
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const app = fs.readFileSync(path.join(root, "src/app.html"), "utf8");
const head = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n';
// index.html del repo: documento completo
const [pre, ...rest] = app.split("</style>");
fs.writeFileSync(path.join(root, "index.html"), head + pre + "</style>\n</head>\n<body>\n" + rest.join("</style>") + "\n</body>\n</html>\n");
// versión autocontenida
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const files = [...new Set([...readme.matchAll(/\((book\/[^)]+\.md)\)/g)].map((m) => m[1]))];
const data = Object.fromEntries(files.map((f) => [f, fs.readFileSync(path.join(root, f), "utf8")]));
const embed = `<script>window.GUIA_DATA=${JSON.stringify(data).replace(/</g, "\\u003c")};</script>\n`;
const body = app.replace("<script>\n(function(){", embed + "<script>\n(function(){");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist/guia.html"), body); // para el Artifact (sin esqueleto)
fs.writeFileSync(path.join(root, "dist/guia-offline.html"), head + body.replace("</style>", "</style>\n</head>\n<body>") + "\n</body>\n</html>\n");
console.log("ok", files.length, "archivos");
