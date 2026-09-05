/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
import { test, expect } from '@playwright/test';

test('Test with CodeGen Command and Save this file', async ({ page }) => {
  /*
      1. Open the terminal and write
      2. npx playwright codegen --output tests/RecordAndPlay.spec.js
      3. This will open codegen
      4. Record the test
      5. Stop the record and close the browser
  */
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
});