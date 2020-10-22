var weather ={}
module.exports = {
    beforeEach: browser => {
        weather = browser.page.weatherPage()
        weather
            .navigate()
    },
    after: browser => {
        weather
            .end()
    },
    'My Test': browser => {
        weather
            .search('43082', 'Westerville')
    }
}