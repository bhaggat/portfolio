import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    minify: "esbuild",
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "stats.html",
        }),
      ],
      output: {
        chunkFileNames: "assets/[name].js",
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
