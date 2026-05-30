import {test, expect} from '@playwright/test';


test('Login with Valid Credential', async ({page}) => {

    await page.goto('https://automation-testing-website.netlify.app/', {waitUntil: 'load'});

    await page.getByRole('link', { name: 'Login Form' }).click();

    await page.click('id=loginUsername');
    await page.fill('id=loginUsername', 'admin', { timeout: 6000 });

    await page.click('id=loginPassword');
    await page.fill('id=loginPassword', 'admin123', { timeout: 6000 });

    await page.locator('#rememberMe').check({ timeout: 6000 });

    await page.getByTestId('login-submit').click();

    const LoginMsg = await page.locator("#loginMsg");
    await expect(LoginMsg).toHaveText('✓ Login successful! Welcome, admin');

    await expect(LoginMsg).toBeVisible();

    await page.close();
});

test('Login with Invalid Credential', async ({page}) => {

    await page.goto('https://automation-testing-website.netlify.app/', {waitUntil: 'load'});

    await page.getByRole('link', { name: 'Login Form' }).click();

    await page.click('id=loginUsername');
    await page.fill('id=loginUsername', 'admin123', { timeout: 6000 });

    await page.click('id=loginPassword');
    await page.fill('id=loginPassword', 'admin123', { timeout: 6000 });

    await page.locator('#rememberMe').check({ timeout: 6000 });

    await page.getByTestId('login-submit').click();

    const LoginMsg = await page.locator("#loginMsg");
    await expect(LoginMsg).toHaveText('✗ Invalid credentials. Try admin / admin123');

    await expect(LoginMsg).toBeVisible();

    await page.close();
});

test('Login with Valid Username and Invalid Password', async ({page}) => {

    await page.goto('https://automation-testing-website.netlify.app/', {waitUntil: 'load'});

    await page.getByRole('link', { name: 'Login Form' }).click();

    await page.click('id=loginUsername');
    await page.fill('id=loginUsername', 'admin', { timeout: 6000 });

    await page.click('id=loginPassword');
    await page.fill('id=loginPassword', 'admin@123', { timeout: 6000 });

    await page.locator('#rememberMe').check({ timeout: 6000 });

    await page.getByTestId('login-submit').click();

    const LoginMsg = await page.locator("#loginMsg");
    await expect(LoginMsg).toHaveText('✗ Invalid credentials. Try admin / admin123');

    await expect(LoginMsg).toBeVisible();

    await page.close();
});

test('Login with Invalid Username and Valid Password', async ({page}) => {

    await page.goto('https://automation-testing-website.netlify.app/', {waitUntil: 'load'});

    await page.getByRole('link', { name: 'Login Form' }).click();

    await page.click('id=loginUsername');
    await page.fill('id=loginUsername', 'Kaushik', { timeout: 6000 });

    await page.click('id=loginPassword');
    await page.fill('id=loginPassword', 'admin123', { timeout: 6000 });

    await page.locator('#rememberMe').check({ timeout: 6000 });

    await page.getByTestId('login-submit').click();

    const LoginMsg = await page.locator("#loginMsg");
    await expect(LoginMsg).toHaveText('✗ Invalid credentials. Try admin / admin123');

    await expect(LoginMsg).toBeVisible();

    await page.close();
});