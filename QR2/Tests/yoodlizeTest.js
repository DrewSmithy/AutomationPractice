var yoodObject
module.exports = {
beforeEach: browser => {
    yoodObject = browser.page.yoodlize()
    yoodObject.navigate()
},
'Select see all': browser => {
    yoodObject
        .waitForElementPresent('@seeAll')
        .click('@seeAll')
        .verify.containsText('@results', 'Recreational Vehicles')
},
'Select see all Outdoor Gear': browser => {
    yoodObject
        .waitForElementPresent('@outdoorGear')
        .click('@outdoorGear')
        .verify.containsText('@results', 'Outdoor Gear')
},
'Electronics See All': browser => {
    yoodObject
    .waitForElementPresent('@electronics')
    .click('@electronics')
    .verify.containsText('@results', 'Electronics')
},
'Wedding See All': browser => {
    yoodObject
    .waitForElementPresent('@wedding')
    .click('@wedding')
    .verify.containsText('@results', 'Party & Wedding Equipment')
},
'Tools See All': browser => {
    yoodObject
    .waitForElementPresent('@tools')
    .click('@tools')
    .verify.containsText('@results', 'Tools')
},
'Clothing See All': browser => {
    yoodObject
    .waitForElementPresent('@clothing')
    .click('@clothing')
    .verify.containsText('@results', 'Clothing')
},
'Kitchen See All': browser => {
    yoodObject
    .waitForElementPresent('@kitchen')
    .click('@kitchen')
    .verify.containsText('@results', "Home and Kitchen")
},
'Toys See All': browser => {
    yoodObject
    .waitForElementPresent('@toys')
    .click('@toys')
    .verify.containsText('@results', 'Toys and Games')
},
'Lawn See All': browser => {
    yoodObject
    .waitForElementPresent('@lawn')
    .click('@lawn')
    .verify.containsText('@results','Lawn and Garden')
},
'Sporting See All': browser => {
    yoodObject
    .waitForElementPresent('@sporting')
    .click('@sporting')
    .verify.containsText('@results', 'Sporting Goods')
},
'DVDs See All': browser => {
    yoodObject
    .waitForElementPresent('@dvds')
    .click('@dvds')
    .verify.containsText('@results', 'DVDs & Video Games')
},
'Venues See All': browser => {
    yoodObject
    .waitForElementPresent('@venues')
    .click('@venues')
    .verify.containsText('@results', 'Venues')
},
'Local Experts See All': browser => {
    yoodObject
    .waitForElementPresent('@experts')
    .click('@experts')
    .verify.containsText('@results', 'Local Experts')
},
'Guided See All': browser => {
    yoodObject
    .waitForElementPresent('@guided')
    .click('@guided')
    .verify.containsText('@results', 'Experiences')
},
'Music See All': browser => {
    yoodObject
    .waitForElementPresent('@music')
    .click('@music')
    .verify.containsText('@results', 'Music')
},
'Business See All': browser => {
    yoodObject
    .waitForElementPresent('@business')
    .click('@business')
    .verify.containsText('@results', 'Business Equipment')
},
'Misc See All': browser => {
    yoodObject
    .waitForElementPresent('@misc')
    .click('@misc')
    .verify.containsText('@results', 'Misc')
},
}