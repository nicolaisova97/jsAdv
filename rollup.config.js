import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/app.js",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
    postcss({
      extract: "assets/bundle.css", // фиксированное имя
    }),
    nodeResolve(),
  ],
};
