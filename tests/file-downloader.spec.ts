import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { BASE_URL } from './helpers';

// Currently having difficulty with the promise
test.skip('can download png', async ({ page }) => {
  await page.goto(`${BASE_URL}/download`);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'agile-model.png' }).click();
  const download = await downloadPromise;
  // page.on('download', download => download.path().then(console.log));
  // Wait for the download process to complete and save the downloaded file somewhere.
  await download.saveAs('./tmp/' + download.suggestedFilename());
  const filePath = './tmp/agile-model.png'; // Replace with your actual file
  const stats = fs.statSync(filePath);
  expect(path.basename(filePath)).toEqual("agile-model.png");
  expect(stats.size).toEqual(44420);
});
