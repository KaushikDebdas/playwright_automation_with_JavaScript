import {test , except} from '@playwright/test';

test('Handle Hidden Dropdown Lists', async ({page}) =>{
 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'PIM' }).click();

    // Click on the dropdown icon to reveal the hidden dropdown list
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
    // Wait for the dropdown options to be visible
    await page.waitForTimeout(2000);

    // Get all the options from the dropdown list
    const getAllOptions = await page.$$("//div[@role='listbox']//span");

    // Iterate through the options and print their text content
    for(let option of getAllOptions)
    {
        const jobTitle = await option.textContent();
        console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            console.log('Found the desired option!');
            await option.click();
            break; // Exit the loop after clicking the desired option

        }
    }
    await page.waitForTimeout(5000);
    
})