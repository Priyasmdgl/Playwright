import {test,expect} from '@playwright/test'

test('Multipleelements', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    const links = await page.$$('a');
    for(const link of links){
        const text = await link.textContent();
        console.log(text);
    }

    page.waitForSelector("//div[@id='tbodyid']//div//h4//a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4//a");
    for(const name of products){
        const productname = await name.textContent();
        console.log(productname);
    }
})