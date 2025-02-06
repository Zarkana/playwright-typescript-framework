import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers';

test('challenging dom produces three buttons of type foo, bar, baz, or qux', async ({ page }) => {
  await page.goto(`${BASE_URL}/challenging_dom`);
  const fooCount = await page.getByRole('link', { name: 'foo', exact: false }).count();
  const barCount = await page.getByRole('link', { name: 'bar', exact: false }).count();
  const bazCount = await page.getByRole('link', { name: 'baz', exact: false }).count();
  const quxCount = await page.getByRole('link', { name: 'qux', exact: false }).count();
  const total = fooCount + barCount + bazCount + quxCount;
  expect(fooCount).toBeLessThan(4);
  expect(barCount).toBeLessThan(4);
  expect(bazCount).toBeLessThan(4);
  expect(quxCount).toBeLessThan(4);
  expect(total).toEqual(3);
});
