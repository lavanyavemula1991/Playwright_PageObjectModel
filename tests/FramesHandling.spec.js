import {test , expect} from '@playwright/test';

test('iFrames Handling testcase',async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/iframe-demo/");
    //Get all Frames 
    const allFrames = await page.frames();
    console.log("Frames ---->"+allFrames.length);
    for (const frame of allFrames) {
    console.log("Frame Name:", frame.name());

    //iframe[@id='iFrame1']
}



})