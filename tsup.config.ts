// enjanga-components-library/tsup.config.ts

import { defineConfig } from "tsup";
import shared from "enjanga-core-setup/tsup.shared.js";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  clean: false, // keep dist/styles.css
  external: [...shared.externals, "react-is"],
  noExternal: ["react-is"], // 👈 make sure esbuild does NOT inline it
  treeshake: true,
  splitting: false,
  esbuildOptions(options) {
    options.platform = "neutral";
    options.mainFields = ["module", "main"]; // 👈 force ESM resolution
    return options;
  },
});
