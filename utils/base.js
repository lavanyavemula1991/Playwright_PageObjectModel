import { expect } from '@playwright/test';
exports.BaseClass = class BaseClass {

    constructor(page) {
        this.page = page
         const title = page.title();
         console.log(title);
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async verifyLoginPageTitle() {
        await console.log('verifyLoginPageTitle---->');
        await expect(this.page).toHaveTitle(/The Internet/);
    }

    async verifyLoginPageTitleNegative() {
        await console.log('verifyLoginPageTitleNegative---->');
        //await expect(this.page).not.toHaveTitle(/The Internet/);
        await expect(this.page).not.toHaveTitle(/The/);
    }

    async addElement(){
        await this.page.goto();
        this.page.getByText('Add Element').click();
        this.page.getByText('Delete').click();


    }
}