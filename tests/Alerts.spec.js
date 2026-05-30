import {test, expect} from '@playwright/test';

test('Alerts with OK Button', async ({page}) => {

    page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Dialog window handling
    // Enable dialog handling before the action that triggers the dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert'); // Check if the dialog is an alert
        expect(dialog.message()).toContain('I am an alert box!'); // Check the dialog message
        console.log("Dialog message: ", dialog.message()); // Log the dialog message
        await dialog.accept(); // Accept the dialog (click OK)
    });

    await page.locator('#alertBtn').click();

    await page.waitForTimeout(5000); // Wait for the dialog to be handled
});

test('Confirmation Dialog-Alert with OK and Cancel Button', async ({page}) => {

    page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Dialog window handling
    // Enable dialog handling before the action that triggers the dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm'); // Check if the dialog is a confirmation dialog
        expect(dialog.message()).toContain('Press a button!'); // Check the dialog message
        console.log("Dialog message: ", dialog.message()); // Log the dialog message
        //await dialog.accept(); // Accept the dialog (close by using OK button)
        await dialog.dismiss(); // Dismiss the dialog (close by using Cancel button)
    });

    await page.locator('#confirmBtn').click();

    //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!'); // Assertion for OK button
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!'); // Assertion for Cancel button


    await page.waitForTimeout(5000); // Wait for the dialog to be handled
});


test('Prompt Dialog-Alert with OK and Cancel Button', async ({page}) => {

    page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Dialog window handling
    // Enable dialog handling before the action that triggers the dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt'); // Check if the dialog is a prompt dialog
        expect(dialog.message()).toContain('Please enter your name:'); // Check the dialog message
        console.log("Dialog message: ", dialog.message()); // Log the dialog message
        expect(dialog.defaultValue()).toContain('Harry Potter'); // Check the default value in the prompt dialog
        console.log("Default value: ", dialog.defaultValue()); // Log the default value
        await dialog.accept('Kaushik Debdas'); // Accept the dialog (close by using OK button) and enter text in the prompt input field
        
        //await dialog.dismiss(); // Dismiss the dialog (close by using Cancel button)
    });

    await page.waitForTimeout(5000); // Wait for the dialog to be handled
    await page.locator('#promptBtn').click();
    await page.waitForTimeout(5000); // Wait for the dialog to be handled
    await expect(await page.locator("//p[@id='demo']")).toContainText('Hello Kaushik Debdas! How are you today?'); // Assertion for OK button
    //await expect(page.locator('#demo')).toHaveText('User cancelled the prompt.'); // Assertion for Cancel button


    await page.waitForTimeout(5000); // Wait for the dialog to be handled
});