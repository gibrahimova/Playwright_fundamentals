    import { test, expect } from '@playwright/test'
    import { laodHomePage, assertTitle } from '../helper'

    test("Simple basic test", async({page})=>{
        //here goes the test
     await page.goto('https://example.com');

     //create a variable
    const pageTitle = await page.locator('title')
    await expect(pageTitle).toContainText('Example Domain')

    })
    //creating new test
    test('Clicking on elements @fast', async({page})=>{
        await page.goto('https://staging-login.newrelic.com/')
        await page.locator('#login_email').fill('gibrahimova+e2e1@newrelic.com')
        await page.click('#login_submit')
        await page.locator('#login_password').fill('staging1st')
        await page.click('#login_submit')
        const pageTitle = await page.locator('head title')
        await expect(pageTitle).toContainText('Home < New Relic One')

    })
        
    test('Log in with invalid credentials @fast', async({page})=>{
        await page.goto('https://staging-login.newrelic.com/')
        await page.locator('#login_email').fill('gibrahimova+e2e1@newrelic.com')
        await page.click('#login_submit')
        await page.locator('#login_password').fill('staging1s')
        await page.click('#login_submit')
        const errorMsg = await page.locator('.v6-LoginFlashMessage-description')
        await expect(errorMsg).toContainText('Unable to log in. Please ensure that your email and password are correct.')

    })
   //5 most common selectors
    test.skip('Selectors', async({page})=>{
        //text
        await page.click('text = sometext')

        //Css selector
        await page.click('button')
        await page.click('#id')
        await page.click('.class')

        //Only visible Css selector
        await page.click('.submit-button:visible')

        //combinations
        await page.click('#username.first')

        //Xpath
     
        await page.click('//button')
    })
    
test.describe('My first test suite', ()=>{

    test('Working with inputs',async ({page}) => {

        await page.goto('https://staging-login.newrelic.com/')
        await page.type('#login_email','gibrahimova+e2e1@newrelic.com')
        await page.click('#login_submit')
        await page.type('#login_password','staging1')
        await page.click('#login_submit')
        const errorMsg = await page.locator('.v6-LoginFlashMessage-description')
        await expect(errorMsg).toContainText('Unable to log in. Please ensure that your email and password are correct.')
    })

    test('Assertions @login', async ({page})=> {
        await page.goto('https://example.com')

        //assert url
        //for assertions element need to be stored in variable:
        await expect(page).toHaveURL('https://example.com')
        //assert title
        await expect(page).toHaveTitle('Example Domain')

        const element = await page.locator('h1')
        await expect(element).toBeVisible

        await expect(element).toHaveText('Example Domain')

        //assert the count =passing number
        await expect(element).toHaveCount(1)

        //we can assert when element non-exist
        const nonExistingElement = await page.locator('h5')
        await expect(nonExistingElement).not.toBeVisible


    })
test.describe.parallel.only('Before&After Hooks',() => {
    
    test.beforeEach(async ({page}) =>{
     await page.goto('https://staging-login.newrelic.com/')
        
})
    test('Full page Screenshots', async ({page})=>{
        
        //1. step is load website -> took and place it in BeforeEach Hook
       // await page.goto('https://staging-login.newrelic.com/')
        //2. take a screenshot of full page
        await page.screenshot({path: 'screenshot.png', fullPage: true})

    })
    test('Single element Screenshots', async ({page})=>{
        //1. step is load website
        //await page.goto('https://staging-login.newrelic.com/')

        const element = await page.locator('#login_submit')
        //2. take a screenshot of full page
        await element.screenshot({path:'single_element_screenshot.png'})
    })

    test.afterEach(async ({page}) =>{
        await page.close()
           
   })

    })

    //Using custom helpers
    test.only('Custom helpers', async({page})=>{

        await laodHomePage(page)
        //await page.pause()
        await assertTitle(page)
    })


})

    

