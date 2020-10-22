module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddInput: {
            selector: '//input[@name="evenOddInput"]',
            locateStrategy: 'xpath'
    },
    evenOddBtn: {
        selector:'//button[@name="evenOddButton"]',
        locateStrategy: 'xpath'
    },
    filterObjectsInput: {
        selector: '//input[@name="objectFilterInput"]',
        locateStrategy: 'xpath'
    },
    filterObjectsBtn: {
        selector: '//button[@name="objectFilterButton"]',
        locateStrategy: 'xpath'
    },
    filterStringInput: {
        selector: '//input[@id="nameFilterInput"]',
        locateStrategy: 'xpath'
    },
    filterStringBtn: {
        selector: '//button[@id="nameFilterButton"]',
        locateStrategy: 'xpath'
    },
    palindromeInput: {
        selector: '//input[@name="palindromeInput"]',
        locateStrategy: 'xpath'
    },
    palindromeBtn:{
        selector: '//button[@name="palindromeButton"]',
        locateStrategy: 'xpath'
    },
    sumInput1:{
        selector: '//input[@name="sumInput1"]',
        locateStrategy: 'xpath'
    },
    sumInput2: {
        selector: '//input[@name="sumInput2"]',
        locateStrategy: 'xpath'
    },
    sumAddBtn: {
        selector:'//button[@name="sumButton"]',
        locateStrategy: 'xpath'
    },
},
}