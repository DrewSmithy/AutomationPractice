var yoodlize = (object, data) => {
    object
        .click(data.seeAll)
        .waitForElementVisible('@categoryVerifier')
        .pause(500)
        .verify.containsText('@categoryVerifier', data.category)
        .click('@reloadHome')
}
var yood = {}
module.exports = {
    beforeEach: browser => {
        yood = browser.page.yoodlizePage()
        yood
            .navigate()
    },
    after: browser => {
        yood
            .end()
    },
    'See All Tests': browser => {
        yoodlize(yood, {
            seeAll: '@see1',
            category: 'Recreational Vehicles'
        })
        yoodlize(yood, {
            seeAll: '@see2',
            category: 'Outdoor Gear'
        })
    }
}