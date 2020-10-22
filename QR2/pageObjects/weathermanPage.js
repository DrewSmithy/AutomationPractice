var weatherCommands = {
    search: function async (data)  {
        var self = this
        this
            .setValue('@searchBar', [data.search, this.api.Keys.ENTER])
            .waitForElementVisible('@resultCity')
        // const myResult = (await .getText('@resultCity')).value
        console.log(myResult)
        if (myResult === data.search) {
            console.log('You searched by a city.')
        }
        else {
            console.log('You searched by a zip code.')
        }
        this
            .expect.element('@resultCity').text.equal(data.result)
        this
            .navigate()
        return this
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weatherCommands],
    elements: {
        searchBar: '.enter-location__input',
        resultCity: '.current-weather__location',
    }
}