import { test, expect } from '@playwright/test';

test.only('Playwright First Test', async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //Get the Title 
    console.log(await page.title());

    //Added Assertion
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    //css
    await userName.fill("rahulshetty");//incorrect user name 
    await page.locator("[type='password']").fill("Learning@830$3mK2");

    await signIn.click();
    // wait until this locator shown up page
    console.log(await page.locator("[style*='block']").textContent());// get the error text by using test content

    //added assertions
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill(" ");// clear existing text 
    await userName.fill("rahulshettyacademy");
    await signIn.click();

    //Getting list of elements 
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

test('Testcase', async({ page }) =>
{
await page.goto("https://www.google.com/");
//get the title -assertion
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});
