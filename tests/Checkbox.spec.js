import {test,expect} from '@playwright/test'
test('checkboxtest', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('id=sunday').check();
    await expect(await page.locator('id=sunday')).toBeChecked();
    await expect(await page.locator('id=sunday').isChecked()).toBeTruthy();
    await expect(await page.locator('id=friday').isChecked()).toBeFalsy();

})