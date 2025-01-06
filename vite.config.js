import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Source files are in the `src` folder
  build: {
    outDir: "../dist", // Output files go to the `dist` folder
  },
});
