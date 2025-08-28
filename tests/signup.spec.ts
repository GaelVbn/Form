import { test, expect } from "@playwright/test";

test("S’inscrire avec données valides", async ({ page }) => {
  await page.goto("http://localhost:3000"); // page locale Next.js
  await page.fill("#email", "alice@example.com");
  await page.fill("#password", "Password123");
  await page.fill("#confirmPassword", "Password123"); // <-- ajouté
  await page.click("#signup-button");

  const confirmation = await page.textContent("#confirmation-message");
  expect(confirmation).toContain("Inscription réussie");
});
