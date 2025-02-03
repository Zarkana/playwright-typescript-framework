import { test, expect } from '@playwright/test';

test('can submit forgot password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/forgot_password');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('jsc@gmail.com');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  // This page actually returns this all the time
  await expect(page.getByRole('heading', { name: 'Internal Server Error' })).toBeVisible();
});