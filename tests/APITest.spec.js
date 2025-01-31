import{test,expect} from '@playwright/test'

var userid;
//get request
test('Get request',async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    await expect(response.status()).toBe(200);
})
//post request
test('Post request',async({request})=>{
    const response=await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        },
        headers: {
            "Accept": "application/json"
        }
    });
    console.log(await response.json());
    await expect(response.status()).toBe(201);
    var res=await response.json();
    userid=res.id;
    console.log(userid);
})
//put request
test('Put request',async({request})=>{
    const response=await request.put('https://reqres.in/api/users/'+userid,{
        data: {
            "name": "morpheus",
            "job": "zion resident"
        },
        headers:{
            "Accept":"application/json"
        }
    });
    console.log(await response.json());
    await expect(response.status()).toBe(200);
})
//delete request
test('Delete request',async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+userid);
    await expect(response.status()).toBe(204);
})