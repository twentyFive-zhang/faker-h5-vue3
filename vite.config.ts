import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VantResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
// @ts-ignore
import pxtovw from 'postcss-px-to-viewport'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    createStyleImportPlugin({
      resolves: [VantResolve()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        pxtovw({
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
        })
      ]
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
})
