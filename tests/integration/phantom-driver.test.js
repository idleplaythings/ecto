var spawn = require('child_process').spawn;
var PhantomDriver = require('../../src/phantom-driver').PhantomDriver;

describe("PhantomJS browser driver", function() {
    var server, driver;

    beforeEach(function() {
        server = spawn(__dirname + '/../fixtures/bin/start');
    });

    afterEach(function() {
        server.kill();
    });

    var withDriver = function(callback) {
        driver = new PhantomDriver(function() {
            callback(driver);
        });
    };

    it("visits an url", function(done) {
        withDriver(function(driver) {
            driver.visit('http://localhost:8080/', function() {
                expect(driver.response.status).toEqual(200);
                done();
            });
        });
    });

    it("visits a non-existing url", function(done) {
        withDriver(function(driver) {
            driver.visit('http://localhost:8080/foobar', function() {
                expect(driver.response.status).toEqual(404);
                done();
            });
        });
    });
});
