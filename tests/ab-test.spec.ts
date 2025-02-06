import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('ab test receives one of several possible header', async ({ page }) => {
    await page.goto(`${BASE_URL}/abtest`);
    const headerOne = page.getByRole('heading', { name: 'A/B Test Variation 1' });
    const headerTwo = page.getByRole('heading', { name: 'A/B Test Control' });
    await expect(headerOne.or(headerTwo)).toBeVisible();
});
