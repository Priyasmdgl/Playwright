import{test,expect} from '@playwright/test'
test('datepicker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //by filling 
    //await page.locator('id=datepicker').fill('01/27/2025');

    //by selecting the fields for month and year
    await page.locator('id=datepicker').click();
    while(true){
        const year = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        const month = await page.locator("//span[@class='ui-datepicker-month']").textContent();
        if(year=='2023' && month=='January'){
            break;
        }
        //await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click(); //next button
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click(); //previous button
    }
    //date selection
   /* const date=await page.$$("//a[@class='ui-state-default']");
    for(const dates of date){
        const text= await dates.textContent();
        if(text=='25'){
            await dates.click();
            break;
        }
    }*/
    //direct date selection
    await page.locator("//a[@class='ui-state-default'][text()=15]").click();
    await page.waitForTimeout(5000);
})