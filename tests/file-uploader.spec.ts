import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('can upload file', async ({ page }) => {
  await page.goto(`${BASE_URL}/upload`);
  await page.locator('#file-upload').setInputFiles('./tests/data/playwright-logo.svg');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByText('playwright-logo.svg')).toBeVisible();
});