 var webDriver = require('selenium-webdriver'),
    By = webDriver.By,
    until = webDriver.until;
var slimDriver = require('./SlimDriver');

exports.getSearchPage = function() {
    return new SearchPage();
};

var SearchPage = function () {
    this.get = function () {
        console.log('searchpage.get');
        slimDriver.get('http://localhost:4200/');
    };

    this.search = function (term) {
        console.log('search page.search');
        slimDriver.findElement(By.id('searchInput')).sendKeys(term);
        slimDriver.findElement(By.id('searchButton')).click();

        var rowLocator = By.className('search-result-row');

        slimDriver.wait(until.elementLocated(rowLocator), 2000);

         var columnDefinitions = [
            { name: 'Description', locator: By.className('search-result-description') },
            { name: 'Price', locator: By.className('search-result-price') },
        ];

        return slimDriver.readGrid(rowLocator, columnDefinitions);
    };
};

