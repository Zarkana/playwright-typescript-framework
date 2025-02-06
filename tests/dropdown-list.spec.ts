import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('dropdown can be set', async ({ page }) => {
  await page.goto(`${BASE_URL}/dropdown`);
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
  await page.locator('#dropdown').selectOption('2');
  await expect(page.locator('#dropdown')).toHaveValue('2');
});