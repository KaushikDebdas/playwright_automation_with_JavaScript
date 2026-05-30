/*
    Run Single Test Case in a Specific Folder in Headed/UI Mode
    npx playwright test tests/test_my_page/Checkboxes.spec.js --project=chromium --headed
*/
import {test, expect} from '@playwright/test';

test('Handle Checkboxes', async ({page}) =>{

    await page.goto('https://automation-testing-website.netlify.app/');

    // Click on the Light Button
    await page.locator('#themeBtn').click();

    // Click on the Menu for Checkboxes
    await page.getByRole('link', { name: 'Checkboxes' }).click();


    const PythonpreChecked = await page.getByLabel('Python (pre-checked)');
    await expect(PythonpreChecked.isChecked()).toBeTruthy();


    // Check JavaScript
    const javaScript = await page.locator('label:has-text("JavaScript")');
    await javaScript.check();
    // Check RUST
    const rust = await page.locator("//label[normalize-space()='Rust']");
    await rust.check();
    // Check Go
    const go = await page.getByLabel('Go');
    await go.check();

    // Click on the Show Selected Button
    const showSelectedButton = await page.getByText('Show Selected');
    await showSelectedButton.click();

    // Assertion Result
    const output = await page.getByTestId('cb-output');
    await expect(output).toHaveText('Selected: javascript, python, rust, go');


    // Uncheck JavaScript
    await javaScript.uncheck();
    // click show selected button again
    await showSelectedButton.click();
    // Assertion Result
    await expect(output).toHaveText('Selected: python, rust, go');


    await page.waitForTimeout(5000);

})