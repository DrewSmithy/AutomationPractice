module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.google.com/')
    },
    after: browser => {
        browser
            .end()
    },
    'Search Test': browser => {
        browser
            .setValue('input[name="q"]', 'Puppies')
            .verify.containsText('#res', 'Puppies')
            .pause(5000)
    }
}