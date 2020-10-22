var seeAllYood = (object, number, category) => {
    object
        .useXpath()
        .click(`(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${number}]`)
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', category)
        .back()
}
var seeAllAgain = (object, data) => {
    object
        .useXpath()
        .click(`(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[${data.number}]`)
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', data.category)
        .back()
}
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://alpha.yoodlize.com/')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'My Test Here': browser => {
        seeAllAgain(browser, {number: '1', category: 'Recreational Vehicles'})
    }
}