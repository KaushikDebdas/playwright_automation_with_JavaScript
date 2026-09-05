import { test, expect } from '@playwright/test';

test('Mouse Double Click Action', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Perform double-click on the "Copy Text" button
  // dblclick() method is used to perform a double-click action on the specified element.
  await page.locator('button').filter({ hasText: 'Copy Text' }).first().dblclick();

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  const field2 = await page.locator('#field2');
  await expect(field2).toHaveValue('Hello World!'); // Assert that the value of field2 is "Hello World!"

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

});
