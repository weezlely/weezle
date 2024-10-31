import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin as veVitePlugin } from "@vanilla-extract/vite-plugin";
import { vanillaExtractPlugin as veEsbuildPlugin } from "@vanilla-extract/esbuild-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [veEsbuildPlugin({ runtime: true })],
    },
    exclude: ["js-big-decimal"],
  },
  plugins: [react(), tsconfigPaths(), veVitePlugin()],
  envPrefix: "VITE_ENV",
  resolve: {},
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            console.log("빌드", id);
            return `vendor`;
          }
        },
      },
    },
  },

  server: {
    preTransformRequests: true,
    port: 3000,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
    proxy: {
      "/api": {
        target: "URI",
        changeOrigin: true,
      },
    },
  },
});
