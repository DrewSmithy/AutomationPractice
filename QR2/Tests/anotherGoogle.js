module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.google.com/')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'Google Search': browser => {
        browser
            .setValue('input[name="q"]', ['Dr. Dre', browser.Keys.ENTER])
            .pause(5000)
            .url('https://www.google.com/')
            .setValue('input[name="q"]', ['Star Wars The Old Republic', browser.Keys.ENTER])
            .pause(5000)
    }
}