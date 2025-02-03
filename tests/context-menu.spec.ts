import { test, expect } from '@playwright/test';

// skipping this test because it doesn't seem playwright can initiate the prompt that 
// appears when right clicking the box even though this code will right click inside the box
test.skip('dismiss context menu test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/context_menu');
  var box = (await page.locator('#hot-spot').boundingBox())!;
  // await page.mouse.move(box.x + box.width / 2, box.y + box.height - 5);
  const hotSpot = await page.locator('#hot-spot');
  await hotSpot.click({
    button: 'right',
    position: {x:50, y:50}
  });

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
});
