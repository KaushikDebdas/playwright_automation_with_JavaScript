import {test, expect} from '@playwright/test';

test ('Handle Inputbox', async({page}) => {

    await page.goto('https://automation-testing-website.netlify.app/', {waitUntil: 'load'});

    const FirstName = await page.locator('#firstName').fill('Kaushik');

    const LastName = await page.locator('#lastName').fill('Debdas');

    const Email = await page.getByTestId('signup-email').fill('kaushikdebds@gmail.com');

    const Password = await page.locator("//input[@id='signupPwd']").fill('123456');

    const ConfirmPassword = await page.getByTestId('signup-password-confirm').fill('123456');

    const CheckTerms = await page.locator('#terms').check();

    const CreateAccount = await page.getByText('Create account').click();

    // store dynamic name
    const SucessMessage = await page.locator('#signupMsg').textContent();
    await expect(await page.getByText(SucessMessage)).toBeVisible();

    //await expect(page.locator('#signupMsg')).toHaveText(/Account created! ID: \d+/);

    await expect(await page.locator("//input[@value='cannot edit me']")).not.toBeEditable();
})