var myMethods = {
    searchWeather: function (object, data) {
        object
            .setValue('@searchBar', data.search)
            .click('@searchButton', function () {
                object
                    .waitForElementVisible('@results')
                    .verify.containsText('@results', data.result)
                    .pause(5000)
                    .getText('@results', function (result) {
                        console.log(result.value)
                    })
                    .click('@searchAgain')
            })
    }
}
var myData = [
    { search: '84061', result: 'Provo' },
    { search: 'San Francisco', result: 'San Francisco' },
    { search: 'London', result: 'London' }
]
var weather = {}
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
    'Weather Search': browser => {
        myMethods.searchWeather(weather, myData[1])
    }
}