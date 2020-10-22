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
    'Weather Search Test': browser => {
        // I'm Dre, and this is a test for searching Weatherman
        browser
            .setValue('.enter-location__input', 'New York')
            .click('button')
            .waitForElementVisible('.current-weather__location')
            .expect.element('.current-weather__location').text.equal('New York')
        browser
        // This is part 2 of my test, doing another search
            // .pause()
            .click('button')
            .setValue('.enter-location__input', 'Westerville')
            .click('button')
            .waitForElementVisible('.current-weather__location')
            .expect.element('.current-weather__location').text.equal('Westerville')
    }
}