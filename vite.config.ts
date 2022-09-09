import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs(
      {
        requireReturnsDefault: true,
        include:["node_modules/**"]
      }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'lib/icons/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    })],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'lib'), // 路径别名
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  optimizeDeps: {
    include: ['@/../extendLib/dist/vuedraggable.umd.js','quill']
  },

  css: {
    preprocessorOptions: {
      scss: {
        /* 自动引入全局scss文件 */
        additionalData: '@import "./lib/styles/global.scss";'
      }
    }
  },
  build: {
    // //minify: false,
    // commonjsOptions: {
    //   exclude: [
    //     "vuedraggable",
    //     'extendLib/dist/vuedraggable.umd.js,',  //引号前的逗号不能删，不知何故？？
    //     './extendLib/dist/vuedraggable.umd.js',  //引号前的逗号不能删，不知何故？？
    //     //'vue/dist/*.js'
    //   ],
    //   include: []
    //   //requireReturnsDefault: true
    // },

    lib: {
      entry: path.resolve(__dirname, "lib/index"),
      name: "coder-vform3",
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "dayjs",
        "@aspnet/signalr",
        "ant-design-vue",
        "coder-member-components-vue3",
        "element-plus",
        "vue3-text-clamp",
        "crypto-js", "vue-router",
        "axios","vuenextdraggable","vuedraggable",
        "coder-vuedraggable","vuedraggable-es","zhyswan-vuedraggable"

      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
