/*
    const {test, expect} = require('@playwright/test')
    means we are importing the test and expect functions from the Playwright testing library.
    test is used to define a test case, and expect is used for making assertions in the test.
*/
const {test, expect} = require('@playwright/test')

test("Handle Single Checknbox", async ({page})=>{
    await page.goto("https://trytestingthis.netlify.app/", {timeout: 6000});

    // Single Checkbox
    // Method 1
    await page.locator("//input[@value='Option 1' and @type='checkbox']").check();
    // Mehtod 2
    await page.check("//input[@value='Option 1' and @type='checkbox']");
    // Assertion 1
    expect(await page.locator("//input[@value='Option 1' and @type='checkbox']")).toBeChecked();
    // Assertion 2 True
    expect(await page.locator("//input[@value='Option 1' and @type='checkbox']").isChecked()).toBeTruthy();
    // Assertion 2 False
    expect(await page.locator("//input[@value='Option 3' and @type='checkbox']").isChecked()).toBeFalsy();

    // Slow
    await page.waitForTimeout(5000);
})

test("Handle Multiple Checknbox", async ({page})=>{
    await page.goto("https://trytestingthis.netlify.app/", {timeout: 6000});

    const checkboxLocators=[
        "//input[@value='Option 1' and @type='checkbox']",
        "//input[@value='Option 2' and @type='checkbox']"
    ];
    // Check all the locators using for loop
    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000);

    // Unselect checkboxes which are already selected
    for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
        
    }

/**
    // Single Checkbox
    // Method 1
    await page.locator("//input[@value='Option 1' and @type='checkbox']").check();
    // Mehtod 2
    await page.check("//input[@value='Option 1' and @type='checkbox']");
    await page.check("//input[@value='Option 2' and @type='checkbox']");
    // Assertion 1
    await expect(await page.locator("//input[@value='Option 1' and @type='checkbox']")).toBeChecked();
    // Assertion 2 True
    await expect(await page.locator("//input[@value='Option 1' and @type='checkbox']").isChecked()).toBeTruthy();
    // Assertion 2 False
    await expect(await page.locator("//input[@value='Option 2' and @type='checkbox']").isChecked()).toBeTruthy();
*/
    // Slow
    await page.waitForTimeout(5000);
})