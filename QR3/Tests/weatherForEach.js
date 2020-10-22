var myFunction = (browser, data) => {
    browser
        .setValue('.enter-location__input', data.search)
        .click('button')
        .waitForElementVisible('.current-weather__location')
        .expect.element('.current-weather__location').text.equal(data.result)
        // .verify.containsText('.current-weather__location', data.result)
    browser
        .getText('.current-weather__temp', function (result) {
            console.log(result.value)
        })
        .click('button')
}
var myArray = [
    {
        search: '43082',
        result: 'Westerville'
    },
    {
        search: '43210',
        result: 'Columbus'
    }
]
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'Looping Test': browser => {
        myArray.forEach(bacon => {
            myFunction(browser, bacon)
        })
    }
}