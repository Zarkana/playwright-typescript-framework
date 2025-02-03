import { test, expect } from '@playwright/test';

test('dynamic content', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_content?with_content=static');
  await twoStaticBoxesSame(page);
  const dynamicBox = page.locator('#content > div:nth-child(7)');
  const dynamicText = await dynamicBox.textContent() ?? "";
  await page.reload();
  await expect(dynamicBox).not.toContainText(dynamicText);
  await twoStaticBoxesSame(page);
});

async function twoStaticBoxesSame(page) {
  await expect(page.locator('body')).toContainText('Accusantium eius ut architecto neque vel voluptatem vel nam eos minus ullam dolores voluptates enim sed voluptatem rerum qui sapiente nesciunt aspernatur et accusamus laboriosam culpa tenetur hic aut placeat error autem qui sunt.');
  await expect(page.locator('body')).toContainText('Omnis fugiat porro vero quas tempora quis eveniet ab officia cupiditate culpa repellat debitis itaque possimus odit dolorum et iste quibusdam quis dicta autem sint vel quo vel consequuntur dolorem nihil neque sunt aperiam blanditiis.');
}
