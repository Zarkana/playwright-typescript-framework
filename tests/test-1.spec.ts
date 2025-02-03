import { test, expect } from '@playwright/test';

test('horizontal slider can be set to 1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
  await page.getByRole('slider').fill('1');
  await expect(page.getByRole('slider')).toHaveValue('1');
});

test('horizontal slider can be set to max', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
    await page.getByRole('slider').fill('5');
    await expect(page.getByRole('slider')).toHaveValue('5');
});
