var webDriver = require('selenium-webdriver');

exports.startTest = function() {
    this.driver = new webDriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
};

exports.get = function (url) {
    this.driver.get(url);
};

exports.readGrid = function(rowLocator, columnDefinitions) {
    console.log('reading grid');
    return this.driver.findElements(rowLocator).then(function (rowElements) {
        return readRows([], rowElements, columnDefinitions)
    });

    function readRows(rows, rowElements, columnDefinitions) {
        console.log('reading rows');
        return rowElements.length === 0 ?
            rows :
            readColumns([], rowElements[0], columnDefinitions).then(function (row) {
                rows.push(row);
                return readRows(rows, rowElements.slice(1), columnDefinitions);
            });
    }

    function readColumns(row, rowElement, columnDefinitions) {
        console.log('reading columns ');
        return columnDefinitions.length === 0 ?
            row :
            rowElement.findElement(columnDefinitions[0].locator)
                .getText()
                .then(function(columnValue) {
                    row.push([columnDefinitions[0].name, columnValue]);
                    return readColumns(row, rowElement, columnDefinitions.slice(1));
                });
    }
};

exports.findElement = function(locator) {
    // TODO: make a thing for debugging that will
    //  highlight the element then pause for a little bit.
    return this.driver.findElement(locator);
};

exports.wait = function(waitSpec, waitTime) {
    this.driver.wait(waitSpec, waitTime);
};

exports.doneTesting = function(managedPromise) {
    var driver = this.driver;

    return {
        then:function(fulfill) {
            var quitAndFulFill = function(output) {
                driver.quit().then(function () {
                    fulfill(output);
                });
            };

            console.log('checkpoint');
            if(managedPromise) {
                console.log('working with a promise');
                managedPromise.then(quitAndFulFill);
            } else {
                console.log('no promise, just quitting.');
                quitAndFulFill('done');
            }
        }
    };
};
