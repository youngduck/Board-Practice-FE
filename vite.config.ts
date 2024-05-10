import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@api", replacement: path.resolve(__dirname, "src/api") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      { find: "@types", replacement: path.resolve(__dirname, "src/types") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
    ],
  },
});
