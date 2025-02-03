import { test, expect } from '@playwright/test';

test('checkboxes can be unchecked', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const firstCheckBox = page.getByRole('checkbox').nth(0);
  const secondCheckBox = page.getByRole('checkbox').nth(1);
  await expect(firstCheckBox).not.toBeChecked();
  await expect(secondCheckBox).toBeChecked();
  await firstCheckBox.click();
  await secondCheckBox.click();
  await expect(firstCheckBox).toBeChecked();
  await expect(secondCheckBox).not.toBeChecked();
});
