var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
// for some reason it would not go using a local server.. thats fine.
// just do webDriver-manager start (from protractor stuffs) before running this.
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('http://davidhoppe.com');
//driver.get('http://www.google.com/ncr');
//driver.findElement(By.name('q')).sendKeys('webDriver');
//driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webDriver - Google Search'), 10000);

driver.quit();
