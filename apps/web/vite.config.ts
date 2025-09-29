import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  preview: {
    port: 3001,
    https: {
      cert: path.resolve(__dirname, "../../.cert/cert.pem"),
      key: path.resolve(__dirname, "../../.cert/key.pem"),
    },
  },
  server: {
    port: 3001,
    https: {
      cert: path.resolve(__dirname, "../../.cert/cert.pem"),
      key: path.resolve(__dirname, "../../.cert/key.pem"),
    },
    allowedHosts: ["localhost"],
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react(), svgr(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
