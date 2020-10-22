var google = {}
module.exports = {
    before: browser => {
        google = browser.page.googlePage()
        google
            .navigate()
    },
    after: browser => {
        google
            .end()
    },
    'Google Search': browser => {
        var mySearch = 'Apple Pie'
        google
            .setValue('@searchBar', [mySearch, browser.Keys.ENTER])
            .waitForElementPresent('@results')
            .verify.containsText('@results', mySearch)
    }
}