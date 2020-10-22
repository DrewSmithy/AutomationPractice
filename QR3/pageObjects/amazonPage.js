module.exports = {
    url: 'https://www.amazon.com/',
    elements: {
        searchBar: '#twotabsearchtextbox',
        searchButton: '[value="Go"]',
        results: {
            selector: '(//span[contains(text(),"Lego Star Wars")])[1]',
            locateStrategy: 'xpath'
        }
    }
}