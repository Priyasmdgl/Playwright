import{test,expect} from '@playwright/test'
test('pagination',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('id=productTable');
    //no.of columns
    const columns = await table.locator("//thead//tr//th");
    console.log("No.of columns:", await columns.count());
    //no.of rows
    const rows = await table.locator("//tbody//tr");
    console.log("No.of rows:" , await rows.count());
    //pagination
    //no.of pages present
    const pages=await page.locator("//ul[@id='pagination']//li//a");
    console.log("No.of Pages:", await pages.count());
    const pagess= await page.$$("//ul[@id='pagination']//li//a");
    for(const page of pagess){
        if(page<pages.count()){
            await page.click();
        }
        //print all rows in all the pages
    for(let i=0;i<await rows.count();i++){
        const row = rows.nth(i);
        const tds=row.locator("//td");
        for(let j=0;j<await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent())
        }
    }
    }
    //select the checkbox in any row
    /*const match=rows.filter({
        has: page.locator("//td"),
        hasText: 'Tablet'
    })
    const matched = await match.textContent();
    console.log(matched);
    await match.locator("//input").check();*/
    await product(rows,page,'Smartphone');
    await product(rows,page,'Laptop');
    await product(rows,page,'Tablet');
   await page.waitForTimeout(2000);
})

async function product(rows,page,name)
{
    const match=rows.filter({
        has: page.locator("//td"),
        hasText: name
    })
    await match.locator("//input").check();
}