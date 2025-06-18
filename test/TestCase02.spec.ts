import { expect, test, Page } from '@playwright/test';
test.describe.serial('TestCase01', () => {
    
    test('testCase02', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/', { timeout: 120000 });
        await page.waitForLoadState('domcontentloaded', { timeout: 120000 });
        await page.waitForSelector("//a[contains(text(),'Drag & Drop Sliders')]", { timeout: 60000 });
        await page.click("//a[contains(text(),'Drag & Drop Sliders')]");
        await page.waitForLoadState('domcontentloaded', { timeout: 120000 });
        const slider = page.locator('input[type="range"][value="15"]');
        const valueLabel = slider.locator('xpath=following-sibling::output');
        await slider.focus();
        for (let i = 0; i < 80; i++) {
            await slider.press('ArrowRight');
        }
        await expect(valueLabel).toHaveText('95');
    })

})