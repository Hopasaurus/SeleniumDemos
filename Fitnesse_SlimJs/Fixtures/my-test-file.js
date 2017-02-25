// these are several of the demo fixtures from the SlimJS page

function Hi(){
    this.setEcho = function(str){
        this.echo = str;
    }

    this.sayHi = function(){
        return "Hi! " + this.echo;
    }
}

module.exports.Hi = Hi;


var exec = require('child_process').exec;

function child_process() {
    this.exec = function (cmd) {

        return {
            then:function(fulfill,reject){
                exec(cmd, function (err, stdout, stderr) {
                    if(err)
                        return reject(err);

                    fulfill(stdout.trim());
                });
            }
        }
    }
}

module.exports.child_process=child_process;


var eg={
    Division:function(){
        var num;
        var denom;

        this.setNumerator = function(n){
            num = n;
        }
        this.setDenominator = function(n){
            denom=n;
        }
        this.quotient = function(){
            return num/denom;
        }
    }
};

module.exports.eg=eg;


function ShouldIBuyMilk() {
    var _dollars;
    var _pints;
    var _creditCard;

    this.setCashInWallet = function(dollars) {
        _dollars = dollars;
    }

    this.setPintsOfMilkRemaining=function(pints) {
        _pints = pints;
    }

    this.setCreditCard = function(valid) {
        _creditCard = "yes"===valid;
    }

    this.goToStore = function() {
        var ret=(_pints == 0 && (_dollars > 2 || _creditCard)) ? "yes" : "no";
        return ret;
    }
}

module.exports.ShouldIBuyMilk=ShouldIBuyMilk;


function Json(){
    this.setJson = function(jsonObject){
        this.obj = jsonObject;
    }

    this.XAndY = function(){
        return this.obj.x + this.obj.y;
    }
}

module.exports.Json=Json;


function hoppeTest() {
    var _done = 5;

    this.setA = function(a) {
        _done = a;
    }

    this.setB = function(a) {
        _done = a;
    }

    this.setC = function(a) {
        _done = a;
    }

    this.d = function(a) {
        return ++_done;
    }
    
    this.e = function(a) {
        return ++_done;
    }

    this.f = function(a) {
        return ++_done;
    }
}

module.exports.hoppeTest=hoppeTest;
