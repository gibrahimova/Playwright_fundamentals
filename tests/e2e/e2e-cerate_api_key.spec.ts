import test, { expect } from "@playwright/test"

test.describe('Ceate api key test flow', () => {
    test('Create Api key',async ({page}) => {
        await page.goto('https://staging-login.newrelic.com/')
        const LoginPageTitle = await page.locator('head title')
        await expect(LoginPageTitle).toContainText('Log in to New Relic')
        await page.locator('#login_email').fill('gibrahimova+e2e1@newrelic.com')
        await page.keyboard.press('Enter')
        await page.locator('#login_password').fill('staging1st')
        await page.click('#login_submit')
        //go to User icon and click on Api keys
        await page.click('button:has-text(\"Chevron bottom icon\")')
        await page.click('a:has-text(\"API keys\")')
        await page.click('button:has-text(\"Create a key\")')
        await page.locator('button:has-text(\"Create a key\")').nth(1).click()


        
    })
    
})