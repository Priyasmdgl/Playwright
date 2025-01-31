import {test,expect} from '@playwright/test'
test('radiobuttontest',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(await page.locator('id=female')).not.toBeChecked();
    
    await page.locator('id=female').check();
    await expect(await page.locator('id=female').isChecked).toBeTruthy();
    await page.waitForTimeout(1000);
})