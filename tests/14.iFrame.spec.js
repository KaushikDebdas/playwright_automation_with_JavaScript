import {test, expect} from '@playwright/test';

test('iFrame Handling', async ({page}) => {
    await page.goto("https://omayo.blogspot.com/", {waitUntil: 'load'});

    // Total number of iFrames in the webpage
    const allFrames = await page.frames();
    console.log("Total iFrames:", allFrames.length);

    // Frame Object Creation
    // Method 1: Using frame name or url                      
    

    // Method 2: Using frame locator
    const frameLocator = page.frameLocator('iframe#iframe1'); // Switch to the iFrame using its locator

    // Find a clickable element inside the iFrame and click on it
    const firstLink = frameLocator.locator('a').first(); // Locate the first link inside the iFrame
    console.log("First Link Text:", await firstLink.textContent()); // Get the text of the first link
    await firstLink.click(); // Click on the first link

});

test('iFrame Handling Simple', async ({page}) => {
    await page.goto("https://automation-testing-website.netlify.app/", {waitUntil: 'load'});

    // Total number of iFrames in the webpage
    const allFrames = await page.frames();
    console.log("Total iFrames:", allFrames.length);

    // Frame Object Creation
    const frameLocator = page.frameLocator('#demoFrame'); // Switch to the iFrame using its locator
    await frameLocator.locator('#frameInput').fill('Kaushik Debdas'); // Fill the input field inside the iFrame

    await frameLocator.locator("//button[normalize-space()='Submit']").click(); // Click the submit button inside the iFrame

});