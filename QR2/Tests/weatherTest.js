var weatherPage = {}
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    'Search for city': browser => {
        weatherPage
            .getText('@pageTitle', function (result) {
                console.log(result.value)
            })
    }
}






// browser
//     .windowHandles(function (result) {
//         var homePage = result.value[0]
//         var contactUsPage = result.value[1]
//         browser
//             .switchWindow(contactUsPage)
//     })