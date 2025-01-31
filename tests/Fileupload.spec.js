import{test,expect} from '@playwright/test'
test('upload',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //single file upload
    await page.locator('id=singleFileInput').setInputFiles('tests/Fileupload/File1.pdf');
    //remove uploaded files
    await page.locator('id=singleFileInput').setInputFiles([]);
    //multiple file upload
    await page.locator('id=multipleFilesInput').setInputFiles(['tests/Fileupload/File1.pdf','tests/Fileupload/File2.pdf']);
    await page.waitForTimeout(1000);
})