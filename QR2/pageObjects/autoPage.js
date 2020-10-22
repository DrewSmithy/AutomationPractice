module.exports = {
    url: 'https://www.autotempest.com',
    elements: {
        make: {
            selector: '//select[@name="make"]',
            locateStrategy: 'xpath'
        },
        model: {
            selector: '//select[@name="model"]',
            locateStrategy: 'xpath'
        },
        zipCode: '[name="zip"]',
        submitButton: {
            selector: '//button[@class="submit"]',
            locateStrategy: 'xpath'
        },
        within: {
            selector: '//select[@id="radius"]',
            locateStrategy: 'xpath'
        }
    }
}