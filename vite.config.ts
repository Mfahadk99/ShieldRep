import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@ui": path.resolve(__dirname, "src/components/ui"),
        "@layout": path.resolve(__dirname, "src/components/layout"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@contexts": path.resolve(__dirname, "src/contexts"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    // Remove or uncomment this if you use it
    // root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
  };
});
