import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import webExtension from "vite-plugin-web-extension";
import manifest from "./manifest.json";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    webExtension({
      manifest: () => manifest,
    }),
  ],
});
