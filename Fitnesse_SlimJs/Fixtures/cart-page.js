var webDriver = require('selenium-webdriver'),
    By = webDriver.By,
    until = webDriver.until;
var slimDriver = require('./SlimDriver');

exports.buildCartPage = function() {
    return new CartPage();
};

var CartPage = function () {
    this.get = function () {
        slimDriver.get('http://localhost:4200/cart');
    };

    this.getCartItems = function () {
        var gridDetail = {
            rowLocator: By.className('cart-detail'),
            columnDefinitions: [
                { name: 'Description', locator: By.className('cart-detail-description') },
                { name: 'Price', locator: By.className('cart-detail-price') },
                { name: 'Quantity', locator: By.className('cart-detail-quantity') },
            ]
        };

        return slimDriver.readGrid2(gridDetail);
    };
};

