const {test, expect, request} = require('@playwright/test');
const payload = {
  name: "Jane Doe",
  email: "jane@example.com",
  role: "admin"
};

test('Successful API Request', async function() {
    const apiContext = await request.newContext();
    const apiResponse = await apiContext.post("https://reqres.in/api/test-suite/collections/users/records", {
        data: payload,
        headers: {
            'x-api-key': 'free_user_3FZP8ILo7rRyImaCzd7YJW874N0'
        }
    });
    const status = await apiResponse.status();
    console.log(status);
    await expect(status).toBe(201);
    const response = await apiResponse.json();
    console.log(response.name, response.email, response.role);
    await expect(response.name).toBe('Jane Doe');
    await expect(response.email).toBe('jane@example.com');
    await expect(response.role).toBe('admin');
});

test('Failure Test Scenario', async function(){
    const apiContext = await request.newContext();
    const apiResponse = await apiContext.post("https://reqres.in/api/login", {
        data: {password: "cityslicka"},
        headers: {
            'x-api-key': 'free_user_3FZP8ILo7rRyImaCzd7YJW874N0'
        }
    });
    const status = await apiResponse.status();
    console.log(status);
    await expect(status).toBe(400);
    const response = await apiResponse.json();
    await expect(response.error).toBe('Missing email or username');
})