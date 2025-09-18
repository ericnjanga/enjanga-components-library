// enjanga-components-library/tsup.config.ts
import { defineConfig } from "tsup";
import shared from "enjanga-core-setup/tsup.shared.js"; // must include .js

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  clean: true,
  external: shared.externals
});