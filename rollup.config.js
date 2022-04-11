import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import { main, types, module, name } from "./package.json";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    external: ["vue"],
    output: [
      {
        file: `${main}`,
        format: "cjs",
      },
      {
        file: `dist/${name}.js`,
        format: "iife",
        name: "vueKapsule",
        globals: {
          vue: "Vue",
        },
      },
      {
        file: `${module}`,
        format: "esm",
      },
    ],
    plugins: [nodeResolve(), commonjs(), typescript(), babel(), terser()],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: `${types}`,
      },
    ],
    plugins: [nodeResolve(), commonjs(), dts()],
  },
];
