/*
To generate Allure Report using Playwright, follow these steps:
    1. Install Allure 
        npm i -D @playwright/test allure-playwright
        npm install -g allure-commandline --save-dev
    2. Check package.json, ensure you have the following scripts:
        "allure-playwright": "^3.4.1"
    3. Write small code in playwright.config.js file
        reporter: [ ['list'],
                    ['html'],
                    ['junit', { outputFile: 'results.xml' }],
                    ['json', { outputFile: 'results.json' }],
                    ['allure-playwright', { outputFolder: 'allure-results' }]
                    ],
    4. Run the tests using the command:
        npx playwright test AllureReportGeneration.spec.js --project=chromium --headed
    5. Generate the Allure Report using the command:
        allure generate allure-results -o allure-report --clean
    6. Open the Allure Report using the command:
        allure open allure-report
*/

const {test, expect} = require('@playwright/test')

test('Home Page' , async ({page})=> {
    // Open the url on the browser
    await page.goto('https://www.demoblaze.com/index.html');

    // Fist Test
    const pageURL = await page.url() // Store the page url in pageURL
    console.log('Page URL is:', pageURL); // print the URL in console
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); // Verify the URL


    const pageTitle = await page.title(); // Store the page title in pageTitle
    console.log('Page title is:', pageTitle); // print the title in console
    await expect(page).toHaveTitle('STORE'); // Verify the Title
    

    // Close the page
    await page.close();
})

test('Test3', async ({page})=>{
    await page.goto('https://www.demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo stor');
    console.log('Intentionally Failed Test3');

}) 

