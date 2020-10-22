# AutomationPractice
Most of my examples for automation with Nightwatch
## Setup Instructions
* Each QR folder is it's own project folder
* In order to run a single test you need to navigate into that folder and install Chromedriver
    * cd QR2
    * npm i chromedriver
* To run a test, use the command 'nightwatch' then path to your test
    * nightwatch tests/deals2.js
* Each QR folder already has a nightwatch.conf.js file that is currently working