import{test,expect} from '@playwright/test'
test('homepage',async({page})=>{
    await page.goto('https://demoblaze.com/');
    //login
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator("//button[text()='Log in']").click();
    //homepage validation
    await page.waitForSelector("//div[@id='tbodyid']//div//h4");
    const products=await page.$$("//div[@id='tbodyid']//div//h4");
    await expect(products).toHaveLength(9);
    //logout
    await page.locator('id=logout2').click();
})

test('cartpage',async({page})=>{
    await page.goto('https://demoblaze.com/');
    //login
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator("//button[text()='Log in']").click();
    //cartpage
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();
    page.on('dialog', async dialog=>{
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })
    //logout
    await page.locator('id=logout2').click();

})