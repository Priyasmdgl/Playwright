import{test,expect} from '@playwright/test'
//only
test.only('test1',async({page})=>{
    console.log('Test1');
})
test('test2',async({page})=>{
    console.log('Test2');
})
//skip
test.skip('test3',async({page})=>{
    console.log('Test3');
})
//fixme
test('test4',async({page})=>{
    test.fixme();
    console.log('Test4');
})
//fail
test('test5',async({page})=>{
    test.fail(); //if both exp and actual fails then only the test will get passed
    console.log('Test5');
    expect(1).toBe(2);
})
//skip based on condition
test('test6',async({page,browserName})=>{
    console.log('Test6');
    if(browserName=='chromium'){
        test.skip();
    }
})
//slow
test('test7',async({page})=>{
    //test.slow();
    test.setTimeout(6000);
    await page.goto('https://testautomationpractice.blogspot.com/');
})