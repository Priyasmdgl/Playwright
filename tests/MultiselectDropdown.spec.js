import {test,expect} from '@playwright/test'
test('Dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('id=colors').selectOption(['Red','Blue','Yellow']);

    const options = await page.locator("//select[@id='colors']//option");
    await expect(options).toHaveCount(7);

    const optionlength = await page.$$("//select[@id='colors']//option");
    console.log("No.ofoptions:", optionlength.length);
    await expect(optionlength.length).toBe(7);

    for(const text of optionlength){
        console.log(await text.textContent());
    }

    const present = await page.locator('id=colors').textContent();
    await expect(present.includes('Red')).toBeTruthy();
    await page.waitForTimeout(1000);
})