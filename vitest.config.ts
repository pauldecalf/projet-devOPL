/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      provider: "v8", // ou 'c8' si tu préfères
      all: false, // <--- TRÈS important : on ne veut pas tout couvrir, juste ce qui est testé
      include: ["components/functions.tsx", "app/test-page/page.tsx"], // <--- on cible uniquement ton fichier à tester
      reporter: ["text", "json", "html"],
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
});
