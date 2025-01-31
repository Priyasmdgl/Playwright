import{test,expect} from '@playwright/test'
test('nestedframe',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    frame3.locator("//input[@name='mytext3']").fill('Nested frame');
    //nested frames
    const iframe=await frame3.childFrames();
    iframe[0].locator("//*[@id='i9']/div[3]/div").check();

    await page.waitForTimeout(1000);
})