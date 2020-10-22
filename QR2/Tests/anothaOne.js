var searches = [
    {
        search: "Kittens",
        result: "Kittens"
    },
    {
        search: "Doggo",
        result: "Doggo"
    }
]

var loopFunction = function (browser, searches) {
    browser
        .setValue('input[name="q"]', [searches.search, browser.Keys.ENTER])
    browser
        .verify.containsText('#res', searches.result)
        .back()
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

    'Your test here': browser => {
        searches.forEach(bacon => {
            loopFunction(browser, bacon)
        })

    }
}