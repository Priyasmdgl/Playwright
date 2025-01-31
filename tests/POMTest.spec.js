import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage' //import the page class which you have created for POM
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test('ecommerce',async({page})=>{
    //without using POM
    /*await page.goto('https://demoblaze.com/');
    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator("//button[text()='Log in']").click();*/

    //using POM
    //loginpage
    const loginpage=new LoginPage(page); //object creation of LoginPage class
    await loginpage.loginpage(); //calling the loginpage method from LoginPage class
    await loginpage.signin('pavanol','test@123'); //calling the login method from LoginPage class
    await page.waitForTimeout(2000);
    //homepage
    const homepage=new HomePage(page);
    await homepage.addtocart('Iphone 6 32gb');
    await homepage.cart();
    await page.waitForTimeout(3000);
    //cart page
    const cartpage=new CartPage(page);
    await cartpage.products('Iphone 6 32gb');
    await page.waitForTimeout(3000);
})