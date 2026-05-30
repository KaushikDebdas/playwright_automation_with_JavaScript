import {test, expect} from '@playwright/test';

test('HomePage', async ({page}) =>{

    await page.goto('https://automation-testing-website.netlify.app/');

    const pageURL = await page.url();
    console.log('My Page URL is:', pageURL);
    await expect(page).toHaveURL('https://automation-testing-website.netlify.app/');

    const pageTitle = await page.title();
    console.log('My Page Title is:', pageTitle);
    await expect(page).toHaveTitle('PlaywrightLab — Practice Site for Test Automation');

    await page.close();

})