import { defineConfig, loadEnv, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin as veVitePlugin } from "@vanilla-extract/vite-plugin";
import { vanillaExtractPlugin as veEsbuildPlugin } from "@vanilla-extract/esbuild-plugin";
import path from "path";

interface Env {
  VITE_SERVER: string;
  VITE_PORT?: string;
}

const createProxyTarget = (env: Env): string => `${env.VITE_SERVER}${env.VITE_PORT ? `:${env.VITE_PORT}` : ""}`;

const esbuildPlugins = [veEsbuildPlugin({ runtime: true })];
const plugins = [react(), tsconfigPaths(), veVitePlugin()];

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), "VITE_") as unknown as Env;

  return {
    optimizeDeps: {
      esbuildOptions: {
        plugins: esbuildPlugins,
      },
      exclude: ["js-big-decimal"],
    },
    plugins,
    envPrefix: "VITE_",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              console.log(`빌드: ${id}`); // 디버깅용 로그
              return "vendor";
            }
          },
        },
      },
    },
    server: {
      preTransformRequests: true,
      port: parseInt(env.VITE_PORT!),
      headers: {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
      proxy: {
        "/api": {
          target: createProxyTarget(env),
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
