import {test,expect} from '@playwright/test'
test('autosuggest',async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('id=src').fill('Delhi');
    await page.waitForSelector("//ul[@class='sc-dnqmqq dZhbJF']//li//div//text[1]");
    const options = await page.$$("//ul[@class='sc-dnqmqq dZhbJF']//li//div//text[1]");
    for(const option of options){
        const text=await option.textContent();
        console.log(text);
        if(text.includes('Badarpur')){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(1000);
})