var myPage
module.exports = {
    beforeEach: browser => {
        myPage = browser.page.emPage()
        myPage
            .navigate()
    },
    after: browser => {
        myPage.end()
    },
    'Your test here': browser => {
        myPage
            .api.pause(5000)
        myPage
            .click('@employee2')
    }
}