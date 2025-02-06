import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('can view wysiwyg iframe content', async ({ page }) => {
  await page.goto(`${BASE_URL}/iframe`);
  await expect(page.locator('iframe[title="Rich Text Area"]').contentFrame().getByText('Your content goes here.')).toBeVisible();
});
