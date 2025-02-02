import { test, expect } from '@playwright/test';

test('can add element', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/');

//   await page.getByRole('link', { name: 'Get started' })
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });