import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        svgr(),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "#components": path.resolve(__dirname, "./src/components"),
            "#context": path.resolve(__dirname, "./src/context"),
            "#fonts": path.resolve(__dirname, "./src/assets/fonts"),
            "#svg": path.resolve(__dirname, "./src/assets/svg"),
            "#utils": path.resolve(__dirname, "./src/utils"),
            "#providers": path.resolve(__dirname, "./src/providers"),
            "#hooks": path.resolve(__dirname, "./src/hooks"),
        },
    },

    css: {
        modules: {
            generateScopedName: "[name]__[local]--[hash:base64:5]",
        },
        // Подавлем предупреждия bootstrap
        preprocessorOptions: {
            scss: {
                quietDeps: true,
            },
        },
    },
});
