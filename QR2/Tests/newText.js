var home = {}
var kateSpadeAssets = require('../pageAssets/kateSpadeAssets')
module.exports = {
    beforeEach: browser => {
        home = browser.page.kateSpadeObjects()
        home
            .navigate()

    },
    afterEach: browser => {
        home
            .end()
    },

    'header menu test': browser => {
        home
            .api.resizeWindow(1920, 1080)
        home
            .pause(5000)
            .waitForElementVisible('@popupX')
            .click('@popupX')
            .waitForElementVisible('@new')
            .click('@new')
            .pause(2000)
            // .click('@handbags')
            // .click('@wallets')
            // .click('@clothing')
            // .click('@shoes')
            // .click('@jewelry')
            // .click('@accessories')
            // .click('@personalization')
            // .click('@homeItems')
            // .click('@gifts')
            // .click('@sale')

    },

    // 'store locator test': browser => {
    //     home
    //         .click('a[class="stores-links"]')
    //         .pause(3000)
    //         .click('g[class="bx-close-xstroke bx-close-x-adaptive"]')
    //         .setValue('@search', kateSpadeAssets[0])
    //         .pause(3000)
    //         .click('@searchButton')
    //         .verify.valueContains('@search', kateSpadeAssets[0])
    //         .clearValue('@search')
    //         .pause(3000)
    //         .setValue('@search', kateSpadeAssets[1])
    //         .pause(3000)
    //         .click('@searchButton')
    //         .pause(3000)
    //         .verify.containsText('@location', kateSpadeAssets[1])
    //         .pause(5000)
    //         .clearValue('@search')
    //         .pause(3000)
    //         .setValue('@search', kateSpadeAssets[2])
    //         .pause(3000)
    //         .click('@searchButton')
    //         .pause(3000)
    //         .verify.containsText('@location', kateSpadeAssets[2])


    // },

    // 'header menu test': browser => {
    //     home
    //         .click('img=[alt="new handbags"]')

    // }


}