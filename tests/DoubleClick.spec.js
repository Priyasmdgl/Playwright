import{test,expect} from '@playwright/test'
test('doubleclick',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const button=await page.locator("//button[text()='Copy Text']");
    await button.dblclick();
    const text=await page.locator('id=field2')
    await expect(text).toHaveValue('Hello World!');
    await page.waitForTimeout(1000);
})