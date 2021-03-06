module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
    // 'Problem 1': browser => {
    //     // A Bug in the software, not an error with my test.
    //     browser
    //         .click('[name="employee7"]')
    //         .clearValue('[name="nameEntry"]')
    //         .setValue('[name="nameEntry"]', 'Billy Bob')
    //         .click('[name="employee9"]')
    //         .verify.value('[name="nameEntry"]', 'Eve Sparks')
    //         .click('[name="employee7"]')
    //         .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    // },
    // 'Problem 2': browser => {
    //     // Issues with our test, not a bug in the site.
    //     browser
    //         .click('[name="employee5"]')
    //         .clearValue('[name="titleEntry"]')
    //         .setValue('[name="titleEntry"]', 'Best Manager Ever')
    //         .clearValue('[name="phoneEntry"]')
    //         .setValue('[name="phoneEntry"]', '1234567890')
    //         .click('#saveBtn')
    //         .click('[name="employee8"]')
    //         .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
    //     browser
    //         .click('[name="employee5"]')
    //         .expect.element('[name="phoneEntry"]').value.to.equal('1234567890')
    //     browser
    //         .expect.element('[name="titleEntry"]').value.to.equal('Best Manager Ever')
    // },
    'Problem 5': browser => {
        browser
            .click('[name="employee4"]')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '8015551234')
            .click('input[name="cancel"]')
            .click('[name="employee5"]')
            .click('[name="employee4"]')
            .expect.element('[name="phoneEntry"]').value.not.to.equal('8015551234')
    }
}