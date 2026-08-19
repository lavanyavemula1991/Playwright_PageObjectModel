import { test, expect, chromium } from '@playwright/test';


test('Testcase rahulshettyacademy Playwright class', async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();//use last()
    const firstText = await page.locator(".card-body b").first().textContent();
    const secondText = await page.locator(".card-body b").nth(1).textContent();
    console.log(firstText);
    console.log(secondText);
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
 
});
test('Testcase for UI controls using playwright',async({page})=>{
    
    const documnetsLink = page.locator("[href*=documents-request]");
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("anshika@gmail.com");
    await page.locator("#password").fill("Iamking@000");
    //dropdowns     
    const dropdown =  page.locator("select.form-control");
    await dropdown.selectOption("stud");

    //await page.locator(".radiotextsty").last().click();
    await page.locator("[value='user']").click();    
    await page.locator("#okayBtn").click();
    await expect(page.locator("[value='user']")).toBeChecked();
    //or const checked = await page.locator("[value='user']").isChecked();
   
    await page.locator("#terms").click();// check box checked 
    await expect(page.locator("#terms")).toBeChecked();//Assertion
    await page.locator("#terms").uncheck();//unchecking the checkbox
    expect(await page.locator("#terms").isChecked()).toBeFalsy();// Assersion
    await expect(documnetsLink).toHaveAttribute("class","blinkingText");
    //when we click on above step it opens new tab so we cannot handle on same page then we can create new test for child windows 

    //await page.pause();
    //await page.locator("[value='Login']").click();
});

test('Child tabs/windows handle',async({browser})=>{

    const context = await browser.newContext();//original page 
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documnetsLink = page.locator("[href*='documents-request']");
    const documnetsLink2 = page.getByLabel("Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire");
        
   //Promise all can write in array format
    const [newPage] =  await Promise.all([
    context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled 
    documnetsLink.click(),// open new page
   ]); 

   const text = await newPage.locator(".red").textContent();
   console.log(text);

   //Sprting spilt here
   const strArr = text.split("@");
   const domain = strArr[1].split(" ")[0];
   console.log(domain);

    await page.locator("#username").fill(domain);
    console.log(page.locator("#username").textContent());
    //console.log(page.locator("#username").inputValue());
    
   
    //await documnetsLink2.click()
   // const text2 = await newPage2.locator(".gradient-text").textContent();
    //console.log(text2);


    await page.pause();

});


test.only('Click two links and capture both new tabs', async ({ context, page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Start waiting for both popup events before clicking
  const [newPage1, newPage2] = await Promise.all([
    context.waitForEvent('page'), // Wait for the first new tab
    page.getByLabel("Free Access to InterviewQues/ResumeAssistance/Material").click(),


    context.waitForEvent('page'), // Wait for the second new tab
    page.getByLabel("Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire").click()
  ]);

  // Now you can interact with both windows
  console.log(await newPage1.title());
  console.log(await newPage2.title());
});




test('Testcases for javascript basics',async({page})=>{

const str ="Hello world";
const i = 10;
const f = 13.05;
const isReady = true;
const nothing = null;
const userObj ={name: "lavanya", age:34};

console.log(userObj);

const colurArray = ["red","blue","white"];
for(const c of colurArray){
    console.log(c);
}

//fprEach loop
colurArray.forEach((colour,index)=>{
console.log(index,colour);
});

//Map
//const clist = colurArray.map((f=>f.toUpperCase());
//console.log(clist);

});

test('Testcase for Deseret Books practice',async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.deseretbook.com/?srsltid=AfmBOoo_mQf4_rCO4rkW6Q-8Lv7ZjzkUamR_grHnFO8dQyrvae2JTIwP");
console.log(await page.title());
await expect(page).toHaveTitle("Deseret Book: Books, DVDs, Music, Art & more for LDS Families - Deseret Book");

const cardTitles = page.locator(".nav-item a")
await page.locator(".nav-item a").first().waitFor();
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(await allTitles);

});









