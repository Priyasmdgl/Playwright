import {test,expect} from '@playwright/test'
import exp from 'constants';
test('locators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   //getByAltText
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    //getByPlaceholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //getByRole
    await page.getByRole('button',{type: 'submit'}).click();
    //getByText
    const name = await page.locator('//*[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();
    //getByLabel
    await page.getByLabel('username').fill('admin');
    //getByTitle
    await expect(await page.getByTitle('Help')).toBeVisible();


})