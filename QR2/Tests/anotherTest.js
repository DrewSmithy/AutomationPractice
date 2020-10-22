var eBay = {}
module.exports = {
    beforeEach: browser => {
        eBay = browser.page.ebayObject()
        eBay
            .navigate()
    },
    after: browser => {
        eBay
            .end()
    },
    myTest: async (browser) => {
        eBay
            .maximizeWindow()
        eBay
            .click('@deals')
        browser
            .pause(500)
        const productArray = (await browser.elements('xpath', '//span[contains(text(),"% off")]/../../../../h3')).value
        const percentArray = (await browser.elements('xpath', '//*[@class="itemtile-price-bold"][contains(text(),"off")]')).value
        console.log('Product array is ' + productArray.length)
        console.log('Percent array is ' + percentArray.length)
        browser
            .verify.ok(productArray.length === percentArray.length)
        for (let i = 1; i < percentArray.length; i++) {
            browser
                .useXpath()
            let productText = (await browser.getText(`(//span[contains(text(),"% off")]/../../../../h3)[${i}]`)).value
            browser
                .getText(`(//*[@class="itemtile-price-bold"])[${i}]`, result => {
                    let percentage = result.value.slice(0, -5)
                    if (percentage > 59) {
                        console.log(`${productText} for ${percentage}% off? oh my goodness! what a deal!`)
                    }
                })
        }
    }
}