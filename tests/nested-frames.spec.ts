import { test, expect } from '@playwright/test';

test('can view all four nested frames', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
  const frameTop = page.locator('frame[name="frame-top"]').contentFrame()
  await expect(frameTop.locator('frame[name="frame-left"]').contentFrame().getByText('LEFT')).toBeVisible();
  await expect(frameTop.locator('frame[name="frame-middle"]').contentFrame().getByText('MIDDLE')).toBeVisible();
  await expect(frameTop.locator('frame[name="frame-right"]').contentFrame().getByText('RIGHT')).toBeVisible();
  await expect(page.locator('frame[name="frame-bottom"]').contentFrame().getByText('BOTTOM')).toBeVisible();
});
