// tsup.config.ts
import { defineConfig } from "tsup";
import shared from "enjanga-core-setup/tsup.shared.js";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  clean: false, // keep dist/styles.css
  external: [...shared.externals, "react-is"],
  noExternal: ["react-is"],
  treeshake: true,
  splitting: false,
  esbuildOptions(options) {
    options.platform = "neutral";
    options.mainFields = ["module", "main"];
    return options;
  },
  esbuildPlugins: [
    sassPlugin({
      // "style" = injects <style> tags at runtime when the JS bundle is loaded
      // This works well for component-level styles.
      type: "style",
      // optional: loadPaths: ["src", "node_modules"],
    }),
  ],
});
