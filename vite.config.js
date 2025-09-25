import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/analytics-pro/", // 👈 needed for GH Pages
  plugins: [react()],
});

