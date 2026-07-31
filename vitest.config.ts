import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

/**
 * Vitest configuration for RoyCSS unit tests.
 *
 * - Tests live in `tests/unit/**\/*.test.ts`.
 * - Environment is `node` (no DOM) — RoyCSS's lib modules are pure TypeScript.
 * - Coverage is collected by V8 against `src/lib/**` with a 70 % floor.
 * - The `@/*` path alias mirrors `tsconfig.json` so tests can import the same
 *   way the application does.
 *
 * Run:    bunx vitest run --coverage
 * Watch:  bunx vitest
 */
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
    exclude: ["node_modules/**", "dist/**", ".next/**", "tests/e2e/**"],
    globals: false,
    reporters: ["default"],
    coverage: {
      provider: "v8",
      reporter: ["text", "text-summary", "html", "json"],
      reportsDirectory: "dist/coverage", // dist/** is in the project's eslint ignore list
      include: ["src/lib/**/*.ts"],
      exclude: [
        "src/lib/**/*.d.ts",
        "src/lib/**/index.ts",
        "src/lib/effects-batch-*.ts", // data files; covered transitively by roycss-effects.ts
        "src/lib/db.ts",              // Prisma client — out of QE scope
        "src/lib/utils.ts",           // 2-line `cn` helper — exercised by every UI component
        "src/lib/effect-taxonomy.ts", // owned by the effect-curation agent (separate ADR)
        "src/lib/docs-data.ts",       // auto-generated docs catalog (12k+ lines)
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },
  },
});
