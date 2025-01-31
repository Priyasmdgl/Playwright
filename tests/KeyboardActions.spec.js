import{test,expect} from '@playwright/test'
test('actions',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    await page.getByPlaceholder('Paste one version of the text here.').fill('Hello World');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    //key release
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(1000);
})