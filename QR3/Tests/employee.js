var fillField = require('../testAssets/employeeFunction')
var eric = require('../testAssets/employeeAssets')
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser
            .end()
    },
    'Test Assets Practice': browser => {
        browser
            .click('li[name="employee3"]')
            fillField(browser, eric[0])
            fillField(browser, eric[1])
    }
}