import {test, expect} from '@playwright/test';

test.skip('Table Data Extraction', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});


    // Locating the table element
    const table =await page.locator('#productTable');

    // Extracting total number of columns and rows in the table
    const totalColumns = await table.locator('thead tr th').count(); //thead tr th - to count the number of columns in the table
    const totalRows = await table.locator('tbody tr').count(); //tbody tr - to count the number of rows in the table

    // Printing the total number of columns and rows in the console
    console.log(`Total Columns: ${totalColumns}`);
    console.log(`Total Rows: ${totalRows}`);

    // Assertions to verify the total number of columns and rows
    await expect(totalColumns).toBe(4); // Assert that the total number of columns is 4
    await expect(totalRows).toBe(5); // Assert that the total number of rows is 5

    // Select checkbox for product "4"
    const matchedRow = await table.locator('tbody tr').filter({ has: page.locator('td'), hasText: 'Smartwatch' }); // Filter the rows to find the one that contains the text "Smartwatch"
    await matchedRow.locator('input[type="checkbox"]').click(); // Click the checkbox in the matched row

    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the checkbox selection

    // Select multiple products by reusing the function to extract and print table data
    // Reusuable function to extract and print table data
    await selectProduct(table, page, 'Smartphone'); // Select the checkbox for product "Smartphone"
    await selectProduct(table, page, 'Laptop'); // Select the checkbox for product "Laptop"
    await selectProduct(table, page, 'Tablet'); // Select the checkbox for product "Tablet"

    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the checkbox selection

});

/*
    This reusable function takes three parameters: table (the table element), page (the Playwright page object), and name (the name of the product to select). It filters the rows of the table to find the one that contains the specified product name and clicks the checkbox in that row to select it.

 */

async function selectProduct(table, page, name)
{
    // Filter the rows to find the one that contains the specified product name
    const matchedRow = table.locator('tbody tr').filter({ 
        has: page.locator('td'), 
        hasText: name 
    }); 
    await matchedRow.locator('input[type="checkbox"]').click(); // Click the checkbox in the matched row
}


test('Print First Page Data from Table using for loop', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Locating the table element
    const table =await page.locator('#productTable');

    // Extracting total number of columns and rows in the table
    const columns = table.locator('thead tr th'); //thead tr th - to count the number of columns in the table
    const rows = table.locator('tbody tr'); //tbody tr - to locate all rows in the table
    const totalColumns = await columns.count();
    const totalRows = await rows.count();

    // Printing the total number of columns and rows in the console
    console.log(`Total Columns: ${totalColumns}`);
    console.log(`Total Rows: ${totalRows}`);

    // Assertions to verify the total number of columns and rows
    await expect(totalColumns).toBe(4); // Assert that the total number of columns is 4
    await expect(totalRows).toBe(5); // Assert that the total number of rows is 5

    // Print all product details from the first page using for loop
    // Outer loop to iterate through each row of the table
    for (let i = 0; i < totalRows; i++) {
        const currentRow = rows.nth(i); // Get the current row using nth() method to access the row at index i
        const currentRowCells = currentRow.locator('td'); // Locate all the cells (columns) in the current row using locator('td') to find all td elements within the current row
        // Inner loop to iterate through each column of the current row
        for (let j = 0; j < totalColumns; j++) {
            console.log(await currentRowCells.nth(j).textContent()); // Print the text content of each cell (column) in the current row to the console
        }
    }

    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the checkbox selection

});


test ('Handle Pagination in Table', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/", {waitUntil: 'load'});

    // Locating the table element
    const table =await page.locator('#productTable');

    // Extracting total number of columns and rows in the table
    const columns = table.locator('thead tr th'); //thead tr th - to count the number of columns in the table
    const rows = table.locator('tbody tr'); //tbody tr - to locate all rows in the table
    const totalColumns = await columns.count();
    const totalRows = await rows.count();

    // Printing the total number of columns and rows in the console
    console.log(`Total Columns: ${totalColumns}`);
    console.log(`Total Rows: ${totalRows}`);

    // Assertions to verify the total number of columns and rows
    await expect(totalColumns).toBe(4); // Assert that the total number of columns is 4
    await expect(totalRows).toBe(5); // Assert that the total number of rows is 5

    // Read data and print all product details from the full table using for loop and handle pagination

    const allPages = await page.locator('.pagination li a');
    console.log('Number of pagination links:', await allPages.count()); // Count the total number of pagination links available

    for(let p=0; p< await allPages.count(); p++)
    {
        // If the pagination link index is greater than 0, click on the pagination link to navigate to the next page of the table
        // The first pagination link (index 0) is usually the "Previous" button, so we start clicking from index 1 to navigate through the pages of the table
        if(p>0)
        {
            await allPages.nth(p).click(); // Click on the pagination link at index p to navigate to the next page of the table
            await page.waitForTimeout(2000); // Wait for 2 seconds to allow the table data to load after clicking the pagination link
        }

        // Outer loop to iterate through each row of the table
        for (let i = 0; i < totalRows; i++) 
        {
            const currentRow = rows.nth(i); // Get the current row using nth() method to access the row at index i
            const currentRowCells = currentRow.locator('td'); // Locate all the cells (columns) in the current row using locator('td') to find all td elements within the current row
            // Inner loop to iterate through each column of the current row
            for (let j = 0; j < totalColumns; j++) 
            {
                console.log(await currentRowCells.nth(j).textContent()); // Print the text content of each cell (column) in the current row to the console
            }
        }

    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the checkbox selection
    }

    

});