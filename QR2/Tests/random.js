var testLink = function (browser, index) {
    browser
        .url('https://www.apple.com/sitemap/')
        .waitForElementVisible('html', 30000)
        .getAttribute('xpath', `(//a[@property="schema:sameAs"])[${index}]`, 'href', function (result) {
            console.log(result.value)
            href = result.value
            browser
                .click('xpath', `(//a[@property="schema:sameAs"])[${index}]`)
                .verify.urlContains(href)
        })
}
var href
module.exports = {
    before: browser => {

    },
    after: browser => {
        browser.end()
    },

    'Random Test': browser => {
        browser.useXpath()
        for (let i = 1; i < 354; i++) {
            console.log(i)
            testLink(browser, i)
        }
    }
}