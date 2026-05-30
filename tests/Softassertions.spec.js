/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
const {test, expect} = require('@playwright/test')


test('Soft Assertions', async ({page})=>{
    // Open the url on the browser
    await page.goto('https://www.demoblaze.com/index.html', {waitUntil: 'load'});

    // Soft Assertions Starts
    // Page has url
    // 1. expect(page).toHaveURL()
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html', {timeout: 6000});
    // Page has title
    // 2. expect(page).toHaveTitle()
    await expect.soft(page).toHaveTitle('STORE1233232'); // Intentionally failing the test
    // Page has logo 
    // 3. expect(locator).toBeVisible()
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    // Soft Assertions Ends

    // Hard Assertions Starts
    // Page has url
    // 1. expect(page).toHaveURL()
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html', {timeout: 6000});
    // Page has title
    // 2. expect(page).toHaveTitle()
    await expect(page).toHaveTitle('STORE');
    // Page has logo 
    // 3. expect(locator).toBeVisible()
    await expect(page.locator('.navbar-brand')).toBeVisible();
    // Hard Assertions Ends

});


test('Soft and Hard Assertions with Custom Messages', async ({ page }) => {
  // Open the url on the browser
  await page.goto('https://www.demoblaze.com/index.html', { waitUntil: 'load' });

  // ---------------- Soft Assertions ----------------
  // Page has url
  await expect.soft(page, { message: 'Custom: URL should be the Demoblaze homepage' })
    .toHaveURL('https://www.demoblaze.com/index.html', { timeout: 6000 });

  // Page has title (intentional fail)
  await expect.soft(page, { message: 'Custom: Page title should be STORE (intentional fail)' })
    .toHaveTitle('STORE1233232');

  // Page has logo
  await expect.soft(page.locator('.navbar-brand'), { message: 'Custom: Navbar brand/logo should be visible' })
    .toBeVisible();

  // ---------------- Hard Assertions ----------------
  // Page has url
  await expect(page, { message: 'Custom: Hard check for correct URL' })
    .toHaveURL('https://www.demoblaze.com/index.html', { timeout: 6000 });

  // Page has title
  await expect(page, { message: 'Custom: Hard check for correct title (STORE)' })
    .toHaveTitle('STORE');

  // Page has logo
  await expect(page.locator('.navbar-brand'), { message: 'Custom: Hard check - navbar logo must be visible' })
    .toBeVisible();
});