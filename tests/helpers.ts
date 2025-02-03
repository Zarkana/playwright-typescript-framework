import { expect } from '@playwright/test';

export async function waitForRequest(page) {
    await expect(page.locator('#loading').getByRole('img')).toBeVisible({timeout: 7_000});
    await expect(page.locator('#loading').getByRole('img')).not.toBeVisible({timeout: 7_000});
}
