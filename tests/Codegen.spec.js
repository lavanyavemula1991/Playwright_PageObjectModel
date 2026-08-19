import { test } from '@playwright/test';

test('codegen testcase', async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/');
const title = await page.title();
console.log(title);

await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
await page.getByRole('button', { name: 'Add Element' }).click();
await page.getByRole('button', { name: 'Delete' }).click();

});

