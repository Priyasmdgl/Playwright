import {test,expect} from '@playwright/test'
test('inputbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(await page.locator('id=name')).toBeVisible();
    await expect(await page.locator('id=name')).toBeEmpty();
    await page.locator('id=name').fill('Priya');
    await page.waitForTimeout(500);

})