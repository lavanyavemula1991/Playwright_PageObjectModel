import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import xlsx from 'xlsx';


test('Testcase for read the testdata from Excel', async ({ page }) => {

    const Login = new LoginPage(page)

    const workbook = xlsx.readFile('./testdata/LoginTestData.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const testData = xlsx.utils.sheet_to_json(sheet);

    console.log(testData);

    for (const row of testData) {
        await Login.gotoLoginPage();
        await Login.login(row.Username, row.Password);
        await console.log(row.Expected)
        if (row.Expected === 'success') {
            await Login.verifyLoginSuccess();
        } else {
            await Login.verifyLoginFailure();
        }
    }

});

test('write testdata into Excel', async ({ page }) => {

    const workbook = xlsx.readFile('./testdata/LoginTestData.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const testData = xlsx.utils.sheet_to_json(sheet);

    XLSX.utils.sheet_add_json(
        worksheet,
        [{ Name: 'David', Age: 40, City: 'Chicago' }],
        { origin: -1, skipHeader: true }
    );

    XLSX.writeFile(workbook, 'Employees.xlsx');

});