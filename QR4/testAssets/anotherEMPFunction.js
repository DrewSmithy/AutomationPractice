module.exports = (browser, data) => {
    browser
        .useXpath()
        .click(`//*[text()="${data.name}"]`)
        .useCss()
        .waitForElementPresent('#employeeTitle')
        .getText('#employeeTitle', (result)=> {
            var empName = result.value
            console.log(empName)
            if (empName === 'Bernice Ortiz') {
                console.log('Bernice is already sus')
            }
            else {
                console.log('Not the Imposter')
            }
        })
        .verify.value('[name="titleEntry"]', data.title)
}