/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
const {test, expect} = require('@playwright/test')

test("Handle Dropdown", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Multiple ways to select option from dorpdown
    // Option 1: using label
    await page.locator("#country").selectOption({label:'India'});
    // Option 2: using Visible text
    await page.locator("#country").selectOption('India');
    // Option 3: using value
    await page.locator("#country").selectOption({value:'uk'});
    // Option 4: using index
    await page.locator("#country").selectOption({index: 1});
    // Option 5: using visible text but another way
    await page.selectOption("#country", 'India');

    // Assertions
    // check number of option in dropdown
    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);

    // check number of options in dropdown using array $$
    const arrayOptions = await page.$$('#country option');
    console.log("Number of options: ", arrayOptions.length);
    await expect(arrayOptions.length).toBe(10);

    // Approach 1: check presence of value in the dropdown
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy(); // Dropdown value te India thakle true return korbe

    // Slow
    await page.waitForTimeout(10000);
})

test("Check Number of option in dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // check number of option in dropdown
    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);

    // Slow
    await page.waitForTimeout(10000);
})

test("Check Number of option in dropdown using array $$", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // check number of options in dropdown using array $$
    const arrayOptions = await page.$$('#country option');
    console.log("Number of options: ", arrayOptions.length);
    await expect(arrayOptions.length).toBe(10);

    // Slow
    await page.waitForTimeout(10000);
})

test("Check Presence of value in the dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Approach 1: check presence of value in the dropdown
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy(); // Dropdown value te India thakle true return korbe
    
    // Approach 2: check presence of value in the dropdown using looping statement
    const arrayOptions = await page.$$('#country option');
    let status = false;

    for(const option of arrayOptions)
    {
        let value = await option.textContent();
        console.log(await option.textContent());
        //console.log(value);
        if(value.includes('France'))
        {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();


    // Slow
    await page.waitForTimeout(10000);
})