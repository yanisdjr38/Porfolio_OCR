import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "framer-motion"],
          icons: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
          ],
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
  },
});
