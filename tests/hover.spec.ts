import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('hovering over picture displays name', async ({ page }) => {
  await page.goto(`${BASE_URL}/hovers`);
  const user1 = page.getByRole('heading', { name: 'name: user1' }); 
  await expect(user1).not.toBeVisible();
  await page.getByRole('img', { name: 'User Avatar' }).first().hover();
  await expect(user1).toBeVisible();
});