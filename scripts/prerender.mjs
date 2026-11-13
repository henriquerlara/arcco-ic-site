import { build } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// The server renderer runs only at build time. Hosting remains entirely static.
await build({
  build: {
    copyPublicDir: false,
    ssr: "src/entry-server.js",
    outDir: "dist-ssr",
    emptyOutDir: false,
    rollupOptions: { output: { entryFileNames: "entry-server.js" } },
  },
});
const { render } = await import(
  pathToFileURL(resolve("dist-ssr/entry-server.js"))
);
const markup = await render();
const destination = resolve("dist/index.html");
const shell = await readFile(destination, "utf8");
if (!shell.includes('<div id="app"></div>'))
  throw new Error("Static mount point not found");
if (!markup.includes("<h1") || !markup.includes('href="#solucao"'))
  throw new Error("Essential opening content is missing");
await writeFile(
  destination,
  shell.replace('<div id="app"></div>', `<div id="app">${markup}</div>`),
);
console.log(
  "Static HTML generated: opening, solution, explorer and company content.",
);
