import { test, expect } from '@playwright/test';

test('Drag and Drop using dragAndDrop method', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  
  await page.locator("#draggable"); // Locate the draggable element
  await page.locator("#droppable"); // Locate the droppable element

  // Perform drag and drop action
  await page.dragAndDrop("#draggable", "#droppable");

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  await expect(page.locator("#droppable")).toContainText("Dropped!"); // Assert that the droppable element contains the text "Dropped!"

  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

});

test('Drag and Drop using mouse actions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const draggable = await page.locator("#draggable"); // Locate the draggable element
  const droppable = await page.locator("#droppable"); // Locate the droppable element

  // Perform drag and drop action using mouse actions
  await draggable.hover(); // Hover over the draggable element
  await page.mouse.down(); // Press the mouse button down
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  await droppable.hover(); // Hover over the droppable element
  await page.mouse.up(); // Release the mouse button
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded

  await expect(page.locator("#droppable")).toContainText("Dropped!"); // Assert that the droppable element contains the text "Dropped!"
  await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is fully loaded
});
