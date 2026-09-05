import { test, expect } from '@playwright/test';

test('Date Picker Test with Fill', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Fill the date picker input field with a specific date
  await page.fill('#datepicker', '12/12/2023');
});

test('Date Picker Test using Navigation', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Define the date to select
  const year = '2023';
  const month = 'December';
  const day = '10';

  // Click on the date picker input field to open the calendar
  await page.click('#datepicker');

  while (true) 
    {
    // Get the currently displayed month and year from the date picker
    const displayedCurrentYear = await page.locator('.ui-datepicker-year').textContent();
    const displayedCurrentMonth = await page.locator('.ui-datepicker-month').textContent();
    
    if(displayedCurrentYear === year && displayedCurrentMonth === month) 
    {
        break; // Exit the loop if the desired month and year are displayed
    }

    //await page.locator('.ui-datepicker-next').click(); // Click the next button to navigate to the next month
    await page.locator('[title="Prev"]').click(); // Click the previous button to navigate to the previous month
    }

    // Select the desired day from the calendar by using for loop
    const days = await page.$$("//a[@class='ui-state-default']"); // Get all the day elements in the calendar
    // Loop through the day elements and click on the desired day
    for (const dayElement of days) {
        const dayText = await dayElement.textContent();
        if (dayText === day) {
            await dayElement.click();
            break;
        }
    }

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

});