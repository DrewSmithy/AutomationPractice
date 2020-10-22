module.exports = {
    url: 'My URL Here',
    elements: {
        firstSelector: 'input[name="q"]',
        anotherSelector: {
            selector: '//li[@name="employee2"]',
            locateStrategy: 'xpath'
        },
        anothaOne: 'h1',
    }
}