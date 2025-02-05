import { test, expect } from '@playwright/test';
import { waitForRequest } from './helpers';
import { BASE_URL } from './helpers';

test.beforeEach(async ({ page }) => {
  await page.goto(`${BASE_URL}/dynamic_loading`);
});

test('dynamically loaded invisible page element becomes visible', async ({ page }) => {
  await page.getByRole('link', { name: 'Example 1: Element on page' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByRole('heading', { name: 'Hello World!' })).not.toBeVisible();
  await waitForRequest(page);
  await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
});

test('dynamically loaded nonexistent page element becomes visible', async ({ page }) => {
  await page.getByRole('link', { name: 'Example 2: Element rendered' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByRole('heading', { name: 'Hello World!' })).not.toBeVisible();
  await waitForRequest(page);
  await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
});
