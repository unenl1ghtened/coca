import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  root: "src",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
