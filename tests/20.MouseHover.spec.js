import { test, expect } from '@playwright/test';

test('Mouse Hover Action', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  // Hover over the first image and click on it
  const hover1 = await page.locator("//div[@class='example']//div[1]//img[1]").hover();
  await page.locator("//div[@class='example']//div[1]//img[1]").click();
  const heading1 = await page.getByRole('heading', { name: 'name: user1' });
  await expect(heading1).toBeVisible();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  // Hover over the second image and click on it
  const hover2 = await page.locator("//div[@class='row']//div[2]//img[1]").hover();
  const heading2 = await page.getByRole('heading', { name: 'name: user2' });
  await expect(heading2).toBeVisible();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  // Hover over the third image and click on it
  const hover3 = await page.locator("//div[3]//img[1]").hover();
  const heading3 = await page.getByRole('heading', { name: 'name: user3' });
  await expect(heading3).toBeVisible();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded
  await page.locator("//div[@class='row']//div[3]//div[1]//a[1]").click();
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

});