import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ejer1: resolve(__dirname, "pages/ejer1.html"),
        ejer2: resolve(__dirname, "pages/ejer2.html"),
      },
    },
  },
});
