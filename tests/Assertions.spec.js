import {test, expect} from '@playwright/test';


test('Assertions', async ({page})=>{
    //await page.waitForLoadState('load');
    // Open the url on the browser
    await page.goto('https://demo.nopcommerce.com/register', {waitUntil: 'load'});

    // Assertions
    // Page has url
    // 1. expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // Page has title
    // 2. expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // Element is visible
    // 3. expect(locator).toBeVisible()
    const registerButton = await page.locator('button#register-button');
    await expect(registerButton).toBeVisible();

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    // Element is enabled
    // 4. expect(locator).toBeEnabled()
    const searchStoreBox = await page.locator("#small-searchterms");
    await expect(searchStoreBox).toBeEnabled();

    // Radio/Checkbox is checked
    // 5. expect(locator).toBeChecked()
    const maleGenderRadioButton = await page.locator('#gender-male');
    await maleGenderRadioButton.check();
    await expect(maleGenderRadioButton).toBeChecked();
    const femaleGenderRadioButton = await page.locator('#gender-female');
    await expect(femaleGenderRadioButton).not.toBeChecked();
    
    // Checkbox already checked
    const newsletterCheckbox = await page.locator('#Newsletter');
    await expect(newsletterCheckbox).toBeChecked();

    // Text box is empty or has some value
    // 6. expect(locator).toBeEmpty()
    const firstNameTextBox = await page.locator('#FirstName');
    await expect(firstNameTextBox).toBeEmpty();
    await firstNameTextBox.fill('Pavan');
    await expect(firstNameTextBox).not.toBeEmpty();

    // Element has attribute
    // 7. expect(locator).toHaveAttribute()
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit');    // default value of type attribute is 'submit'

    // Element has class
    // 8. expect(locator).toHaveClass()
    await expect(regButton).toHaveClass('button-1 register-next-step-button');

    // Element matches text (EXACT MATCH)
    // 9. expect(locator).toHaveText()
    const registerHeader = await page.locator('.page-title h1');
    await expect(registerHeader).toHaveText('Register');
    await expect(await page.locator('.page-title h1')).toHaveText('Register'); // Another way

    // Element contains text (PARTIAL MATCH)
    // 10. expect(locator).toContainText()
    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    // Input has a value
    // 11. expect(locator).toHaveValue()
    await page.locator('#Email').fill('test@example.com');
    await expect(page.locator('#Email')).toHaveValue('test@example.com'); // exact match
    await expect(page.locator('#Email')).toHaveValue(/test/); // partial match using regex


    // List of elements has count
    // 12. expect(locator).toHaveCount()
    // Useful for dropdown, table, list of items
    const daydropdown = await page.locator('select[name="DateOfBirthDay"] option');
    await expect(daydropdown).toHaveCount(32); // 31 days + 1 default 'Day' option

})