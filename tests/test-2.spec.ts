import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.locator('.tabs > li:nth-child(2)').first().click();
  await page.getByText('Playwright will download the').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GitHub repository' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'About' }).click();
  await expect(page1.locator('#repository-container-header').getByRole('link', { name: 'playwright' })).toBeVisible();
});