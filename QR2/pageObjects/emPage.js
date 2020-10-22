var myCommands = {
    mine: function (myVariable) {
        var self = this
        this
            .getValue(function (result) {
                myVariable = result.value
                console.log(myVariable)
                self
                    .click()
                    .setValue()
            })
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    commands: [myCommands],
    elements: {
        //Here is where your selectors go
        employee2: '[name="employee2"]',
        employee3: '[name="employee3"]',
        employee4: {
            selector: '//li[@name="employee2"]',
            locateStrategy: 'xpath'
        },
        anothaOne: {
            selector: '//li[text()="Teresa Osborne"]',
            locateStrategy: 'xpath'
        }
    }
}