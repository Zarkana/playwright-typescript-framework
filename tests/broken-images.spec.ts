import { test, expect, Locator } from '@playwright/test';
import { BASE_URL } from './helpers';

test('validate some images are broken', async ({ page }) => {
  await page.goto(`${BASE_URL}/broken_images`);
  const image1 = page.getByRole('img').nth(1);
  const image2 = page.getByRole('img').nth(2);
  const image3 = page.getByRole('img').nth(3);
  expect(await isBrokenImage(image1)).toBeTruthy();
  expect(await isBrokenImage(image2)).toBeTruthy();
  expect(await isBrokenImage(image3)).toBeFalsy();
});

async function isBrokenImage(image: Locator): Promise<boolean> {
  // Check the image's natural width and height to see if it's broken
  const width: Number =  await image.evaluate(img => (img as HTMLImageElement).naturalWidth);
  const height: Number =  await image.evaluate(img => (img as HTMLImageElement).naturalHeight);
  if (width == 0 || height == 0) {
      return true;
  } else {
      return false;
  }
};
