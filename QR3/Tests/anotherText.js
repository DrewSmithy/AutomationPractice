var myFunction = (myNumber) => {
    console.log(myNumber + 5)
    console.log(myNumber + 10)
    console.log('LOTR is better than Star Wars dont @ me')
}

/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} browser - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.google.com/')
    },
    after: browser => {
        browser
            .end()
    },
    'My Test': browser => {
        myFunction(1337)
    }
}