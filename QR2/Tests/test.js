module.exports = {
    beforeEach: browser => {
        browser.url("http://localhost:3000")
            .waitForElementPresent("#root")
    },
    after: browser => {
        browser.end()
    },
    'Check the home page': browser => {
        browser
            .verify.visible('.bm-burger-button')
            .verify.containsText('h1.titleBar', 'Wanted Queries')
            .verify.containsText('div#welcomeScreen', 'Welcome to "Wanted Queries".')
            .verify.containsText('div#welcomeScreen', 'Enter Wanted')
            .verify.containsText('div#welcomeScreen', 'Modify Wanted')
            .verify.containsText('div#welcomeScreen', 'Cancel Wanted')
            .verify.visible('.required')
            .verify.visible('.error')
    }
}