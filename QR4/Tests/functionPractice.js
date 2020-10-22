var newEmployee = (object, data) => { //Setting up my parameters, initializing the function.
    object // Just using our object parameter
        .click('[name="addEmployee"]') // Lines 2 and 3, clicking on the Add New Employee button
        .useXpath()
        .click('//*[text()="New Employee"]') // Lines 4-6 are Using xpath to click on the new employee that we just made
        .useCss()
        .waitForElementVisible('#employeeTitle')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', data.name)
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', data.phone) // Lines 7 - 13 Are waiting for the employee title to be visible
        .clearValue('[name="titleEntry"]')  // And also clearing and setting the name, phone, and title values
        .setValue('[name="titleEntry"]', data.title)
        .click('#saveBtn') // Clicking the save Button
        .expect.element('#employeeTitle').text.equal(data.name) // Expecting the name of the employee to be correct
    object
        .verify.valueContains('[name="phoneEntry"]', data.phone) // Lines 17 and 18 are checking the phone and title entries based on our parameters
        .verify.valueContains('[name="titleEntry"]', data.title)
}
var myObject = { // This is my Object that my function is pulling from, notice how I have it formatted as an object
                // Because my function is using dot notation with 1 parameter instead of 3 (data.phone, data.title, etc...)
    name: 'Andrew',
    phone: '1231231234',
    title: 'Program Manager'
}
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'Employee Edit Test': browser => {
        newEmployee(browser, myObject) // The first section of this line is using the newEmployee function
        // Our first parameter is browser, because our first parameter is asking for an object to chain our commands off of
    }
}