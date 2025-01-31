import {test,expect} from '@playwright/test'
test('dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('id=country').selectOption({label:'India'}); //by label visible text
    await page.locator('id=country').selectOption('India'); //by visible text
    //await page.locator('id=country').selectOption({value:'india'}); //by value
    //await page.locator('id=country').selectOption({index:1}); //by index
    //await page.selectOption('id=country','index:1');
    
    //Assertions
    //to find the no.of options present
    const options=await page.locator("//select[@id='country']//option");
    await expect(options).toHaveCount(10);
  
    const length=await page.$$("//select[@id='country']//option");
    console.log("number of options:",length.length);
    await expect(length.length).toBe(10);

    // to find the options and contains specific option
    const present = await page.locator("//select[@id='country']").textContent();
    await expect(present.includes('India')).toBeTruthy();

    for(const text of length){
        const country = await text.textContent();
        console.log(country);
    }
    await page.waitForTimeout(1000);
})