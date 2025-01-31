import{test,expect} from '@playwright/test'
let page;

test.beforeEach(async({browser})=>{
 page=await browser.newPage();
 await page.goto('https://demoblaze.com/');
 //login
 await page.locator('id=login2').click();
 await page.locator('id=loginusername').fill('pavanol');
 await page.locator('id=loginpassword').fill('test@123');
 await page.locator("//button[text()='Log in']").click();
})

test.afterEach(async()=>{
    //logout
    await page.locator('id=logout2').click();
})

test('hooks',async()=>{
   //homepage validation
    await page.waitForSelector("//div[@id='tbodyid']//div//h4");
    const products=await page.$$("//div[@id='tbodyid']//div//h4");
    await expect(products).toHaveLength(9);
})

test('cart',async()=>{
   //cartpage validation
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();
    page.on('dialog',async dialog=>{
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })
})