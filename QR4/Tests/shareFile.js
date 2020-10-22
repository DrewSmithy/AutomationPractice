var newSearch = require('../testAssets/myAsset')
var weather ={}
module.exports = {
    beforeEach: browser => {
        weather = browser.page.weatherPage()
        weather
            .navigate()
    },
    after: browser => {
        weather
            .end()
    },
    'My Test': browser => {
        newSearch(weather, '43082', 'Westerville')
    }
}