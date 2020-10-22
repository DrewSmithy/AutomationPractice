var empArray = require('../testAssets/employeeArray')
var myFunc = require('../testAssets/anotherEMPFunction')
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('body')
    },
    after: browser => {
        browser
            .end()
    },
    'A test to check if it is Bernice': browser => {
        for (let i = 0; i<empArray.length; i++) {
            console.log(i)
            myFunc(browser, empArray[i])
        }
    }
}