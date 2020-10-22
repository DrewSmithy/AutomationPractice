var bezosSucks = {}
module.exports = {
    beforeEach: browser => {
        bezosSucks = browser.page.amazonPage()
        bezosSucks
            .navigate()
    },
    after: browser => {
        bezosSucks
            .end()
    },
    'Amazon Search': browser => {
        var search = 'Lego Star Wars'
        bezosSucks
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', search)
            .click('@searchButton')
            .verify.containsText('@results', 'Lego Star Wars')
    }
}