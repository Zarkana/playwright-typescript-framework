import { test, expect } from '@playwright/test';
import { isInViewport } from './helpers'

// The coordinates return y: -4578.609375 for the floating menu which causes isInViewport to fail
// Would likely need some other solution for this web page
test.skip('floating menu still appears when scrolled to the bottom of the page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/floating_menu');
  const floatingMenuItem = page.getByRole('link', { name: 'Home' });
  expect (await isInViewport(page, floatingMenuItem)).toBeTruthy();
  await page.getByText('Powered by Elemental Selenium').scrollIntoViewIfNeeded();
  expect (await isInViewport(page, floatingMenuItem)).toBeTruthy();
});

test('header dissappears when scrolled to the bottom of the page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/floating_menu');
  const header = page.getByRole('heading', { name: 'Floating Menu' }); 
  expect (await isInViewport(page, header)).toBeTruthy();
  await page.getByText('Powered by Elemental Selenium').scrollIntoViewIfNeeded();
  expect (await isInViewport(page, header)).toBeFalsy();
});