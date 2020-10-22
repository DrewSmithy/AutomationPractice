module.exports = {
    'My Test': browser => {
        browser
            .url('https://www.athensford.com/')
            .useXpath()
            .click('(//option[@value="2021"])[1]')
            .pause()
    }
}