import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('dissapearing elements', async ({ page }) => {
  await page.goto(`${BASE_URL}/disappearing_elements`);
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();

  const buttons = page.getByRole('link')
    .filter({ hasNotText: 'Elemental Selenium' })
    .filter({ hasNot: page.locator('img') });
  const total = await buttons.count();

  expect(total).toBeGreaterThan(3);
  expect(total).toBeLessThan(6);
});
