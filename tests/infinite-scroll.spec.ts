import { test, expect } from '@playwright/test';
import { scrollToFooter, BASE_URL } from './helpers';

// This does not fail locally, but it does fail in CI so the method of testing this should likely change
test.skip('page loads more text when it scrolls', async ({ page }) => {
  await page.goto(`${BASE_URL}/infinite_scroll`);
  const infiniteScroller = await page.locator('.jscroll-inner');
  const box = await infiniteScroller.boundingBox();
  const originalHeight = box?.height;
  await expect(page.locator('.jscroll-added')).toHaveCount(2);
  await page.waitForTimeout(1000); // waits for the text to fill the elements
  await scrollToFooter(page);
  expect((await infiniteScroller.boundingBox())?.height).not.toEqual(originalHeight);
});
