import { test, expect } from '@playwright/test';

test('can view wysiwyg iframe content', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');
  await expect(page.locator('iframe[title="Rich Text Area"]').contentFrame().getByText('Your content goes here.')).toBeVisible();
});
