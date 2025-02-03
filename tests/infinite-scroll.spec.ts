import { test, expect } from '@playwright/test';
import { scrollToFooter } from './helpers';

test('page loads more text when it scrolls', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
  const infiniteScroller = await page.locator('.jscroll-inner');
  const box = await infiniteScroller.boundingBox();
  const originalHeight = box?.height;
  await expect(page.locator('.jscroll-added')).toHaveCount(2);
  await page.waitForTimeout(1000); // waits for the text to fill the elements
  await scrollToFooter(page);
  expect((await infiniteScroller.boundingBox())?.height).not.toEqual(originalHeight);
});
