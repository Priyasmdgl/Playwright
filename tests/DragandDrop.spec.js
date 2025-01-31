import {test,expect} from '@playwright/test'
test('dragdrop',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const source=await page.locator('id=draggable');
    const destination=await page.locator('id=droppable');
    //method1
    //await source.hover();
    //await page.mouse.down();
    //await destination.hover();
    //await page.mouse.up();
    
    //method2
    await source.dragTo(destination);
    await page.waitForTimeout(1000);
})