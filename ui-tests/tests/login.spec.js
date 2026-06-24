const {test,expect} = require('@playwright/test');
const LoginObjects = require('../pageObjects/loginPageObjects');

test('The user should be able to login into the Pikapods application successfully when using the correct email address and correct password', async function({page}){
    const loginClass = new LoginObjects(page);
    await loginClass.launchBrowser("https://www.pikapods.com/login");
    await loginClass.login("akashsm1008@gmail.com", "brindavanexpress", "PikaPods - Pods");
    await loginClass.homePage();
    await expect(page.locator(loginClass.podsText)).toHaveText('Pods');
});

test('The user should not be able to login into the Pikapods application when using correct username and wrong password', async function({page}) {
    const loginClass = new LoginObjects(page);
    await loginClass.launchBrowser("https://www.pikapods.com/login");
    await loginClass.incorrectLogin("akashsm1008@gmail.com", "xxxxxxxxxxxxxx", "Invalid username or password!");
});