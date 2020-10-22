var yoodl = {}
module.exports = {
    beforeEach: browser => {
        yoodl = browser.page.yoodlizeObjects()
        yoodl
            .navigate()
    },
    after: browser => {
        browser
            .end()

    },
    'See All Test': browser => {
        yoodl
        .pause(10000)
        

    },

}