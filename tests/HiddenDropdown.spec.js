import {test,expect} from '@playwright/test'
test('hidden',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await page.waitForSelector("//span[normalize-space()='PIM']");
    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i").click();
    await page.waitForSelector("//div[@role='listbox']//span");
    const options = await page.$$("//div[@role='listbox']//span");
    for(const option of options){
        const text = await option.textContent();
        console.log(text);
        if(text.includes('Chief Executive Officer')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
})