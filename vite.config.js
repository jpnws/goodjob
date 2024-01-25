import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { stylexPlugin } from 'vite-plugin-stylex-dev';

export default defineConfig({
  plugins: [react(), stylexPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
