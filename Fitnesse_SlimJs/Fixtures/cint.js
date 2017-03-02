var webdriver = require('selenium-webdriver'),
        By = webdriver.By;


//This is the fixture code
function CheckCalculator() {
        
    var _firstTerm;
    var _secondTerm;
    var _operation;

    this.setFirstTerm = function(term) {
        _firstTerm = term;
    };

    this.setSecondTerm = function(term) {
        _secondTerm  = term;
    };

    this.setOperation = function(operation) {
        _operation = operation;
    };

    this.answer = function() {
        // 'webdriver-manager start' before running this.

        var page = new CalculatorPage();

        page.get();
        page.setTerm(_firstTerm);
        page.setTerm(_secondTerm);
        page.setOperation(_operation);
        page.perform();

        return page.getResult();
    }
}


// This is the page model
var CalculatorPage = function() {

    var _termMap = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five', 
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    this.driver = new webdriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    this.get = function() {
        this.driver.get('http://hopasaurus.com/cint.html');
    };

    this.setTerm = function(term) {
        this.driver.findElement(By.id(_termMap[term])).click();
    };
        
    this.setOperation = function(operation) {
        this.driver.findElement(By.id(operation)).click();
    };

    this.perform = function() {
        this.driver.findElement(By.id('equals')).click();
    };

    //the last step needs to be a 'thenable'  so made a little helper for that, this would eventually be a framework provided helper once we know what pattern it will follow.
    this.getResult = function() {
        return makeThenable(this.driver, this.driver.findElement(By.id('answer')).getText());
    }
};


var makeThenable = function(driver, managedPromise) {
    return {
        then:function(fulfill) {
            managedPromise.then(function(output) {
                driver.quit();

                driver.sleep(250);
                fulfill(output);

            });
        }
    };
};

module.exports.CheckCalculator = CheckCalculator;
