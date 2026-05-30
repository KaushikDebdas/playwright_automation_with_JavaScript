import {test, expect} from '@playwright/test';

test.skip('Alerts with OK Button', async ({page}) => {

    page.goto("https://automation-testing-website.netlify.app/", {waitUntil: 'load'});

    // Dialog window handling
    // Enable dialog handling before the action that triggers the dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert'); // Check if the dialog is an alert
        expect(dialog.message()).toContain('You triggered a simple alert!'); // Check the dialog message
        console.log("Dialog message: ", dialog.message()); // Log the dialog message
        await dialog.accept(); // Accept the dialog (click OK)
    });

    await page.getByText('Show Alert').click();

    await page.waitForTimeout(5000); // Wait for the dialog to be handled
});

test.skip('Confirmation Dialog-Alert with OK and Cancel Button', async ({page}) => {

    page.goto("https://automation-testing-website.netlify.app/", {waitUntil: 'load'});

    // Dialog window handling
    // Enable dialog handling before the action that triggers the dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm'); // Check if the dialog is a confirmation dialog
        expect(dialog.message()).toContain('Do you confirm this action?'); // Check the dialog message
        console.log("Dialog message: ", dialog.message()); // Log the dialog message
        //await dialog.accept(); // Accept the dialog (close by using OK button)
        await dialog.dismiss(); // Dismiss the dialog (close by using Cancel button)
    });

    await page.getByTestId('alert-confirm').click();

    //await expect(page.getByTestId('alert-result')).toHaveText('Result: Confirmed (true)'); // Assertion for OK button
    await expect(page.getByTestId('alert-result')).toHaveText('Result: Cancelled (false)'); // Assertion for Cancel button


    await page.waitForTimeout(5000); // Wait for the dialog to be handled
});


test('Prompt Dialog-Alert with OK and Cancel Button', async ({page}) => {

    page.goto("https://automation-testing-website.netlify.app/", {waitUntil: 'load'});

    // Dialog window handling
    // Enable dialog handling before the action that triggers the dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt'); // Check if the dialog is a prompt dialog
        expect(dialog.message()).toContain('Please enter your name:'); // Check the dialog message
        console.log("Dialog message: ", dialog.message()); // Log the dialog message
        expect(dialog.defaultValue()).toContain(''); // Check the default value in the prompt dialog
        console.log("Default value: ", dialog.defaultValue()); // Log the default value
        // Method 1: Using accept() to enter text and close the prompt dialog
        //await dialog.accept('Kaushik Debdas'); // Accept the dialog (close by using OK button) and enter text in the prompt input field
        
        // Method 2: Using console.log() to log the input text and then using accept() to close the prompt dialog without entering text
        const inputText = 'Kaushik Debdas';
        await dialog.accept(inputText); // Accept the dialog (close by using OK button) and enter text in the prompt input field
        console.log("Input text: ", inputText); // Log the input text
        
        //await dialog.dismiss(); // Dismiss the dialog (close by using Cancel button)
    });

    await page.waitForTimeout(5000); // Wait for the dialog to be handled
    await page.getByTestId('alert-prompt').click();
    await page.waitForTimeout(5000); // Wait for the dialog to be handled
    await expect(page.getByTestId('alert-result')).toHaveText('Result: You entered: Kaushik Debdas'); // Assertion for OK button
    //await expect(page.getByTestId('alert-result')).toHaveText('Result: Prompt cancelled'); // Assertion for Cancel button


    await page.waitForTimeout(5000); // Wait for the dialog to be handled
});