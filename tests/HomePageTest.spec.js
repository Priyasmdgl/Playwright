const {test, expect} = require('@playwright/test'); //installing the required modules

test('Homepage', async({page})=>{

   await page.goto('https://demoblaze.com/');

   const title = await page.title(); //test
   console.log('page title is:',title);

   await expect(page).toHaveTitle('STORE'); //validation

   await page.close();
})