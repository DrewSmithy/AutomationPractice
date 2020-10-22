module.exports = {
    before: browser => {
        browser
            .url('https://www.ebay.com/deals')
    },
    after: browser => {
        browser
            .end()
    },
    'Practice':  browser => {
        browser
            .pause(500)
        browser
            .elements('css selector', '.itemtile-price-bold', result => {
                let myArray = result.value
                myArray.forEach(test => {
                    var myDeal = test.ELEMENT.slice(19)
                    // console.log(myDeal)
                    browser
                        .useXpath()
                        .getText(`(//*[@class="itemtile-price-bold"])[${myDeal}]`, result => {
                            myText = result.value.slice(0, -5)
                            if (myText > 59) {
                                console.log(`${myText}% off? Holy Shit what a deal`)
                            }
                        })
                    browser
                        .useCss()
                })

            })
    }
}