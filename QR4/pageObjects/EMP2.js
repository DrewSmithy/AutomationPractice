module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [],
    elements: {
        addEmployee: {
            selector: '//*[text()=" + Add Employee "]',
            locateStrategy: 'xpath'
        },
        newEmployee: {
            selector: '//*[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        nameInput: '[name="nameEntry"]',
        empHeader: '#employeeTitle',
        save: '#saveBtn',
        delete: '[name="delete"]'
    }
}