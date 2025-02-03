import { test, expect } from '@playwright/test';

test('drag and drop', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  const columnOne = page.locator('.column').nth(0);
  const columnTwo = page.locator('.column').nth(1);
  await expect(columnOne).toHaveText('A');
  await expect(columnTwo).toHaveText('B');
  await page.locator('#column-a').hover();
  await page.mouse.down();
  await page.locator('#column-b').hover();
  await page.mouse.up();
  await expect(columnOne).toHaveText('B');
  await expect(columnTwo).toHaveText('A');
});
