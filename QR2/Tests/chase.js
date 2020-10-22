var guitar = {}
var departments = require('../testAssets/departmentsArray')
var used = require('../testAssets/usedArray')
var allLinks = require('../testAssets/allLinks')
module.exports = {
    before: browser => {
        guitar = browser.page.guitarCenterPage()
        guitar.navigate()
    },
    // 'Search Test': browser => {
    //     guitar
    //     .search (guitar, 'electric')
    //     .search(guitar, 'acoustic')
    //     .search (guitar, 'drums')
    // },
    'drop down links tests': browser => {
        guitar
            .depDropDowns(departments)
    },
        'used drop down links test': browser => {
            for (let i = 1, q = 0; i < 12, q < 11; i++, q++) 
            guitar
            .usedDropDowns()
        },
    'Guitar Center Sign in Test': browser => {
        guitar
        allLinks.forEach(test => {
            guitar.guitarLink(test)
        })
    }
}