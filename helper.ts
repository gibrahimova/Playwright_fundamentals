export async function laodHomePage(page) {
    await page.goto('https://staging-login.newrelic.com/')
    
}

export async function assertTitle(page) {
    await page.waitForSelector('title');
    
}