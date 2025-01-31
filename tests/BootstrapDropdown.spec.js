import {test,expect} from '@playwright/test'
test('bootstrap',async({page})=>{

    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator("//button[@class='multiselect dropdown-toggle btn btn-default']").click();
    const options = await page.locator("//ul[@class='multiselect-container dropdown-menu']//li//a//label//input");
    await expect(options).toHaveCount(11);

    const option = await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label");
    for(const text of option){
        console.log(await text.textContent());
     }

     const b= await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label");
     for(const text of b){
         const selection = await text.textContent();
         if(selection.includes('HTML')||selection.includes('CSS')){
            await text.click();
            break;
         }
      }

     const a= await page.$$("//ul[@class='multiselect-container dropdown-menu']//li//a//label");
     for(const text of a){
         const selection = await text.textContent();
         if(selection.includes('Python')||selection.includes('Java')){
            await text.click();
            break;
         }
      }

    await page.waitForTimeout(1000);
})