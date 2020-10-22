var weather = {}
var myArray = [
    {search: 'Westerville', result: 'Westerville'}
]
module.exports = {
    beforeEach: browser => {
        weather = browser.page.weathermanPage()
        weather
            .navigate()
    },
    after: browser => {
        weather
            .end()
    },
    'First Test': browser => {
        weather
            .search(myArray[0]) 
    }
}