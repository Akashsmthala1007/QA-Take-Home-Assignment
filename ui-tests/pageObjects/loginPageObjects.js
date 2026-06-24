const {expect} = require('@playwright/test');
class LoginObjects{

    constructor(page) {
        this.page = page;
        this.emailAddressField = "input#email";
        this.passwordField = "input#password";
        this.logInButton = "[type='submit']";
        this.podsText = "h1:has-text('Pods')";
        this.incorrectToastMessage = "//div[text()='Invalid username or password!']";
    }

    async launchBrowser(url) {
        await this.page.goto(url);
    }

    async login(emailaddress, password, title_name) {
        await this.page.locator(this.emailAddressField).fill(emailaddress);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.logInButton).click();
        await expect(this.page).toHaveTitle(title_name);
    }

    async homePage() {
        await this.page.locator(this.podsText).waitFor();
    }

    async incorrectLogin(emailaddress,password, incorrect_ToastMessage) {
        await this.page.locator(this.emailAddressField).fill(emailaddress);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.logInButton).click();
        await this.page.locator(this.incorrectToastMessage).waitFor();
        await expect(this.page.locator(this.incorrectToastMessage)).toHaveText(incorrect_ToastMessage)
    }
}

module.exports = LoginObjects;