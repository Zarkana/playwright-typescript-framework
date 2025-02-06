import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto(`${BASE_URL}/login`);
});

test('can login', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!');
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
});

test('cannot login with invalid credentials', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperIncorrrectPassword!');
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).not.toBeVisible();
  await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
});

test('can logout', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByText('You logged out of the secure')).toBeVisible();
});

async function login(page, username: string, password: string) {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: ' Login' }).click();
}
