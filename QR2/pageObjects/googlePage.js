var googleCommands = {
    search: function (data) {
        this
            .setValue('@searchBar', [data, this.api.Keys.ENTER])
        this
            .waitForElementPresent('@results')
            .verify.containsText('@results', data)
            .navigate()
        return this
    }
}
module.exports = {
    url: 'https://www.google.com/',
    commands: [googleCommands],
    elements: {
        searchBar: '[name="q"]',
        results: '#res'
    }
}