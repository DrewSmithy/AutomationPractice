var weatherCommands = {
    search: function (search, result) {
        this
            .setValue('@searchBar', search)
            .click('@searchButton')
            .waitForElementPresent('@results')
            .expect.element('@results').text.contain(result)
        return this
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weatherCommands],
    elements: {
        searchBar: '.enter-location__input',
        searchButton: 'button',
        results: {
            selector: '//*[@class="current-weather__location"]',
            locateStrategy: 'xpath'
        }
    }
}