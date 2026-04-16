import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ejercicio1: resolve(__dirname, "pages/ejercicio1.html"),
      },
    },
  },
});
