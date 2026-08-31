// tsup.config.ts
import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

const external = [
  'react',
  'react-dom',
  'next',
  'next/link',
  'next/navigation',
  'next/image',
  '@carbon/react',
  '@carbon/icons-react',
  '@carbon/styles',
  '@carbon/pictograms-react',
  '@contentful/rich-text-types',
  'clsx',
];

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  clean: false, // keep dist/styles.css
  external,
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
