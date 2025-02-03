import { test, expect } from '@playwright/test';

test('can upload file', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator('#file-upload').setInputFiles('./tests/data/playwright-logo.svg');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByText('playwright-logo.svg')).toBeVisible();
});