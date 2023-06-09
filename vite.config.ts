import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { VantResolve, createStyleImportPlugin } from "vite-plugin-style-import";
// @ts-ignore
import pxtovw from "postcss-px-to-viewport";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

// console.log(import.meta.env,)

// https://vitejs.dev/config/

export default ({ mode }) => {
  console.log(mode,'import.meta.env.VITE_BASE',)
  const envJson=loadEnv(mode,process.cwd())
  console.log(envJson)
  return {
    base: envJson['VITE_BASE'],
    plugins: [
      vue(),
      vueJsx(),
      createStyleImportPlugin({
        resolves: [VantResolve()],
        libs: [
          {
            libraryName: "vant",
            esModule: true,
            resolveStyle: (component) => `/node_modules/vant/es/${component}/style/index`,
          },
        ],
      }),
    ],
    css: {
      postcss: {
        plugins: [
          require("autoprefixer"),
          pxtovw({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: "vw",
            landscapeWidth: 568,
          }),
        ],
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
};
// export default defineConfig({
//   base: './',
//   plugins: [
//     vue(),
//     vueJsx(),
//     createStyleImportPlugin({
//       resolves: [VantResolve()],
//       libs: [
//         {
//           libraryName: 'vant',
//           esModule: true,
//           resolveStyle: component => `/node_modules/vant/es/${component}/style/index`,
//         },
//       ],
//     }),
//   ],
//   css: {
//     postcss: {
//       plugins: [
//         require('autoprefixer'),
//         pxtovw({
//           unitToConvert: 'px',
//           viewportWidth: 375,
//           unitPrecision: 5,
//           propList: ['*'],
//           viewportUnit: 'vw',
//           fontViewportUnit: 'vw',
//           selectorBlackList: [],
//           minPixelValue: 1,
//           mediaQuery: false,
//           replace: true,
//           exclude: [],
//           landscape: false,
//           landscapeUnit: 'vw',
//           landscapeWidth: 568
//         })
//       ]
//     }
//   },
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "src"),
//     },
//   },
//   build: {
//     minify: 'terser',
//     terserOptions: {
//       compress: {
//         //生产环境时移除console
//         drop_console: true,
//         drop_debugger: true,
//       },
//     },
//   }
// })
