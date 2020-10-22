module.exports = (object, search, result) => {
    object
        .setValue('@searchBar', search)
        .click('@searchButton')
        .waitForElementPresent('@results')
        .expect.element('@results').text.contain(result)
}