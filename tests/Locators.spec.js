import {test,expect} from '@playwright/test'
test('Locators', async({page})=>{
    await page.goto('https://demoblaze.com/');
    //click on login button using locator
   // await page.locator('id=login2').click; 
   // or
    await page.click('id=login2');
    //entering text into the field
    await page.locator('id=loginusername').fill('pavanol');
    //await page.fill('id=loginusername','Admin');
    //await page.type('id=loginusername','Admin');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click;
    const logout = await page.locator('id=logout2');
    await expect(logout).toBeVisible;
    await page.close;

})