import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
  },
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
});
