var myArray = require('../testAssets/googleArray')
var google = {}
module.exports = {
    beforeEach: browser => {
        google = browser.page.googlePage()
        google
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'Search Test': browser => {
        google
            .search(myArray[0])

    }
}