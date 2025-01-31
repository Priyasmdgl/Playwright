import{test,expect} from '@playwright/test'
test('page1',async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
})
test('page2',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
})