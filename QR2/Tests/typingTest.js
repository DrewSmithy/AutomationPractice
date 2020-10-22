let typo = {}
module.exports = {
    beforeEach: browser => {
        typo = browser.page.typingPage()
        typo.navigate()
    },
    after: browser => {
        browser
            .end()
    },
    'My Typing Test': browser => {
        typo
            .click('@zebra')
            .click('@start')
            .waitForElementVisible('.test-text-area-font')
            .getText('.test-text-area-font', result => {
                console.log(result.value)
                let typerino = result.value.replace(/[↩]/gi, '\n')
                typo
                    .setValue('.test-edit-area-font', typerino)
            })
            .getText('.test-speed-display', function (result) {
                console.log(result.value + ' wpm')
            })
    }
}