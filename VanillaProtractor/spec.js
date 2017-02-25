// spec.js
describe('Protractor Demo App', function() {
});

describe('Protractor Demo App', function() {
});

describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    xit('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    xit('should add one and two', function() {
        add(1, 2);

        expect(element(by.binding('latest')).getText()).toEqual('3');
    });


    xit('should have a history', function() {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);
    });

    // this is a little bit artificial
    // the desire is to have a single assert per test
    // however this leads to EVEN slower results.
    // so some middle ground should be found.
    // this takes around 25 seconds to run
    xdescribe('it should have history', function() {
        beforeEach(function() {
            add(1, 2);
            add(3, 4);
            add(5, 6);
        });

        it('should have a history 2', function() {
            expect(history.count()).toEqual(3);
        });

        it('should have a history 3', function() {
            expect(history.last().getText()).toContain('1 + 2');
        });

        it('should have a history 4', function() {
            expect(history.first().getText()).toContain('5 + 6');
        });
    });

    //This takes around 7 seconds (note that there is a delay built into the calculator.
    //This may be better:
    describe('it should have history (combined asserts', function() {
        it('should have a history 2', function() {
            add(1, 2);
            add(3, 4);
            add(5, 6);

            // There is usually a way to describe failure,  will need to figure that out.
            expect(history.count()).toEqual(3);
            expect(history.last().getText()).toContain('1 + 2');
            expect(history.first().getText()).toContain('5 + 6');
        });
    });
});
