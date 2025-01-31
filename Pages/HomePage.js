exports.HomePage=class HomePage{
    constructor(page){
        this.page=page;
        this.productlist="//div[@id='tbodyid']//div//div//div//h4//a";
        this.cartbutton="//a[text()='Add to cart']";
        this.cartpage="//a[text()='Cart']";
    }
    async addtocart(productname){
        await this.page.waitForSelector(this.productlist);
        const products=await this.page.$$(this.productlist);
        for(const product of products){
            const text = await product.textContent();
            if(productname==text){
                await product.click();
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            console.log(dialog.message());
            dialog.accept();
        })
        await this.page.waitForSelector(this.cartbutton);
        await this.page.locator(this.cartbutton).click();
    }
    async cart(){
        await this.page.locator(this.cartpage).click();
    }
}
