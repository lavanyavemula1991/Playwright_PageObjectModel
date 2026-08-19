import { expect } from '@playwright/test';
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
    }

    //Login page locators 
    locators = {
        username_textbox: () => this.page.getByRole('textbox', { name: 'Username' }),
        password_textbox: () => this.page.getByLabel('Password'),
        login_button: () => this.page.getByRole('button', { name: 'Login' })
    };

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.locators.username_textbox().fill(username)
        await this.locators.password_textbox().fill(password)
        await this.locators.login_button().click();
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/secure/);
        await expect(this.page.locator('#flash')).toContainText('You logged into a secure area!');
    }

    async verifyLoginFailure() {
        await expect(this.page).toHaveURL(/login/);
        await expect(this.page.locator('#flash')).toContainText('Your password is invalid!');
    }

}