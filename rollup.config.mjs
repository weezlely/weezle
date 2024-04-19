/**
 * Rollup 설정 모듈
 *
 * @author TAETAEO
 * @since 2024.04.15 Mon 17:44:31
 */

import pkg from "./package.json" assert { type: "json" };
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import postcssPrefixer from "postcss-prefixer";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".scss"];

process.env.BABEL_ENV = "production";

export default {
  input: "./index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      preserveModulesRoot: "src",
      globals: {
        react: "React",
        "react/jsx-runtime": "jsxRuntime",
      },
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    {
      name: pkg.name,
      file: pkg.browser,
      format: "umd",
      globals: {
        react: "React",
      },
    },
  ],
  watch: {
    include: "*",
    exclude: "node_modules/**",
  },
  plugins: [
    nodeResolve({ extensions }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    peerDepsExternal(),
    json(),
    commonjs(), // commonjs 플러그인을 설정하여 CommonJS 모듈을 올바르게 변환
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      modules: true,
      sourceMap: true,
      use: ["sass"],
      plugins: [
        postcssPrefixer({
          prefix: `${pkg.name}__`,
        }),
      ],
    }),
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
};
