var google = {}
module.exports = {
    beforeEach: browser => {
        google = browser.page.googlePage()
        google
            .navigate()
    },
    after: browser => {
        google
            .end()
    },
    'The name of my test.': browser => {
        google
            .setValue('@searchBar', ['Kittens', browser.Keys.ENTER])
            .verify.containsText('@results', 'Kittens')
    },
    'Second Search': browser => {
        google.setValue('@searchBar', ['@theedoodette', browser.Keys.ENTER])
            .verify.containsText('@results', '@theedoodette')
    }
}