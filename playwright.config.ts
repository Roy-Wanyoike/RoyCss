import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for RoyCSS E2E tests.
 *
 * - Specs live in tests/e2e (one .spec.ts file per page section).
 * - Only chromium is enabled for the first pass (see ADR-005).
 * - The dev server is auto-started on port 3000 unless `PLAYWRIGHT_NO_SERVER`
 *   is set (used in CI when a server is already running).
 *
 * Run:    bunx playwright test
 * UI:     bunx playwright test --ui
 * Debug:  bunx playwright test --debug
 */
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";
const shouldStartServer = !process.env.PLAYWRIGHT_NO_SERVER;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1, // dev server is single-instance; parallel browser contexts race for the same DB
  reporter: process.env.CI
    ? [["github"], ["list"], ["html", { open: "never" }]]
    : [["list"], ["html", { open: "never" }]],
  timeout: 60_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  ...(shouldStartServer
    ? {
        webServer: {
          command: "bun run dev",
          url: BASE_URL,
          timeout: 120_000,
          reuseExistingServer: !process.env.CI,
          stdout: "pipe",
          stderr: "pipe",
        },
      }
    : {}),
});
