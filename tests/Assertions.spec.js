import {test,expect} from '@playwright/test'
test ('assertion',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(await page.getByAltText('nopCommerce demo store')).toBeVisible();
    await expect(page.locator('id=small-searchterms')).toBeEnabled();
    await expect.soft(page.locator('id=small-searchterms')).toBeDisabled();
    const checkbox=await page.locator('id=gender-male');
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    await expect(await page.locator('id=Newsletter')).toBeChecked();
    await expect(await page.locator('id=register-button')).toHaveAttribute('type','submit');
    await expect(await page.locator("//div[@class='page-title']/h1")).toHaveText('Register');
    await expect(await page.locator("//div[@class='page-title']/h1")).toContainText('Reg');
    const name = await page.locator('id=FirstName');
    await name.fill('Priya');
    await expect(name).toHaveValue('Priya');
    const date = await page.locator("//select[@name='DateOfBirthDay']/option");
    await expect(date).toHaveCount(32);

})