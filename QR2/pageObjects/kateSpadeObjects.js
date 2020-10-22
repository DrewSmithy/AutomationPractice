module.exports = {
    url: 'https://www.katespade.com/',
    elements: {
        search: 'input[class="bw__SearchBarFlagship__input bw__Input sc-VigVT kvKZZG bw__Input__component"]',
        searchButton: 'span[class="bw__Icon__component bw__Icon__magnify bw__Icon sc-bwzfXH bukJnu"]',
        location: 'div[class="bw__StoreLocation__cityState"]',

        popupX: {
            selector: '//*[contains(text(), "No thanks, I")]',
            locateStrategy: 'xpath'
        },
        new: {
            selector: '//a[contains(text(),"new")]',
            locateStrategy: 'xpath'
        },

        // handbags: {
        //     selector: '//a[contains(text(),"handbags")]',
        //     locateStrategy: 'xpath'
        // },

        // wallets: {
        //     selector: '//a[contains(text(),"wallets")]',
        //     locateStrategy: 'xpath'
        // },

        // clothing: {
        //     selector: '//a[contains(text(),"clothing")]',
        //     locateStrategy: 'xpath'
        // },

        // shoes: {
        //     selector: '//a[contains(text(),"shoes")]',
        //     locateStrategy: 'xpath'
        // },

        // jewelry: {
        //     selector: '//a[contains(text(),"jewelry")]',
        //     locateStrategy: 'xpath'
        // },

        // accessories: {
        //     selector: '//a[contains(text(),"accessories")]',
        //     locateStrategy: 'xpath'
        // },

        // personalization: {
        //     selector: '//a[contains(text(),"personalization")]',
        //     locateStrategy: 'xpath'
        // },

        // homeItems: {
        //     selector: '//a[contains(text(),"home")]',
        //     locateStrategy: 'xpath'
        // },

        // gifts: {
        //     selector: '//a[contains(text(),"gifts")]',
        //     locateStrategy: 'xpath'
        // },

        // sale: {
        //     selector: '//a[contains(text(),"sale")]',
        //     locateStrategy: 'xpath'
        // }

    }
}