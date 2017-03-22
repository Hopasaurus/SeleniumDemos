var mockServer = require('mockserver-client');
var mockServerClient = mockServer.mockServerClient;

function SetupMockResponse() {
    this.doTable = function (tableData) {


        var path = tableData[0];
        var headers = tableData[1];

        var mockData = tableData.slice(2).map(function(data) {
             return data.reduce(function(acc, value, index) {
                 acc[headers[index]] = value;
                 return acc;
             }, {});
        });

        console.log('path: ' + path[0]);
        console.log('Mock Data:');
        console.log(mockData);

        //var mockPromise =

        mockServerClient("localhost", 1080).mockSimpleResponse(path[0], { data: 'foo'}, 203)
            .then(function() {
            console.log('all done');
        });

/*
        return {
            then:function(fulfill,reject){
                console.log('really done!');
                mockPromise.then(function() {
                    console.log('really really done.');
                    fulfill([]);
                })
            }
        };
        */
    };
}

module.exports.SetupMockResponse = SetupMockResponse;

var bar = new SetupMockResponse();


bar.doTable([
    ['/foo12'],
    ['bar', 'baz'],
    ['42','73'],
    ['42','73']
]);
