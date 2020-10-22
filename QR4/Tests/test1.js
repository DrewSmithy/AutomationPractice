module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.google.com/')
            .waitForElementVisible('body')
    },
    after: browser => {
        browser
            .end()
    },
    'Search Test': browser => {
        var school = {
            course: 'DevMountain QA',
            title: 'QA Engineer',
            length: '6 Weeks',
            type: 'Immersive'
        }
    }
}