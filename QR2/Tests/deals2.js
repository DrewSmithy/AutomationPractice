module.exports = {
    before: browser => {
        browser
            .url('https://www.ebay.com/deals')
    },
    after: browser => {
        browser
            .end()
    },
    myTest: async (browser) => {
        const productArray = (await browser.elements('xpath', '//*[@class="itemtile-price-bold"][contains(text(),"off")]/../../../../../a/h3')).value
        const percentArray = (await browser.elements('xpath', '//*[@class="itemtile-price-bold"][contains(text(),"off")]')).value
        console.log('Product array is ' + productArray.length)
        console.log('Percent array is ' + percentArray.length)
        browser
            .verify.ok(productArray.length === percentArray.length)
        for (let i = 1; i < percentArray.length; i++) {
            browser
                .useXpath()
            let productText = (await browser.getText(`(//*[@class="itemtile-price-bold"][contains(text(),"off")]/../../../../../a/h3)[${i}]`)).value
            const percentage = (await browser.getText(`(//*[@class="itemtile-price-bold"])[${i}]`)).value.slice(0, -5)
            if (percentage > 59) {
                console.log(`${productText} for ${percentage}% off? What a deal.`)
            }
        }
    }
}