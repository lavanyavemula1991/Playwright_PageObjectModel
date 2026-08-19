import { test as baseTest } from "@playwright/test";

type MyFixtures = {
    fixture1:any;
}

export const test = baseTest.extend<MyFixtures  >({

    fixture1 : async({}, use)=>{
        const fixture1 = "Fixture1 calling --->>>";
        console.log("Before part of Fixture 1");
        await use(fixture1);
        console.log("After`  part of Fixture 1");
    }
})