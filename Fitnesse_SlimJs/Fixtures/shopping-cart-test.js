var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


//This is the fixture code for the shopping cart
// All shopping cart related fixture code should go here.
function SearchFor(searchTerm) {
    this.query = function () {
        var page = new SearchPage();
        page.get();
        return page.search(searchTerm);
    }
}

module.exports.SearchFor = SearchFor;


// This is the shopping cart page model.
// I think it would usually get it's own file
// but for the demo we leave it in the fixture.

var SearchPage = function () {

    this.driver = new webdriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    this.get = function () {
        this.driver.get('http://localhost:4200/');
    };

    this.search = function (term) {
        //TODO: make wrappers for these so that we can do some fun tricks like slow downs and highlights
        this.driver.findElement(By.id('searchInput')).sendKeys(term);
        this.driver.findElement(By.id('searchButton')).click();
        this.driver.wait(until.elementLocated(By.className('search-result-row')), 2000);

        var rowFinder = this.driver.findElements(By.className('search-result-row')).then(function (rowElements) {
            return populateRows(rowElements, []);
        });

        return makeThenable(this.driver, rowFinder);
    };
};


var populateRows = function (rowElements, rows) {
    var row = rowElements.shift();

    return row.findElement(By.className('search-result-description')).getText().then(function (description) {
        return row.findElement(By.className('search-result-price')).getText().then(function (price) {
            rows.push([ ['Description', description], ['Price', price] ]);

            return rowElements.length ? populateRows(rowElements, rows) : rows;
        });
    });
};

var makeThenable = function (driver, managedPromise) {
    return {
        then: function (fulfill) {

            managedPromise.then(function (rowData) {
                driver.quit();

                // TODO:  this sleep is another of the enhancements for dev, will become a configurable part of the framework.
                //driver.sleep(250);
                fulfill(rowData);
            });
        }
    };
};

