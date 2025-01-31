import{test,expect} from '@playwright/test'

test.skip('visible page',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'homepage.png'});
})

test.skip('full page',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'fullpage.png',fullPage:true});
})

test('element snap',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.locator("//*[@id='content']/div[2]/div[1]/div").screenshot({path:'tests/Screenshots/'+Date.now()+'element.png'});
})