import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage' //import the page class which you have created for POM
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test('ecommerce',async({page})=>{
    //loginpage
    //without using POM
    /*await page.goto('https://demoblaze.com/');
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator("//button[text()='Log in']").click();*/
    //using POM
    const loginpage=new LoginPage(page); //object creation of LoginPage class
    await loginpage.loginpage(); //calling the loginpage method from LoginPage class
    await loginpage.signin('pavanol','test@123'); //calling the login method from LoginPage class
    await page.waitForTimeout(2000);

    //homepage
    //without using POM
   /* const products=await page.$$("//div[@id='tbodyid']//div//div//div//h4//a");
    for(const product of products){
        const text=await product.textContent();
        if('Iphone 6 32gb'==text){
            await product.click();
            break;
        }
    }
    page.on('dialog',async dialog=>{
        console.log(await dialog.message());
        dialog.accept();
    })
    await page.locator("//a[text()='Add to cart']").click();*/
    //using POM
    const homepage=new HomePage(page);
    await homepage.addtocart('Iphone 6 32gb');
    await homepage.cart();
    await page.waitForTimeout(3000);

    //cart page
    //without using POM
    /*const cartproduct=await page.$$("//tbody[@id='tbodyid']//tr//td");
    for(const product of cartproduct){
        const text=await product.textContent();
        if('Iphone 6 32gb'==text){
            console.log("Present");
        }
    }*/
    //using POM
    const cartpage=new CartPage(page);
    await cartpage.products('Iphone 6 32gb');
    await page.waitForTimeout(3000);
})