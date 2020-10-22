module.exports = {
    beforeEach: browser => {
        browser.url("http://localhost:3000")
            .waitForElementPresent("#root")
    },
    after: browser=> {
        browser.end()
    },
    'Check the home page': browser => {
        browser
            .verify.visible('.bm-burger-button', (result) => {
                console.log(result)
                if (result === true) {
                    // Code to do if it's true
                }
                else {
                    // Code to do if it's false
                }
            })
            .pause()
            .verify.containsText('.titleBar', 'Wanted Queries')
            .verify.containsText('#welcomeScreen', 'Welcome to "Wanted Queries".')
            .verify.containsText('#welcomeScreen', 'Enter Wanted')
            .verify.containsText('#welcomeScreen', 'Modify Wanted')
            .verify.containsText('#welcomeScreen', 'Cancel Wanted')
            .verify.visible('.required')
            .verify.visible('.error')
    }
}