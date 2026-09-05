import { test, expect } from '@playwright/test';

test('Mouse Right Click Action', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

  const rightClickButton = await page.getByText('right click me', { exact: true });

  // Perform right-click on the button
  await rightClickButton.click({ button: 'right' });

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

});

test('Mouse Left Click Action', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

  const leftClickButton = await page.getByText('right click me', { exact: true });

  // Perform left-click on the button
  await leftClickButton.click({ button: 'left' });

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

});