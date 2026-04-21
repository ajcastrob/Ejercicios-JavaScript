import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ejer1: resolve(__dirname, "pages/ejer1.html"),
        ejer2: resolve(__dirname, "pages/ejer2.html"),
        ejer3: resolve(__dirname, "pages/ejer3.html"),
        ejer4: resolve(__dirname, "pages/ejer4.html"),
        ejer5: resolve(__dirname, "pages/ejer5.html"),
        ejer6: resolve(__dirname, "pages/ejer6.html"),
        ejer7: resolve(__dirname, "pages/ejer7.html"),
        ejer8: resolve(__dirname, "pages/ejer8.html"),
        ejer9: resolve(__dirname, "pages/ejer9.html"),
      },
    },
  },
});
