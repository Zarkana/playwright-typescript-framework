import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/entry_ad');
});

test.describe('Entry Ad tests', () => {
  test('Entry ad appears on initial page load', async ({ page }) => {
    const modalWindows = getModal(page);
    await expect(modalWindows).toBeVisible();
  });

  test('Entry ad can be closed', async ({ page }) => {
    const modalWindows = getModal(page);
    await expect(modalWindows).toBeVisible();
    await closeModal(page);
    await expect(modalWindows).not.toBeVisible();
  });

  test('Entry ad does not appear on page reload', async ({ page }) => {
    const modalWindows = getModal(page);
    await closeModal(page);
    await page.reload();
    await expect(modalWindows).not.toBeVisible();
  });

  test('Entry ad reappears on page reload after clicking here', async ({ page }) => {
    const modalWindows = getModal(page);
    await closeModal(page);
    await page.reload();
    await expect(modalWindows).not.toBeVisible();
    await page.getByRole('link', { name: 'click here' }).click();
    await page.reload();
    await expect(modalWindows).toBeVisible();
  });

  function getModal(page) {
    return page.getByRole('heading', { name: 'This is a modal window' });
  }

  async function closeModal(page) {
    await page.getByText('Close', { exact: true }).click();
  }
});
