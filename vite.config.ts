import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is a `username.github.io` repo, so the site is served from the domain
// root. Keep base at '/'.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
