/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
import {test, expect} from '@playwright/test';

/*
Syntax:
    await page.locator('locator')  --> Locator
    await page.click('locator')   --> Click action using locator

    await page.getByRole('role', {name: 'name'})  --> Role Locator
    await page.getByLabel('label')                 --> Label Locator
    await page.getByPlaceholder('placeholder')     --> Placeholder Locator  
*/


test('Locators', async ({page})=>{
    // Open the url on the browser
    await page.goto('https://www.demoblaze.com/index.html');

    // Click on login button using Locator
    //await page.locator('id=login2').click();
    // Click action using locator
    await page.click('id=login2'); 

    // Click on username text box using Locator and fill the value
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('pavanol');
    //
    await page.fill('#loginpassword', 'test@123');
    // Click on login button using Role Locator
    await page.getByRole('button', { name: 'Log in' }).click();
    
    // Assertion
    const logoutlink = await page.locator("//a[normalize-space()='Log out' ]");
    await expect(logoutlink).toBeVisible();
    // Assertion using locator
    await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
})