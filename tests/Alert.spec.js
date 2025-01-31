import {test,expect} from '@playwright/test'
test('alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        console.log(dialog.type());
        console.log(dialog.message());
        await page.waitForTimeout(2000);
        await dialog.accept();
    })
    await page.locator('id=alertBtn').click();
    await page.waitForTimeout(2000);

    await page.locator('id=confirmBtn').click();
    await page.waitForSelector('id=demo');
    const text=await page.locator('id=demo');
    const msg=await text.textContent();
    console.log(msg);
    await expect(text).toHaveText('You pressed OK!');

})