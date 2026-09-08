import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  banner: { js: '"use client";' },
  outDir: 'dist',
  clean: false,
  external: ['react', 'react-dom', 'clsx'],
  treeshake: false,
  splitting: false,
  esbuildOptions(options) {
    options.platform = 'neutral';
    options.mainFields = ['module', 'main'];
  },
});
