import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('checkboxes can be unchecked', async ({ page }) => {
  await page.goto(`${BASE_URL}/checkboxes`);
  const firstCheckBox = page.getByRole('checkbox').nth(0);
  const secondCheckBox = page.getByRole('checkbox').nth(1);
  await expect(firstCheckBox).not.toBeChecked();
  await expect(secondCheckBox).toBeChecked();
  await firstCheckBox.click();
  await secondCheckBox.click();
  await expect(firstCheckBox).toBeChecked();
  await expect(secondCheckBox).not.toBeChecked();
});
