import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
});

test('can check dynamic checkbox', async ({ page }) => {
  await expect(page.getByRole('checkbox')).not.toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
});

test('can remove and add dynamic check box', async ({ page }) => {
  await expect(page.getByRole('checkbox')).not.toBeChecked();
  await page.getByRole('button', { name: 'Remove' }).click();
  await waitForRequest(page);
  await expect(page.getByRole('checkbox')).toHaveCount(0);
  await page.getByRole('button', { name: 'Add' }).click();
  await waitForRequest(page);
  await expect(page.getByRole('checkbox')).not.toBeChecked();
});

test('checked check box is not checked after replacing', async ({ page }) => {
  await expect(page.getByRole('checkbox')).not.toBeChecked();
  await page.getByRole('checkbox').click();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Remove' }).click();
  await waitForRequest(page);
  await page.getByRole('button', { name: 'Add' }).click();
  await waitForRequest(page);
  await expect(page.getByRole('checkbox')).not.toBeChecked();
});

test('input is disabled', async ({ page }) => {
  await expect(page.getByRole('textbox')).toBeDisabled();
  await expect(page.getByRole('textbox')).toHaveValue("");
});

test('can enable input', async ({ page }) => {
  await expect(page.getByRole('textbox')).toBeDisabled();
  await page.getByRole('button', { name: 'Enable' }).click();
  await waitForRequest(page);
  await expect(page.getByRole('textbox')).toBeEnabled();
  await page.getByRole('textbox').fill("Text");
  await expect(page.getByRole('textbox')).toHaveValue("Text");
});

async function waitForRequest(page) {
  await expect(page.locator('#loading').getByRole('img')).toBeVisible({timeout: 7_000});
  await expect(page.locator('#loading').getByRole('img')).not.toBeVisible({timeout: 7_000});
}