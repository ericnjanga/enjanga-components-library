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
      // ✅ Emit real CSS files and turn SCSS imports into CSS imports
      type: "css",
      cssImports: true, // makes `import './x.scss'` become `import './x.css'`
    }),
  ],
});
