exports.LoginPage=class LoginPage{
    //constructor which contains all the locators
    constructor(page){
        this.page=page;
        this.loginlink='id=login2';
        this.username='id=loginusername';
        this.password='id=loginpassword';
        this.login="//button[text()='Log in']";
    }
    //method to open a page
    async loginpage(){
        await this.page.goto('https://demoblaze.com/');
    }
    //method to perform actions using the above locators
    async signin(name,pwd){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.username).fill(name);
        await this.page.locator(this.password).fill(pwd);
        await this.page.locator(this.login).click();
    }
}