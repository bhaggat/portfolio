import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

async function prerender() {
  console.log("Building SSR bundle for pre-rendering...");
  await build({
    root,
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "dist-ssr",
      emptyOutDir: true,
    },
    configFile: path.resolve(root, "vite.config.ts"),
    logLevel: "warn",
  });

  const entryServerPath = path.resolve(root, "dist-ssr/entry-server.js");
  const { render } = await import(`file://${entryServerPath}`);
  const { html } = render();

  const indexPath = path.resolve(root, "dist/index.html");
  let template = fs.readFileSync(indexPath, "utf-8");

  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  fs.writeFileSync(indexPath, template);
  console.log("Successfully pre-rendered static HTML into dist/index.html (" + Math.round(html.length / 1024) + " KB content)");

  // Clean up temporary SSR bundle
  fs.rmSync(path.resolve(root, "dist-ssr"), { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
