// enjanga-components-library/tsup.config.ts
import { defineConfig } from "tsup";
import coreConfig from "enjanga-core-setup/tsup.config";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  clean: true,
  external: coreConfig.external // 🔥 re-use externals from core
});
