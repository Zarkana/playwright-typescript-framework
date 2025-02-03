import { expect } from '@playwright/test';

export async function waitForRequest(page) {
    await expect(page.locator('#loading').getByRole('img')).toBeVisible({timeout: 7_000});
    await expect(page.locator('#loading').getByRole('img')).not.toBeVisible({timeout: 7_000});
}
export async function isInViewport(page, element) {
    const box = await element.boundingBox();

    const viewportHeight = await page.evaluate(() => window.innerHeight);
    
    if (box && (box.y + box.height < 0 || box.y > viewportHeight)) {
        console.log(box);
        return false;
    } else {
        return true;
    }
}
