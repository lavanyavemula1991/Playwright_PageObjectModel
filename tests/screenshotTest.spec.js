import { test, expect } from '@playwright/test';
import { BaseClass } from '../utils/base'


test('Testcase for screenshots', async ({ page }) => {

    const baseClass = new BaseClass(page)

    try {
       
        // await page.goto('https://the-internet.herokuapp.com/login');
        // const title = await page.title();
        // console.log(title);
         //await expect(this.page).toHaveTitle('The Internet');
        await baseClass.gotoLoginPage();      
        await baseClass.verifyLoginPageTitle();
        await baseClass.verifyLoginPageTitleNegative();

    } catch (error) {

        await page.screenshot({
            path: '../screenshots/title.png',
            fullPage: true
        });
        throw error;
    }


});

//Here failure screenshot attached to sceenshot floders
test.afterEach(async ({ page }, testInfo) => {

  if (testInfo.status !== testInfo.expectedStatus) {

    await page.screenshot({
      path: 'screenshots/${testInfo.title}.png',
      fullPage: true
    });
  }
});


//Failed screenshot attached to HTML report
test.afterEach(async ({ page }, testInfo) => {

  if (testInfo.status === 'failed') {

    const screenshot = await page.screenshot();

    await testInfo.attach('Failure Screenshot', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
});