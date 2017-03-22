var mockServer = require('mockserver-client');
var mockServerClient = mockServer.mockServerClient;

function SetupMockResponse() {
    this.doTable = function (tableData) {

        var path = tableData[0];
        var headers = tableData[1];

        var mockData = mapMockData(tableData, headers);

        return {
            then:function(fulfill,reject){
                // TODO: want a wrapper for all the mockServer commands so that this easier and less messy.
                mockServerClient("localhost", 1080).mockSimpleResponse(path[0], mockData, 203).then(function() {
                    fulfill([]);
                })
            }
        };
    };

    function mapMockData(tableData, headers) {
        return tableData.slice(2).map(function (data) {
            return data.reduce(function (acc, value, index) {
                acc[headers[index]] = value;
                return acc;
            }, {});
        });
    }
}

module.exports.SetupMockResponse = SetupMockResponse;
