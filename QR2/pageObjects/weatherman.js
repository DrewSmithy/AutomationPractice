module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        searchBar: '.enter-location__input',
        pageTitle: '.app__title',
        resultCity: {
            selector: '//h3[@class="current-weather__location"]',
            locateStrategy: 'xpath'
        },
        errorMessage: {
            selector: '//h3[@class="error-message__message"]',
            locateStrategy: 'xpath'
        }
    }
}













// var myobject = {
//     test: function () {
//         var self = this
//         this
//             .getText('selector', (result) => {
//                 href = result.value
//                     self
//                         .setValue()
//             })
//         return this
//     }
// }