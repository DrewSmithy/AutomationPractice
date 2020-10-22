var myAssets = require('../testAssets/blueAssets')
var mealCards = function (object, data) {
    console.log(data.dollars)
    if (data.amount === '@customAmount') {
        object
            .setValue('@customAmount', data.dollars)
    }
    else {
        object
        .click(data.amount)
    }
    if (data.delivery === '@email') {
        object 
            .setValue('Name')
            .setValue('@Recipient', data.recipient)
    }
    else {
        object
        .click(data.delivery)
    }
    object
        .click('@addCart')
        .useXpath()
        .verify.containsText(`//p[contains(text(), "${data.dollars}")]`, data.dollars)
        .useCss()
}
var blue = {}
module.exports = {
    beforeEach: browser => {
        blue = browser.page.blueObject()
        blue
            .navigate()
    },
    after: browser => {
        blue
            .end()
    },
    'Gift card test': browser => {
        myAssets.forEach(meal => {
            mealCards(blue, meal)
        })
    }
}