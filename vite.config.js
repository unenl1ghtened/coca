import { defineConfig } from 'vite';

export default defineConfig({
    root: "src",
    server: {
        port: 3000,
        open: true, //по умолчанию страничка открывается в браузере
    },
    build: {
        outDir: "../dist",
    },
});
