import test, { expect } from "@playwright/test";

test.describe('Login - Logout flow' , () =>{

    //Before Hook
    test.beforeEach(async ({page}) => {
        await page.goto('https://staging-login.newrelic.com/')
    })

    // Negative Scenario
    test('Negative scenario for login',async ({page}) => {
        await page.type('#login_email','invalid username')
        await page.click('text=Next')
        await page.type('#login_password','staging1st')
        await page.click('#login_submit')
        const errorMsg = page.locator('.v6-LoginFlashMessage-description')
        await expect(errorMsg).toContainText('Unable to log in. Please ensure that your email and password are correct.')
    })

    //2. Positive scenario
    test('Positive scenario for login + logout',async ({page}) => {
        await page.locator('#login_email').fill('gibrahimova+e2e1@newrelic.com')
        await page.click('#login_submit')
        await page.locator('#login_password').fill('staging1st')
        await page.click('#login_submit')
        const pageTitle = await page.locator('head title')
        await expect(pageTitle).toContainText('Home < New Relic One')
        //logout trick
        await page.goto('https://staging-login.newrelic.com/logout.html')
        //assert if we logged out successfully:
        await expect(page).toHaveTitle('Log in to New Relic')
    })
    //After Hook
})
