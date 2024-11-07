import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
    }),
  ],
  build: {
    target: 'es5',
    lib: {
      entry: './src/main.js',
      // entry: "src/main.js",
      outDir: 'dist', // 输出目录
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
