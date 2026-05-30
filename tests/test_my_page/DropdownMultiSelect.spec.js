import {test, expect} from '@playwright/test';


test('Handle Dropdown with Multiple Select', async ({page}) =>{

    await page.goto("https://automation-testing-website.netlify.app/", {waitUntil: 'load'});

    // Click on the Light Button
    await page.locator('#themeBtn').click();

    // Click on the Menu for Dropdowns
    await page.locator(':text-is("Dropdowns")').click();

    // Select Multiple options from multi select dropdown
    // Option 1: using value
    await page.getByTestId('dropdown-languages').selectOption([{value: 'en'}, {value: 'bn'}, {value: 'es'}, {value: 'fr'}, {value: 'zh'}]);
    await page.waitForTimeout(5000);

    // Option 2: using label
    await page.selectOption('//select[@data-testid="dropdown-languages"]', ['English', 'Bengali', 'Spanish']);
    await page.waitForTimeout(5000);

    // Options 3: using index
    await page.selectOption('//select[@data-testid="dropdown-languages"]', [{index: 1}, {index: 2}]);
    await page.waitForTimeout(5000);

    
    // Assertions
    // 1. Check number of options in dropdown using Playwright locator
    const options = page.locator('//select[@data-testid="dropdown-languages"]//option');
    console.log("Number of options: ", options.length);
    await expect.soft(options).toHaveCount(5);



    // 2. Check number of options in dropdown using locator().all()
    const arrayOptions = await page.locator('//select[@data-testid="dropdown-languages"]//option').all();
    console.log("Number of options: ", arrayOptions.length);
    await expect.soft(arrayOptions.length).toBe(5);

    // 3. Check number of options in dropdown using page.$$()
    const arrayOptions2 = await page.$$('//select[@data-testid="dropdown-languages"]//option');
    console.log("Number of options using page.$$(): ", arrayOptions2.length);
    await expect.soft(arrayOptions2.length).toBe(5);

    // 4. Check presense of value in dropdown options
    const content = await page.locator('//select[@data-testid="dropdown-languages"]').textContent();
    console.log("Dropdown content: ", content);
    await expect.soft(content).toContain('English');
    await expect.soft(content).toContain('Bengali');
    await expect.soft(content).toContain('Spanish');
    

});