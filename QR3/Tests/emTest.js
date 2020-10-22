/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} bacon - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */
var clickByText = (bacon, text) => {
    bacon
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('body')
    },
    after: browser => {
        browser
            .end()
    },
    'My Test': browser => {
        clickByText(browser, 'Eve Sparks')
        browser
            .pause(5000)
    }
}


var fillOutForm = (browser, formInfo) => {
    browser
        .clearValue('#firstName')
        .setValue('#firstName', formInfo.firstName)
        .clearValue('#lastName')
        .setValue('#lastName', formInfo.lastName)
        .clearValue('#zip')
        .setValue('#zip', formInfo.zip)
}

fillOutForm(browser, {
    firstName: 'Dre',
    lastName: 'Smith',
    zip: '43210'
})

fillOutForm(browser, {firstName: 'Dre', lastName: 'Smith', zip: '43210'})


var myObject = {
    firstName: 'Dre',
    lastName: 'Smith',
    zip: '43210'
}
fillOutForm(browser, myObject)



var fillOutAgain = (browser, firstName, lastName, zip) => {
    browser
        .clearValue('#firstName')
        .setValue('#firstName', firstName)
        .clearValue('#lastName')
        .setValue('#lastName', lastName)
        .clearValue('#zip')
        .setValue('#zip', zip)
}

fillOutAgain(browser, 'Dre', 'Smith', '43210')