import { expect, test, Page } from '@playwright/test';
test.describe.serial('TestCase01', () => {

    test('testCase03', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/', { timeout: 120000 });
        await page.waitForLoadState('domcontentloaded', { timeout: 120000 });
        await page.waitForSelector("//a[contains(text(),'Input Form Submit')]", { timeout: 60000 });
        await page.click("//a[contains(text(),'Input Form Submit')]");
        await page.click("//button[text() ='Submit']");
        const validationMessage = await page.$eval('input[name="name"]', el => el.validationMessage);
        await expect(validationMessage).toBe('Please fill out this field.');
        await page.fill('input[name="name"]', 'Sai Krishna');
        await page.fill("//input[@placeholder='Email']", 'saikrishnaarepalli1819@gmail.com');
        await page.fill('input[name="password"]', 'Password123');
        await page.fill('input[name="company"]', 'Learning');
        await page.fill('input[name="website"]', 'https://www.google.com/');
        await page.selectOption('select[name="country"]', { label: 'India' });
        await page.fill('input[name="city"]', 'Hyderabad');
        await page.fill('input[name="address_line1"]', 'Madhapur');
        await page.fill('input[name="address_line2"]', 'Madhapur');
        await page.fill('input[id="inputState"]', 'Telangana');
        await page.fill('input[name="zip"]', '500081');
        await page.click('//button[text() ="Submit"]');
        await expect(page.locator('p[class="success-msg hidden"]')).toHaveText('Thanks for contacting us, we will get back to you shortly.');
    });
});