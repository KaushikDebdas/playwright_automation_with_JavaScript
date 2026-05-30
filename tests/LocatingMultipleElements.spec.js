/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
import {test, expect} from '@playwright/test';

/*
Syntax:
      await page.$$('locator')  --> Locator for multiple elements
*/


test('Locate Multiple Elements', async ({page})=>{
    // Open the url on the browser
    await page.goto('https://www.demoblaze.com/index.html');

    // Locate multiple elements
    
    const allLinks = await page.$$('a');
    
    for(const link of allLinks)
    {
        const linkText = await link.textContent();
        console.log(linkText);
    }
    

    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a"); // Wait for the products to be visible
    // Capture all the products on the page
    const allProducts = await page.$$("//div[@id='tbodyid']//div//h4//a");

    for(const product of allProducts)
    {
        const productName = await product.textContent();
        console.log(productName);
    }

})