import { test, expect } from '@playwright/test';

// --- Random data helpers ---
function randomMaleName() {
  const firstNames = ['Sumon', 'Rafiq', 'Kamal', 'Arif', 'Hasan', 'Jahid', 'Imran', 'Mahmud', 'Shakil', 'Tanvir'];
  const lastNames  = ['Khan', 'Ahmed', 'Ali', 'Mia', 'Haque', 'Rahman', 'Hossain', 'Chowdhury', 'Siddiqui'];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last  = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function randomFemaleName() {
  const firstNames = ['Sohana', 'Asma', 'Nadia', 'Tania', 'Sadia', 'Rima', 'Salma', 'Jahanara', 'Farzana', 'Nasrin'];
  const lastNames  = ['Khan', 'Ahmed', 'Khatun', 'Akter', 'Begum', 'Rahman', 'Hossain', 'Chowdhury', 'Siddiqui'];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last  = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function randomNID() {
  const lengths = [10, 13, 17];
  const len = lengths[Math.floor(Math.random() * lengths.length)];
  return Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join('');
}

function randomPhone() {
  return '01' + Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
}


test('Single Customer Creation', async ({ page }) => {
  await page.goto('http://10.11.200.71:5173/');
  // Product and Customer
  await page.getByRole('combobox').first().selectOption('S01');
  await page.getByRole('combobox').nth(1).selectOption('487');
  // Initial Deposit
  await page.getByPlaceholder('Enter Initial Deposit Amount').click();
  await page.getByPlaceholder('Enter Initial Deposit Amount').fill('500');
  // Customer Information
  await expect(page.locator('h2')).toContainText('Customer Information');
  // Nominee Section START
  await page.getByRole('button', { name: 'Nominee' }).click();
    // Nominee 1 (generate + log)
  const nominee1Name = randomMaleName();
  const nominee1Father = randomMaleName();
  const nominee1Mother = randomFemaleName();
  const nominee1Phone = randomPhone();
  const nominee1Nid = randomNID();

  console.log('Nominee 1 Name:', nominee1Name);
  console.log('Nominee 1 Father:', nominee1Father);
  console.log('Nominee 1 Mother:', nominee1Mother);
  console.log('Nominee 1 Phone:', nominee1Phone);
  console.log('Nominee 1 NID:', nominee1Nid);
  // Nominee 1
  await page.getByRole('textbox', { name: 'Enter Nominee Name' }).fill(nominee1Name);
  await page.getByRole('textbox', { name: 'Enter Father Name' }).fill(nominee1Father);
  await page.getByRole('textbox', { name: 'Enter Mother Name' }).fill(nominee1Mother);
  await page.getByRole('textbox', { name: 'Enter Number' }).fill(nominee1Phone);
  await page.getByPlaceholder('Enter Date of Birth').fill('1996-07-15');
  await page.getByPlaceholder('Enter Percentage Share').fill('10');
  await page.getByRole('textbox', { name: 'Enter National ID' }).fill(nominee1Nid);
  await page.getByRole('textbox', { name: 'Enter Address' }).fill('Dhaka, Bangladesh');
  await page.locator('div').filter({ hasText: /^Relation Type\*/ }).getByRole('combobox').selectOption('brother');
  // Add Nominee
  await page.getByRole('button', { name: 'Add' }).click();
  // Nominee 2
  // Nominee 2 (generate + log)
  const nominee2Name = randomMaleName();
  const nominee2Father = randomMaleName();
  const nominee2Mother = randomFemaleName();
  const nominee2Phone = randomPhone();
  const nominee2Nid = randomNID();

  console.log('Nominee 2 Name:', nominee2Name);
  console.log('Nominee 2 Father:', nominee2Father);
  console.log('Nominee 2 Mother:', nominee2Mother);
  console.log('Nominee 2 Phone:', nominee2Phone);
  console.log('Nominee 2 NID:', nominee2Nid);

  await page.getByRole('textbox', { name: 'Enter Nominee Name' }).nth(1).fill(nominee2Name);
  await page.getByRole('textbox', { name: 'Enter Father Name' }).nth(1).fill(nominee2Father);
  await page.getByRole('textbox', { name: 'Enter Mother Name' }).nth(1).fill(nominee2Mother);
  await page.getByRole('textbox', { name: 'Enter Number' }).nth(1).fill(nominee2Phone);
  await page.getByPlaceholder('Enter Date of Birth').nth(1).fill('1999-10-10');
  await page.getByPlaceholder('Enter Percentage Share').nth(1).fill('10');
  await page.getByRole('textbox', { name: 'Enter National ID' }).nth(1).fill(nominee2Nid);
  await page.getByRole('textbox', { name: 'Enter Address' }).nth(1).fill('Banani, Dhaka, Bangladesh');
  await page.getByRole('combobox').nth(3).selectOption('brother');
  // Nominee Section END
  // Indroducer Section START
  await page.getByRole('button', { name: 'Introducer' }).click();
  const introducerName = randomFemaleName();
  console.log('Introducer Name:', introducerName);
  await page.getByRole('textbox', { name: 'Enter Introducer Name' }).fill(introducerName);
  await page.getByRole('textbox', { name: 'Enter Account Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Account Number' }).fill('9890989878321');
  await page.getByRole('textbox', { name: 'Enter Address' }).click();
  await page.getByRole('textbox', { name: 'Enter Address' }).fill('Motijheel, Dhaka, Bangladesh');
  await page.getByRole('textbox', { name: 'Enter Relationship' }).click();
  await page.getByRole('textbox', { name: 'Enter Relationship' }).fill('Uncle');
  await page.getByRole('textbox', { name: 'Enter Remarks' }).click();
  await page.getByRole('textbox', { name: 'Enter Remarks' }).fill('This is for Introducer Remarks field testing ');
  // Introducer Section END
  // Submit Application
  await page.getByRole('button', { name: 'Submit Application' }).click();
  const accountText = page.locator('text=Account Number');
  await expect(accountText).toContainText('Account Number');
  await expect(page.getByRole('img').filter({ hasText: /^$/ }).first()).toBeVisible();

  // --- Capture account number text and print ---
  const text = await accountText.first().textContent();
  if (text) 
    {
        const match = text.match(/Account Number:\s*([A-Za-z0-9]+)/);
        if (match) {
        console.log('✅ Created Account Number:', match[1]);
        } else {
        console.log('⚠️ Could not extract account number, full text was:', text);
        }
    }
});