import { defineConfig } from 'vite';
 
export default defineConfig({
    base: "/Cours009/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});