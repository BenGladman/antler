import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        information: path.resolve(__dirname, "information.html"),
        credits: path.resolve(__dirname, "credits.html"),
      },
    },
  },
});
