let manager = {}
var editTest = require('../testAssets/employeeFunction')
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee': browser => {
        editTest(manager, 'Marnie Barnett', { name: 'Patrick Star', phone: '1231231234', title: 'Pinhead Larry' }, 'Lou White')
    }
}