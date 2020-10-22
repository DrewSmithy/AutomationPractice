module.exports = {
    before: browser => {
        browser.url('https://www.youtube.com/watch?v=QtBDL8EiNZo&ab')
    },
    after: browser => {

    },
    'test': browser=> {
        browser
        .click('button[class="ytp-large-play-button ytp-button"]')
        .pause(15000)
    },
}