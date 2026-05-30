import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Go to URL
    await page.goto('http://10.11.204.39:8008/global-auth', {waitUntil: 'load'});
    // Login Start   
    await page.getByRole('textbox', { name: 'User Id' }).fill('eraufl');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('Era123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    // Login End

    // Click on the EFS
    await page.locator('div').filter({ hasText: 'NBFI CORE BANKING' }).nth(5).click();
    await expect.soft(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Start Branch Switch AD to HO
    await page.getByRole('link', { name: 'Switch Branch' }).click();
    await page.locator('iframe[title="Branch Switch"]').contentFrame().getByRole('combobox', { name: 'Branch Switch :' }).click();
    await page.getByRole('option', { name: '- Head Office' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    // End Branch Switch AD to HO

    // wait for the page or frame to load fully
    await page.waitForLoadState('networkidle');

    // Menu Click
    await page.locator('#t_Button_navControl').click();
    await page.locator("//body/form[@id='wwvFlowForm']/div[@class='t-Body']/div[@role='navigation']/div[@class='t-Body-nav']/div[@id='t_TreeNav']/ul[@role='group']/li[@id='t_TreeNav_1']/span[1]").click();
    await page.locator("//li[@id='t_TreeNav_13']//span[@class='a-TreeView-toggle']").click();
    await page.getByRole('treeitem', { name: 'Per./Inst. Onboarding' }).click();

    // Start Basic Information Tab
    // Quick Duplicate Search Section Start
    await page.getByRole('textbox', { name: ' Document No. :' }).fill('DC123456');
    // Quick Duplicate Search Section End

    // Basic Information Section Start
    await page.getByRole('textbox', { name: 'Name Title:' }).click();
    await page.getByRole('textbox', { name: ' First Name :' }).click();
    await page.getByRole('textbox', { name: ' First Name :' }).fill('Test first Name');
    await page.getByRole('textbox', { name: 'Last Name :' }).fill('Test last name');
    await page.getByRole('textbox', { name: ' Date of Birth :' }).fill('16-JUL-1990');
    await page.getByRole('textbox', { name: ' Date of Birth :' }).press('Enter');
    await page.getByText('Male', { exact: true }).click();
    await page.getByRole('combobox', { name: ' Religion :' }).click();
    await page.locator('#P500_RELIGIOUS_CODE_lov_btn').click();
    await page.waitForLoadState('networkidle');
    
    //await page.getByRole('option', { name: 'Hindu' }).click();
    await page.getByRole('combobox', { name: ' Birth Place :' }).click();
    await page.getByRole('option', { name: '- Bagerhat' }).click();
    await page.getByRole('combobox', { name: ' Occupation :' }).click();
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('Engin');
    await page.getByRole('option', { name: 'Engineer' }).click();
    await page.getByRole('combobox', { name: ' Last Education :' }).click();
    await page.getByRole('option', { name: 'Post Graduation' }).click();
    await page.getByRole('combobox', { name: ' Marital Status :' }).click();
    await page.getByRole('option', { name: 'Married' }).click();
    await page.getByRole('textbox', { name: 'Father Name Title :' }).click();
    await page.getByRole('textbox', { name: 'Father Name Title :' }).fill('Mr.');
    await page.getByRole('textbox', { name: 'Father Name Title :' }).press('Tab');
    await page.getByRole('textbox', { name: ' Father Name :' }).fill('Test father name');
    await page.getByRole('textbox', { name: ' Father Name :' }).press('Tab');
    await page.getByRole('textbox', { name: 'Mother Name Title :' }).fill('Mrs.');
    await page.getByRole('textbox', { name: 'Mother Name Title :' }).press('Tab');
    await page.getByRole('textbox', { name: ' Mother Name :' }).fill('Test mother Name');
    await page.locator('#P500_SPOUSE_TITLE_CONTAINER > .t-Form-inputContainer').click();
    await page.getByRole('textbox', { name: 'Spouse Name Title :' }).fill('Mrs.');
    await page.getByRole('textbox', { name: 'Spouse Name Title :' }).press('Tab');
    await page.getByRole('textbox', { name: 'Spouse Name :' }).fill('Test spouse Name');
    await page.getByRole('textbox', { name: 'Spouse Name :' }).press('Tab');
    await page.getByRole('textbox', { name: 'No. of Son :' }).fill('1');
    await page.getByRole('textbox', { name: 'No. of Son :' }).press('Tab');
    await page.getByRole('textbox', { name: 'No. of Daughter:' }).fill('2');
    await page.getByRole('textbox', { name: 'No. of Daughter:' }).press('Tab');
    await page.getByRole('textbox', { name: 'Total Children :' }).press('Tab');
    await page.getByRole('combobox', { name: ' Sector Type :' }).click();
    await page.getByRole('option', { name: 'Private' }).click();
    await page.locator('#P500_SECTOR_CODE_CONTAINER > .t-Form-inputContainer').click();
    await page.getByRole('option', { name: '909250 - NGO or Micro Credit' }).click();
    await page.locator('#P500_MEDIA_lov_btn').click();
    // Basic Information Section End

    // Other Information Section Start
    await page.getByRole('option', { name: 'Friends' }).click();
    await page.getByRole('textbox', { name: 'Living Period :' }).click();
    await page.getByRole('textbox', { name: 'Living Period :' }).fill('5');
    await page.getByRole('textbox', { name: 'Annual Income :' }).click();
    await page.getByRole('textbox', { name: 'Annual Income :' }).fill('500000');
    await page.getByRole('textbox', { name: 'No of Male Earner :' }).click();
    await page.getByRole('textbox', { name: 'No of Male Earner :' }).fill('01');
    await page.getByRole('textbox', { name: 'No of Female Earner :' }).click();
    await page.getByRole('textbox', { name: 'No of Female Earner :' }).fill('02');
    await page.locator('#P500_INCOME_PERSON_CONTAINER > .t-Form-inputContainer > .t-Form-itemWrapper').click();
    await page.getByRole('textbox', { name: 'Home Description :' }).click();
    await page.getByRole('textbox', { name: 'Home Description :' }).fill('Test Home Description for Other Information (Personal Customer)');
    await page.getByRole('textbox', { name: 'Remarks :' }).click();
    await page.getByRole('textbox', { name: 'Remarks :' }).fill('Testing Personal Customer Onboarding via Playwright');
    // Other Information Section End

    // Directorship / Related Party Information Section Start
    await page.getByLabel('Directorship :').getByText('Yes').click();
    await page.getByRole('textbox', { name: 'Company Name :' }).click();
    await page.getByRole('textbox', { name: 'Company Name :' }).fill('XYZ Company Ltd.');
    await page.getByRole('textbox', { name: 'Company Name :' }).press('Tab');
    await page.getByRole('textbox', { name: 'Share Percent :' }).fill('10');
    await page.getByLabel('Related Party :').getByText('Yes').click();
    await page.getByRole('textbox', { name: 'Party Name 1 :' }).click();
    await page.getByRole('textbox', { name: 'Party Name 1 :' }).fill('NCP Party');
    await page.getByRole('button', { name: 'Next' }).click();
    // Directorship / Related Party Information Section End
    // End Basic Information Tab

    // Start Customer Phonto Tab
    await expect(page.getByRole('button', { name: 'Add Photo Request' })).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();
    // End Customer Phonto Tab

    // Start Address Information Tab
    // Start Present Address
    await page.locator('#P501_ADDRESS_TYPE_lov_btn').click();
    await page.getByRole('option', { name: 'Present/Residential' }).click();
    await page.getByRole('textbox', { name: ' Address Line 1 :' }).click();
    await page.getByRole('textbox', { name: ' Address Line 1 :' }).fill('Test Present Address Line 1 for Personal Customer');
    await page.getByRole('textbox', { name: ' Address Line 1 :' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: ' Address Line 1 :' }).press('ControlOrMeta+c');
    await page.getByRole('textbox', { name: 'Address line 2 :' }).click();
    await page.getByRole('textbox', { name: 'Address line 2 :' }).fill('Test Present Address Line 1 for Personal Customer');
    await page.getByRole('textbox', { name: 'Address line 2 :' }).click();
    await page.getByRole('textbox', { name: 'Address line 2 :' }).fill('Test Present Address Line 2 for Personal Customer');
    await page.getByRole('combobox', { name: ' Country Name :' }).click();
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('Bangladesh');
    await expect(page.getByRole('option', { name: 'BANGLADESH' })).toBeVisible();
    await page.getByRole('option', { name: 'BANGLADESH' }).click();
    await expect(page.locator('#P501_DIVISION_CODE_LABEL')).toContainText('Division Name :');
    await page.getByRole('combobox', { name: ' Division Name :' }).click();
    await page.getByRole('option', { name: 'Chattogram ( 20 )' }).click();
    await page.getByRole('combobox', { name: ' District Name :' }).click();
    await page.getByRole('option', { name: 'Brahmanbaria ( 12 )' }).click();
    await page.getByRole('combobox', { name: 'Upazila / Thana Name :' }).click();
    await page.getByRole('option', { name: 'Akhaura ( 02 )' }).click();
    await page.getByRole('combobox', { name: 'Union Name :' }).click();
    await page.getByRole('option', { name: 'Dharkhar ( 57 )' }).click();
    await page.getByRole('combobox', { name: 'Post Code :' }).click();
    await page.getByRole('option', { name: '- Akhaura' }).click();
    await page.getByRole('button', { name: 'Add List' }).click();
    await expect(page.getByText('Customer Address Saved')).toBeVisible();
    // End Present Address

    // Start Permanent Address
    await page.locator('#P501_ADDRESS_TYPE_lov_btn').click();
    await page.getByRole('option', { name: 'Permanent' }).click();
    await page.getByRole('textbox', { name: ' Address Line 1 :' }).click();
    await page.getByRole('textbox', { name: ' Address Line 1 :' }).fill('Test Permanent Address Line 1 for Personal Customer');
    await page.getByRole('textbox', { name: 'Address line 2 :' }).click();
    await page.getByRole('textbox', { name: 'Address line 2 :' }).fill('Test Permanent Address Line 2 for Personal Customer');
    await page.getByRole('combobox', { name: ' Country Name :' }).click();
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('Bangladesh');
    await page.getByRole('option', { name: 'BANGLADESH' }).click();
    await page.getByRole('combobox', { name: ' Division Name :' }).click();
    await page.getByRole('option', { name: 'Comilla ( 61 )' }).click();
    await page.getByRole('combobox', { name: ' District Name :' }).click();
    await page.getByRole('option', { name: 'Mymensingh ( 61 )' }).click();
    await page.getByRole('combobox', { name: 'Upazila / Thana Name :' }).click();
    await page.getByRole('option', { name: 'Dhubaura ( 16 )' }).click();
    await page.getByRole('combobox', { name: 'Union Name :' }).click();
    await page.getByRole('option', { name: 'Dhobaura ( 03 )' }).click();
    await page.getByRole('combobox', { name: 'Post Code :' }).click();
    await page.getByText('Union Name : Post Code :').click();
    await page.getByRole('button', { name: 'Add List' }).click();
    await page.getByRole('button', { name: '' }).click();
    // End Permanent Address

    // Start Occupational / Professional Address
    await page.locator('#P501_ADDRESS_TYPE_lov_btn').click();
    await page.getByRole('option', { name: 'Occupational / Professional' }).click();
    await page.locator('#P501_SAME_AS_ABOVE_lov_btn').click();
    await page.getByRole('option', { name: 'Present/Residential' }).click();
    await page.getByRole('button', { name: 'Add List' }).click();
    await page.getByRole('textbox', { name: ' Designation :' }).click();
    await page.getByRole('textbox', { name: ' Designation :' }).fill('Test designation');
    await page.getByRole('textbox', { name: ' Designation :' }).press('Tab');
    await page.getByRole('textbox', { name: ' Company Name :' }).fill('Test company name');
    await page.getByRole('button', { name: 'Add List' }).click();
    await expect(page.getByText('Customer Address Saved')).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();
    // End Occupational / Professional Address
    // End Address Information Tab

    // Start Contact Information Tab
    await page.getByRole('region', { name: 'Customer Contact Information' }).getByLabel('Mobile No. :').click();
    await page.getByRole('region', { name: 'Customer Contact Information' }).getByLabel('Mobile No. :').fill('01757874126');
    await page.getByRole('region', { name: 'Customer Contact Information' }).getByLabel('Mobile No. :').click();
    await page.getByRole('region', { name: 'Customer Contact Information' }).getByLabel('Mobile No. :').press('ControlOrMeta+a');
    await page.getByRole('region', { name: 'Customer Contact Information' }).getByLabel('Mobile No. :').press('ControlOrMeta+c');
    await page.getByRole('textbox', { name: 'Alternative Mobile No :' }).click();
    await page.getByRole('textbox', { name: 'Alternative Mobile No :' }).fill('01757874127');
    await page.locator('#P502_TELEPHONE_NO_CONTAINER > .t-Form-inputContainer').click();
    await page.getByRole('textbox', { name: 'Telephone No :', exact: true }).fill('017578');
    await page.getByRole('textbox', { name: 'Alternative Telephone No :' }).fill('0117579');
    await page.getByRole('textbox', { name: 'Email Address :' }).click();
    await page.getByRole('textbox', { name: 'Email Address :' }).fill('www.testemail@gmail.com');
    await page.getByRole('textbox', { name: 'Facebook Profile :' }).fill('www.testfb.com');
    await page.getByRole('textbox', { name: 'Twitter Profile :' }).fill('www.testtwittter.com');
    await page.getByRole('textbox', { name: 'LinkedIn Profile :' }).fill('www.testlinkedin.com');
    await page.getByRole('textbox', { name: ' Contact Person Name :' }).click();
    await page.getByRole('textbox', { name: ' Contact Person Name :' }).fill('Test emergency contact person');
    await page.getByRole('region', { name: 'Emergency Contact Information' }).getByLabel('Mobile No. :').fill('01515784036');
    await page.getByRole('combobox', { name: ' Relation/Role :' }).click();
    await page.getByRole('option', { name: 'Brother', exact: true }).click();
    await page.getByRole('button', { name: 'Add List' }).click();
    await expect(page.getByText('Emergency Contact Information Saved Successfully.')).toBeVisible();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    // End Contact Information Tab

    // Start Related Documents Tab
    await page.locator('#P503_DOCUMENT_TYPE_lov_btn').click();
    await page.getByRole('option', { name: 'Birth Registration No' }).click();
    await page.getByRole('textbox', { name: ' Document No. :' }).click();
    await page.getByRole('textbox', { name: ' Document No. :' }).fill('123456789563');
    await page.locator('#P503_ISSUE_AUTHORITY_lov_btn').click();
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('Union');
    await expect(page.getByRole('option', { name: 'Union Parishad' })).toBeVisible();
    await page.getByRole('option', { name: 'Union Parishad' }).click();
    await page.getByRole('button', { name: 'Add Document' }).click();
    await page.getByRole('textbox', { name: ' Document No. :' }).click();
    await page.getByRole('textbox', { name: ' Document No. :' }).fill('123456789563456');
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: 'Add Document' }).click();
    await page.locator('#P503_DOCUMENT_TYPE_lov_btn').click();
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('TIN');
    await page.getByRole('option', { name: 'TIN / E-TIN' }).click();
    await page.getByRole('textbox', { name: ' Document No. :' }).click();
    await page.getByRole('textbox', { name: ' Document No. :' }).fill('123456789012');
    await page.locator('#P503_ISSUE_AUTHORITY_lov_btn').click();
    await page.getByRole('option', { name: 'National Board of Revenue' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: 'Add Document' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    // End Related Documents Tab
    await expect(page.locator('#L374123146276605666')).toContainText('Final Review (Active)');
    await page.getByRole('button', { name: '' }).click();
});