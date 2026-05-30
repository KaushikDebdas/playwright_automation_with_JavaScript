/*
    Run Single Test Case in a Specific Folder in Headed/UI Mode
    npx playwright test tests/test_my_page/Dropdown.spec.js --project=chromium --headed
*/
import {test, expect} from '@playwright/test';

test('Handle Dropdown', async ({page}) =>{

    await page.goto('https://automation-testing-website.netlify.app/');

    // Click on the Light Button
    await page.locator('#themeBtn').click();

    // Click on the Menu for Dropdowns
    await page.locator(':text-is("Dropdowns")').click();

    // Multiple ways to select option from dorpdown
    // Option 1: using value
    await page.getByTestId('dropdown-country').selectOption({value: 'bd'});
    
    // Option 2: using Visible text
    await page.getByTestId('dropdown-country').selectOption('India');
    
    // Option 3: using visible text but another way
    await page.locator("//select[@data-testid='dropdown-country']").selectOption('Japan');
    
    // Option 4: using index
    await page.getByTestId('dropdown-country').selectOption({index: 3});
    
    // Assertions
    // 1. Check number of options in dropdown using Playwright locator
    const options = page.getByTestId('dropdown-country').locator('option');
    await expect(options).toHaveCount(7);

    // 2. Check number of options in dropdown using locator().all()
    // FIX: page.$$() does not support XPath — use page.locator().all() instead
    const arrayOptions = await page.locator("//select[@data-testid='dropdown-country']/option").all();
    console.log("Number of options: ", arrayOptions.length);
    // FIX: arrayOptions.length is a plain number, use Node's assert or a simple throw,
    // not Playwright's expect() which expects a Locator/Promise
    if (arrayOptions.length !== 7) {
        throw new Error(`Expected 7 options but found ${arrayOptions.length}`);
    }



    await page.waitForTimeout(5000);

})