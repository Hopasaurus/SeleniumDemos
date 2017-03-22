var searchPage = require('./search-page');
var slimDriver = require('./SlimDriver');
var webDriver = require('selenium-webdriver'),
    By = webDriver.By,
    until = webDriver.until;

function GenericWebScript() {
    slimDriver.startTest();

    this.GoTo = function(url) {
        slimDriver.get(url);
    };

    this.WaitUntilElementWithIdIsLocatedOrMsHavePast = function(elementId, timeout) {
        slimDriver.wait(until.elementLocated(By.id(elementId)), timeout);
    };

    this.GetTextById = function(controlId) {
        return {
            then: function(fulfill) {
                // TODO: make a framework thing for this:
                slimDriver.findElement(By.id(controlId)).getText().then(function(text) {fulfill(text);});
            }
        }
    };

    this.Done = function () {
        return slimDriver.doneTesting();
    };

    return this;
}

module.exports.GenericWebScript = GenericWebScript;
