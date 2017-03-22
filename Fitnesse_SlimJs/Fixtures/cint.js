var webdriver = require('selenium-webdriver'),
        By = webdriver.By;

var framework = require('./SlimDriver');

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
        // 'webDriver-manager start' before running this.

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

    framework.startTest();

    this.get = function() {
        framework.get('http://hopasaurus.com/cint.html');
    };

    this.setTerm = function(term) {
        framework.clickElement(By.id(_termMap[term]));
    };
        
    this.setOperation = function(operation) {
        framework.clickElement(By.id(operation));
    };

    this.perform = function() {
        framework.clickElement(By.id('equals'));
    };

    this.getResult = function() {
        return framework.doneTesting(framework.getText(By.id('answer')));
    }
};

module.exports.CheckCalculator = CheckCalculator;
