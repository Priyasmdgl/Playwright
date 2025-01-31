import{test,expect} from '@playwright/test'
test('recordvideo',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await page.locator('id=login2').click; 
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click;
    const logout = await page.locator('id=logout2');
    await expect(logout).toBeVisible;
})