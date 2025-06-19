import { defineConfig } from 'vitest/config';
import { vitestPlugin } from '@storybook/addon-vitest'; // Updated import
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = typeof __dirname !== 'undefined' 
  ? __dirname 
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vitestPlugin(), // Now using the default export
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(dirname, '.storybook/test-setup.ts')],
    include: [
      'src/**/*.stories.{js,jsx,ts,tsx}',
      'src/**/*.test.{js,jsx,ts,tsx}'
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/node_modules/**'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
});