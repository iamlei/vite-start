import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteMockServe } from "vite-plugin-mock"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 设置为相对路径
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
