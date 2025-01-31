import {test,expect} from '@playwright/test'
test('rightclick',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.waitForSelector('id=rightClickBtn');
    const button = await page.locator('id=rightClickBtn');
    await button.click({button:'right'});
    await page.waitForTimeout(1000);
})