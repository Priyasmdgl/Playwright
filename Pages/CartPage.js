exports.CartPage=class CartPage{
    constructor(page){
        this.page=page;
        this.product="//tbody[@id='tbodyid']//tr//td";
    }
    async products(productname){
        await this.page.waitForSelector(this.product);
        const productlist=await this.page.$$(this.product);
        for(const prod of productlist){
            const text = await prod.textContent();
            if(productname==text){
                console.log("Present")
                break;
            }
        }
    }
}