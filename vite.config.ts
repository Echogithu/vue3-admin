import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import usePluginImport from 'vite-plugin-importer/src';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 设置主题色
        },
      },
      scss: {
        // additionalData: `@import "@/assets/styles/sassLoader/_index.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    usePluginImport({
      libraryName: 'ant-design-vue',
      // 或者 style: true, 这样会引用less（如果项目中使用less的话）
      style: true,
      libraryDirectory: 'es',
    }),
  ],
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
