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
    'My Test OMEGALUL': browser => {
        
    }
}