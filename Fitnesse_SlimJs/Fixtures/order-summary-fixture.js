// these are several of the demo fixtures from the SlimJS page

var orderDetails = [];

module.exports.OrderSetup = function() {



    this.reset = function() {
        this.order =  {};
    };

    this.execute = function() {
        orderDetails.push(this.order);

    };

    this.endTable = function() {
        console.log('this is the end of the table');
        console.log(orderDetails);
    };

    this.setOrderId = function(orderId) {
        this.order['orderId'] = orderId;
    };

    this.setOrderDetailId = function(orderDetail) {
        this.order['orderDetail'] = orderDetail;
    };

    this.setItemId = function(itemId) {
        this.order['itemId'] = itemId;
    };

    this.setQuantity = function(quantity) {
        this.order['quantity'] = quantity;
    };



};


// THIS IS A DEMO... so we put "prod" code in the test fixture. Don't try this at home kids ;-)
var sumarize = function(orderDetail) {
    var orderSummary = {};

    orderDetail.forEach(function(detail) {
        orderSummary[detail.itemId] = orderSummary[detail.itemId] ?
            orderSummary[detail.itemId] + detail.quantity :
            detail.quantity;
    });

    console.log('orderSummary');
    console.log(orderSummary);
    return orderSummary;
};


module.exports.CheckSummaryForOrder = function(orderId) {
    this.query = function () {

        var summary = sumarize(orderDetails);

        var tableData = [];

        var itemIds = Object.keys(summary);

        itemIds.forEach(function(itemId) {
            console.log(itemId);
            console.log(summary[itemId]);
            tableData.push([['Item Id', itemId], ['Quantity', summary[itemId]]]);
        });

        return tableData;
    }
};
