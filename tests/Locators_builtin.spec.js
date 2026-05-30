import {test, expect} from '@playwright/test';


test('Test getByAltText', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // page.getByAltText('alt text') -- to locate the element using alt text of the image
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

})

test('Test getByPlaceholder and getByRole', async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // page.getByPlaceholder('placeholder text') -- to locate the element using placeholder text of the input field
    const userName = await page.getByPlaceholder('Username').fill("Admin");
    const password = await page.getByPlaceholder('Password').fill("admin123");
    
    // page.getByRole('role', {name: 'name'}) -- to locate the element using its role and name
    const loginButton = await page.getByRole('button', { type: 'submit' }).click();

    //await expect(await page.getByText('Dashboard')).toBeVisible();

    // store dynamic name
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();

    await expect(await page.getByText(name)).toBeVisible();


})