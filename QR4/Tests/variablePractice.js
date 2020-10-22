module.exports = {
    after: browser => {
        browser.end()
    },
    'Selectors': browser => {
        var searchBar = '.enter-location__input'
        var submitButton = 'button'
        var resultingCity = '.current-weather__location'
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .setValue(searchBar, 'San Diego')
            .click(submitButton)
            .waitForElementVisible(resultingCity)
            .verify.containsText(resultingCity, 'San Diego')
    },
    'Test data': browser => {
        var employee = {
            name: 'jalapeno pupper',
            phone: '1231231234',
            title: 'CBO'
        }
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', employee.name)
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', employee.phone)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', employee.title)
            .click('#saveBtn')
            .click('li[name="employee1"]')
            .expect.element('input[name="nameEntry"]').value.not.to.equal(employee.name)
        browser
            .click('li[name="employee11"]')
            .expect.element('input[name="nameEntry"]').value.to.equal(employee.name)
        browser.expect.element('input[name="phoneEntry"]').value.to.equal(employee.phone)
        browser.expect.element('input[name="titleEntry"]').value.to.equal(employee.title)
    }
}








