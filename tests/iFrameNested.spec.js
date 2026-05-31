import { test, expect } from '@playwright/test';

test('iFrame Handling', async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/frame_3", {waitUntil: 'load'});

    // Total number of iFrames in the webpage
    const allFrames = await page.frames();
    console.log("Total iFrames:", allFrames.length);

    // Frame Object Creation
    // Method 1: Using frame name or url  
    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3'}); // Switch to the iFrame using its URL                    
    
    await frame3.locator("input[name='mytext3']").fill('Kaushik Debdas'); // Fill the input field inside the iFrame

    await page.waitForTimeout(5000); // Wait for 5 seconds

    // Nested iFrame Handling
    const childFrame = await frame3.childFrames(); // Get the child frames of the current frame
    console.log("Total Nested iFrames inside frame3:", childFrame.length);
    // await childFrame[0].locator('/*[@id="i9"]/div[3]/div//input[@type="checkbox"]').check();

    await page.waitForTimeout(5000); // Wait for 5 seconds

});
