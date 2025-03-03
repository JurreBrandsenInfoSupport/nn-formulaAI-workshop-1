import { test, expect } from "@playwright/test";

test("homepage has title and links", async ({ page }) => {
  await page.goto("/");

  // Check the title
  await expect(page).toHaveTitle(/My Personal Blog/);

  // Check specific link texts
  await expect(page.locator('a[href="/posts"] >> text=Posts →')).toHaveText(
    "Posts →",
  );
});

test("homepage has a visible header", async ({ page }) => {
  await page.goto("/");

  // Check the header is visible
  const header = page.locator("header");
  await expect(header).toBeVisible();
});

test("homepage has a navigation bar with links", async ({ page }) => {
  await page.goto("/");

  // Check the navigation bar contains specific links
  const nav = page.locator("nav");
  await expect(nav.locator('a[href="/about"]')).toHaveText("About");
  await expect(nav.locator('a[href="/contact"]')).toHaveText("Contact");
});

test("homepage has a footer with copyright text", async ({ page }) => {
  await page.goto("/");

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Check the footer contains copyright text with the current year
  const footer = page.locator("footer");
  await expect(footer).toHaveText(
    new RegExp(`© ${currentYear} My Personal Blog`),
  );
});

test("homepage has a main section with recent posts", async ({ page }) => {
  await page.goto("/");

  // Check the main section contains recent posts
  const main = page.locator("main");
  await expect(main.locator("h2")).toHaveText("Recent Posts");
  await expect(main.locator(".post")).toHaveCountGreaterThan(0);
});
