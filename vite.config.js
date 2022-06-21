import manifest from './manifest.json';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

var DIR_PATH = path.join.bind(null, __dirname);

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist'
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: 'My React RTKQ'
        }
      }
    }),
    react({
      include: '**/*.{js,jsx,ts,tsx}'
    }),
    VitePWA({
      manifest,
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png'
      ],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/requests': DIR_PATH('src/requests/*'),
      '@/components': DIR_PATH('src/components/*'),
      '@/hooks': DIR_PATH('src/hooks/*'),
      '@/pages': DIR_PATH('src/pages/*'),
      '@/store': DIR_PATH('src/store/*'),
      '@/theme': DIR_PATH('src/theme/*'),
      '@/utils': DIR_PATH('src/utils/*')
    }
  }
});
