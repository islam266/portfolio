import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.QA_PORT ?? 3100);
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    permissions: ["clipboard-read", "clipboard-write"],
  },
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: `${baseURL}/en`,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
