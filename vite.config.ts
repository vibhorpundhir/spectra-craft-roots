import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Static SPA build — no SSR, no Nitro, no server required.
// Output goes to dist/ — upload that folder to Hostinger.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // Optimise chunk splitting for better caching on shared hosting
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor";
          }
          if (id.includes("@tanstack/react-router") || id.includes("@tanstack/react-query")) {
            return "router";
          }
          if (id.includes("lucide-react") || id.includes("motion")) {
            return "ui";
          }
        },
      },
    },
  },
  // Security headers (only for dev server; production uses .htaccess)
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
    },
  },
});
