import {test,expect} from '@playwright/test'
test('prompt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message());
        console.log(dialog.defaultValue());
        await dialog.accept('Priya');
    })
   
    await page.locator('id=promptBtn').click();
    await page.waitForSelector('id=demo');
    const text=await page.locator('id=demo');
    const msg=await text.textContent();
    console.log(msg);
    await page.waitForTimeout(2000);
})