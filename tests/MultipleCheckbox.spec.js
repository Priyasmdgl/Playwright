import {test,expect} from '@playwright/test'
test('multiplecheckboxtest', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const locators=[
        'id=sunday',
        'id=friday',
        'id=saturday'
    ];
    for(const checkbox of locators){
          await page.locator(checkbox).check();
    }
   await page.waitForTimeout(1000);
   for(const checkbox of locators){
    if(await page.locator(checkbox).isChecked){
        await page.locator(checkbox).uncheck();
    }
   }

})
