export async function laodHomePage(page) {
    await page.goto('https://staging-login.newrelic.com/')
    
}

export async function assertTitle(page) {
    await page.waitForSelector('title');
    
}
export async function loginToNR(page){
    await page.goto('https://staging-login.newrelic.com/')
    await page.type('#login_email','gibrahimova+e2e1@newrelic.com')
    await page.keyboard.press('Enter')
    await page.type('#login_password', 'staging1st')
    await page.keyboard.press('Enter')

}