import { test, expect } from '@playwright/test';

test('ab test receives one of several possible header', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/abtest');
    const headerOne = page.getByRole('heading', { name: 'A/B Test Variation 1' });
    const headerTwo = page.getByRole('heading', { name: 'A/B Test Control' });
    await expect(headerOne.or(headerTwo)).toBeVisible();
});