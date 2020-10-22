module.exports = { beforeEach: browser => { browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html') }, after: browser => { browser.end() }, 'Title Bar': browser => { browser.verify.containsText('span[class="titleText"]', "Employee Manager").pause(30000) }, 'Employee Name': browser => { browser.verify.containsText('li[name="employee1"]', "Bernice Ortiz").pause(30000) }, }