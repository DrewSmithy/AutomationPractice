module.exports = {
    url: 'https://www.google.com/',
    elements: {
        results: '#res',
        searchBar: {
            selector: '//input[@name="q"]',
            locateStrategy: 'xpath'
        }
    }
}