var Errors = require(__dirname + '/../src/errors').Errors;
var Driver = require(__dirname + '/../src/driver').Driver;

describe("a generic browser driver", function() {
    var expectNotToBeImplemented = function(fn) {
        expect(fn).toThrow(new Errors.NotImplementedError());
    }

    it("throws when visiting a page", function() {
        var driver = new Driver();

        expectNotToBeImplemented(function() {
            driver.visit('foo');
        });
    });

    it("throws when clicking on selector", function() {
        var driver = new Driver();

        expectNotToBeImplemented(function() {
            driver.click('#foobar');
        });
    });

    it("throws when filling a form field", function() {
        var driver = new Driver();

        expectNotToBeImplemented(function() {
            driver.fill('#someinput', 'somevalue');
        });
    });
});
