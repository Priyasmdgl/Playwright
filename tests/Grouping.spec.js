import{test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('Before all hook');
})
test.afterAll(async()=>{
    console.log('After all hook');
})
test.beforeEach(async()=>{
    console.log('Before each hook');
})
test.afterEach(async()=>{
    console.log('After each hook');
})

test.describe('Group1',()=>{
    test('test1',async()=>{
        console.log('First test');
    })
    test('test2',async()=>{
        console.log('Second test');
    })
})

test.describe('Group2',()=>{
    test('test3',async()=>{
        console.log('Third test');
    })
    test('test4',async()=>{
        console.log('Fourth test');
    })
    test('test5',async()=>{
        console.log('Fifth test');
    })
})

