module.exports = {
    url: 'https://www.typingtest.com/typingtest19Set/select.html',
    elements: {
        zebra: {
            selector: '//select[@name="textfile"] //option[@value="zebra.txt"]',
            locateStrategy: 'xpath'
        },
        baseball: {
            selector: '//select[@name="textfile"] //option[@value="baseball.txt"]',
            locateStrategy: 'xpath'
        },
        start: 'button',
        newSelector: 'CSS Selector here',
        XpathSelector: {
            selector: 'Xpath Selector',
            locateStrategy: 'xpath'
        }
    }
}