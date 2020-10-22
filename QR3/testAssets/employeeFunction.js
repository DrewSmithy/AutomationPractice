module.exports = (browser, data) => {
    browser
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', data.name)
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', data.phone)
        .clearValue('[name="titleEntry"]')
        .setValue('[name="titleEntry"]', data.title)
        .click('#saveBtn')
        .expect.element('#employeeTitle').text.equal(data.name)
}