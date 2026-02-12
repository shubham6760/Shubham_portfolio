// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Shubham_portfolio/", // for a user site (username.github.io) use "/"
  plugins: [react()],
});
