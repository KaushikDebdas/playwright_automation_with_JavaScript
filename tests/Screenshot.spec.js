import { test, expect } from '@playwright/test';

// Currently Showing Page's Screenshot
test('Currently showing Pages Screenshot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  // Login Page Screenshot
  await page.screenshot({path:'tests/screenshots/'+Date.now()+'loginPage.png'});

  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

  // Page Screenshot Currently in the screen
  await page.screenshot({path:'tests/screenshots/'+Date.now()+'screenshotName.png'});
});

// Full Page's Screenshot
test('Full Page Screenshot', async ({page}) =>{
  await page.goto('https://demo.opencart.com/');

  //Full Page Screenshot
  await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullPage.png',fullPage:true});
})

// Specific Element's Screenshot
test('Specific Screenshot', async ({page}) =>{
  await page.goto('https://demo.opencart.com/');

  // Wait for the element with a timeout
  await page.locator('//*[@id="content"]/div[2]/div[1]/div').waitFor({ timeout: 10000 }); // 10 seconds

  // Screenshot of the specific element
  await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path:'tests/screenshots/'+Date.now()+'Macbook.png'});
})
 
// Helper function to generate human-readable timestamp
function fileStamp(d = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${yyyy}-${mm}-${dd}_${hh}-${mi}-${ss}`; // file-safe & readable
}
 
test('Human Readable DateTime formatted Full Page Screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
 
  // Full Page Screenshot with timestamp
  await page.screenshot({
    path: `tests/screenshots/${fileStamp()}_fullPage.png`,
    fullPage: true
  });
});
