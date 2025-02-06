import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('Delete button appears', async ({ page }) => {
  await page.goto(`${BASE_URL}/add_remove_elements/`);
  await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
});

test('Delete button disappears', async ({ page }) => {
  await page.goto(`${BASE_URL}/add_remove_elements/`);
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible();
});

test('Multiple delete button appear', async ({ page }) => {
  await page.goto(`${BASE_URL}/add_remove_elements/`);
  await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(2);
});

test('Multiple delete button can be removed', async ({ page }) => {
  await page.goto(`${BASE_URL}/add_remove_elements/`);
  await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(2);
  await page.getByRole('button', { name: 'Delete' }).nth(1).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1);
  await page.getByRole('button', { name: 'Delete' }).nth(0).click();
  await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible();
});
