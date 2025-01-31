import{test,expect,chromium} from '@playwright/test'
test('windows',async()=>{
    //without using window handling
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    const allpages=await context.pages();
    console.log("No.ofpages:",allpages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');

})
test.only('handling windows',async()=>{
    //using window handling
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    const pagepromise=context.waitForEvent('page');
    await page.locator("//a[text()='OrangeHRM, Inc']").click();
    const newpage=await pagepromise;
    await expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM');
    await page.waitForTimeout(2000);
    await newpage.waitForTimeout(2000);
    await browser.close();
})