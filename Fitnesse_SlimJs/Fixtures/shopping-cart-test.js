var searchPage = require('./search-page');
var slimDriver = require('./SlimDriver');

function SearchFor(searchTerm) {
    this.query = function () {
        slimDriver.startTest();

        var page = searchPage.getSearchPage();
        page.get();

        var searchResult = page.search(searchTerm);

        return slimDriver.doneTesting(searchResult);
    }
}

module.exports.SearchFor = SearchFor;

