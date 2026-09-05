import {test, expect} from '@playwright/test';

test('Handle RadioButton', async ({page}) =>{

    await page.goto('https://automation-testing-website.netlify.app/');

    // Clicking on the Menu for Radio Buttons
    await page.locator('a:has-text("Radio Buttons")').click();

    // Method 1: Using data-testid (BEST - recommended)
    await expect(page.getByTestId('radio-pro')).toBeChecked();
  
    // Method 2: Using specific CSS selector with type
    await expect(page.locator('input[type="radio"][value="pro"]')).toBeChecked();
    
    // Method 3: Using getByRole (most semantic)
    await expect(page.getByRole('radio', { name: 'Pro' })).toBeChecked();
    
    // Method 4: Using filter to avoid checkbox
    const alreadyChecked = page.locator('input[type="radio"][value="pro"]');
    await expect(alreadyChecked).toBeChecked();


    // New Radio Button Check
    // Free
    const freeRadio = page.getByTestId('radio-free');
    await freeRadio.check();
    await expect(freeRadio).toBeChecked();

    // Truthy or Falsy
    await expect(await page.getByTestId('radio-enterprise').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

    //await page.close();

})