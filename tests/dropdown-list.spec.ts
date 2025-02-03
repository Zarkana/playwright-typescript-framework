import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
  await page.locator('#dropdown').selectOption('2');
  await expect(page.locator('#dropdown')).toHaveValue('2');
});