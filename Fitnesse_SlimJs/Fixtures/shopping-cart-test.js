var searchPage = require('./search-page');
var cartPage = require('./cart-page');
var slimDriver = require('./SlimDriver');

module.exports.SearchFor = function(searchTerm) {
    this.query = function () {
        slimDriver.startTest();

        var page = searchPage.getSearchPage();
        page.get();

        var searchResult = page.search(searchTerm);

        return slimDriver.doneTesting(searchResult);
    }
};

module.exports.CheckCartItems = function() {
    this.query = function () {
        slimDriver.startTest();

        var page = cartPage.buildCartPage();

        page.get();

        var searchResult = page.getCartItems();

        return slimDriver.doneTesting(searchResult);
    }
};

