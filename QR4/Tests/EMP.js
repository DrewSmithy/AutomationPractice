var page = {}
module.exports = {
    beforeEach: browser => {
        page = browser.page.EMP2()
        page
            .navigate()
    },
    after: browser => {
        page
            .end()
    },
    'Test': browser => {
        page
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameInput')
            .setValue('@nameInput', 'Drester')
            .click('@save')
            .verify.containsText('@empHeader', 'Drester')
            .click('@delete')
            .api.acceptAlert()
        page
            .pause()
    }
}