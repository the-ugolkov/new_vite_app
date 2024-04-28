import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react({ babel: { plugins: ["babel-plugin-styled-components"] } })],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "src", replacement: path.join(__dirname, "src") }],
  },
});
