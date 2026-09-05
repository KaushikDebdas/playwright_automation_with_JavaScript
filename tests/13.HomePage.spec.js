/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
const {test, expect} = require('@playwright/test')

test('Home Page' , async ({page})=> {
    // Open the url on the browser
    await page.goto('https://www.demoblaze.com/index.html');

    // Fist Test
    const pageURL = await page.url() // Store the page url in pageURL
    console.log('Page URL is:', pageURL); // print the URL in console
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); // Verify the URL


    const pageTitle = await page.title(); // Store the page title in pageTitle
    console.log('Page title is:', pageTitle); // print the title in console
    await expect(page).toHaveTitle('STORE'); // Verify the Title
    

    // Close the page
    await page.close();
})
