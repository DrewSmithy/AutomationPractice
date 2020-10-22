module.exports = {
    url: 'https://www.blueapron.com/gifts',
    elements: {
        sixty: 'label[for="60-value-tab"]',
        oneTwenty: 'label[for="120-value-tab"]',
        twoForty: 'label[for="240-value-tab"]',
        customAmount: 'input[id="custom-amount"]',
        email: 'label[class="ba-input-icon gift-label"]',
        addCart: 'button[id="gift-btn"]',
        yourName: 'input[placeholder="Your name"]',
        otherName: 'input[name="recipient_name"]',
        emailName: 'input[class="string email form-input gift-form-input"]',
        message: 'textarea[placeholder="I hope you enjoy the gift!"]',
        wineTab: 'label[for="wine-gift-tab"]',
        state: 'select[class="state form-input gift-form-input"]',
        california: 'option[value="CA"]',
        atHome: {
            selector: '//label[contains(text(),"Print")]',
            locateStrategy: 'xpath'
        },
        cart: '.cart-container'

    }
}