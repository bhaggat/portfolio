import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "stats.html", // Output file
          open: true, // Automatically open the file in your browser
        }),
      ],
    },
  },
});
