import {test, expect} from '@playwright/test';


test('Handle Dropdown with Multiple Select', async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Select Multiple options from multi select dropdown
    // Option 1: using value
    //await page.selectOption('#colors', [{value: 'blue'}, {value: 'red'}, {value: 'yellow'}]);
    //await page.waitForTimeout(5000);

    // Option 2: using label
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);
    await page.waitForTimeout(5000);

    // Options 3: using index
    //await page.selectOption('#colors', [{index: 1}, {index: 2}, {index: 3}]);
    //await page.waitForTimeout(5000);

    // Options 4: using a mix of value, label, and index
    //await page.selectOption('#colors', [{value: 'blue'}, 'Red', {index: 3}]);
    //await page.waitForTimeout(5000);

    // Options 5: using a mix of value, label, and index with locator
    //await page.locator('#colors').selectOption([{value: 'blue'}, 'Red', {index: 3}]);
    //await page.waitForTimeout(5000);

    // Options 6: using a mix of value, label, and index with locator and all options
    //await page.locator('#colors').selectOption([{value: 'blue'}, 'Red', {index: 3}, {value: 'yellow'}]);
    //await page.waitForTimeout(5000);

    // Assertions
    // 1. Check number of options in dropdown using Playwright locator
    const options = page.locator('#colors option');
    await expect(options).toHaveCount(7);


    // 2. Check number of options in dropdown using locator().all()
    const arrayOptions = await page.locator('#colors option').all();
    console.log("Number of options: ", arrayOptions.length);
    await expect(arrayOptions.length).toBe(7);

    // 3. Check number of options in dropdown using page.$$()
    const arrayOptions2 = await page.$$('#colors option');
    console.log("Number of options using page.$$(): ", arrayOptions2.length);
    await expect(arrayOptions2.length).toBe(7);

    // 4. Check presense of value in dropdown options
    const content = await page.locator('#colors').textContent();
    console.log("Dropdown content: ", content);
    await expect(content).toContain('Blue');
    await expect(content).toContain('Red');
    await expect(content).toContain('Yellow');



});