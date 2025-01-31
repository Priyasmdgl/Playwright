import {test,expect} from '@playwright/test'
test('mousehover',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    const desktop = await page.locator("//a[text()='Desktops']");
    await desktop.hover();
    const mac = await page.locator("//a[text()='Mac (1)']");
    await mac.hover();
    await page.waitForTimeout(1000);
})