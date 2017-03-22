/**
 * Created by David Hoppe on 3/4/2017.
 */

/*

have not made this work yet, suspect it is due to poor windows support but need to confirm
- the jar file is correpted on downlaod
- the jar file does not get started up correctly
- kind of wondering if start returns a promise that needs to be waited for.

var mockserver = require('mockserver-grunt');

mockserver.start_mockserver({
    serverPort: 1080,
    proxyPort: 1090,
    verbose: true,
});



mockserver.stop_mockserver({
    serverPort: 1080,
    proxyPort: 1090,
    verbose: true,
});

 */


var mockServer = require('mockserver-client');
var mockServerClient = mockServer.mockServerClient;

mockServerClient("localhost", 1080).mockSimpleResponse('/', { this: 'that', foo: 'bar'}, 203);
mockServerClient("localhost", 1080).mockSimpleResponse('/rest/cart', { this: 'that', foo: 'bar'}, 203);