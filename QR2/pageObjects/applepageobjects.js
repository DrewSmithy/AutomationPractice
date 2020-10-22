module.exports={
    url:"https://apple.com/",
    elements: {

        clickBag:{
            selector:'(//a[@class="ac-gn-link ac-gn-link-bag"])[2]',
            locateStrategy:'xpath'
        },
        clickSignIn:('a[data-analytics-activitymap-link-id="signIn"]'),
        email:('(//input[@aria-required="true"])[1]', 'yahoo.com'),
        password:('(//input[@aria-required="true"])[2]', 'yoyoyoyoy')
    },

}