const { test, expect, chromium } = require('@playwright/test');

// ✅ No {page} here — empty async () because we create page manually
test('HomePage', async () => {

  // Step 1: Launch browser manually
  const browser = await chromium.launch({
    headless: false,
    slowMo: 800
  });

  // Step 2: Create context
  const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
});

  // Step 3: Open new page/tab
  const page = await context.newPage();

  // Step 4: Navigate
  await page.goto('https://automation-testing-website.netlify.app/');

  // Step 5: URL check
  const pageURL = page.url();
  console.log('My Page URL is:', pageURL);
  await expect(page).toHaveURL('https://automation-testing-website.netlify.app/');

  // Step 6: Title check
  const pageTitle = await page.title();
  console.log('My Page Title is:', pageTitle);
  await expect(page).toHaveTitle('PlaywrightLab — Practice Site for Test Automation');

  // Step 7: Close everything
  await page.close();
  await context.close();
  await browser.close();

});