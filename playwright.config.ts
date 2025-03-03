import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:3000", // Adjust the base URL to match your development server
    headless: true,
  },
  webServer: {
    command: "npm run dev", // Adjust the command to start your development server
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
