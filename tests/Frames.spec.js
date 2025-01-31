import{test,expect} from '@playwright/test'
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    //length of the frame
    const frames = await page.frames();
    console.log('No.offrames',frames.length);
    //using name of the frame
    //const frame1=await page.frame('name');
    //using url of the frame
    //const frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //frame2.locator("//input[@name='mytext1']").fill('Hello');
    //using frame locator
    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill('Welcome');
    await page.waitForTimeout(1000);
})