import { expect, test, Page } from '@playwright/test';
test.describe.serial('TestCase01', () => {
   
    test('testCase01', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/', { timeout: 120000 });
        await page.waitForLoadState('domcontentloaded', { timeout: 120000 });
        await page.waitForSelector("//a[contains(text(),'Simple Form Demo')]", { timeout: 60000 });
        await page.click("//a[contains(text(),'Simple Form Demo')]");
        const url = await page.url();
        await expect(url).toContain('simple-form-demo');
        const msg = 'Welcome to LambdaTest';
        await page.waitForLoadState('domcontentloaded', { timeout: 120000 });
        await page.waitForSelector("//input[@id='user-message']", { timeout: 120000 });
        await page.fill("//input[@id='user-message']", msg);
        await page.click('#showInput', { delay: 1000 });
        await page.waitForSelector("//p[@id='message']", { timeout: 120000 });
        const message = await page.textContent("//p[@id='message']");
        await expect(message).toBe(msg);
    })

})