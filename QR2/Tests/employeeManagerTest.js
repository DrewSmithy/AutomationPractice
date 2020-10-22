let manager = {}
let testEdit = require('../testAssets/testEdit')
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'Edit Test': browser => {
        testEdit(manager, 'Bernice Ortiz', {name: 'Andrew Smith', phone: '1234567890', title: 'CEO of cool stuff'}, 'Marnie Barnett')
    }
}