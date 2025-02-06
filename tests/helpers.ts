import { expect } from '@playwright/test';

export const BASE_URL = "https://the-internet.herokuapp.com";

export async function waitForRequest(page) {
    await expect(page.locator('#loading').getByRole('img')).toBeVisible({timeout: 7_000});
    await expect(page.locator('#loading').getByRole('img')).not.toBeVisible({timeout: 7_000});
}
export async function isInViewport(page, element) {
    const box = await element.boundingBox();

    const viewportHeight = await page.evaluate(() => window.innerHeight);
    
    if (box && (box.y + box.height < 0 || box.y > viewportHeight)) {
        return false;
    } else {
        return true;
    }
}

export async function scrollToFooter(page) {
    await page.getByText('Powered by Elemental Selenium').scrollIntoViewIfNeeded();
}