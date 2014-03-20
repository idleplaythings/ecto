var ecto = require(__dirname + '/../src/ecto');
var Driver = require(__dirname + '/../src/driver').Driver;

describe("ecto browser emulator", function() {
    var getDriverSpy = function() {
        var driver = new Driver();

        spyOn(driver, 'visit').andCallFake(function() {
            var callback = arguments[1];
            callback.call(undefined);
        });

        spyOn(driver, 'click').andCallFake(function() {
            var callback = arguments[1];
            callback.call(undefined);
        });

        spyOn(driver, 'fill').andCallFake(function() {
            var callback = arguments[2];
            callback.call(undefined);
        });

        return driver;
    };

    var browser, driver;

    beforeEach(function() {
        driver = getDriverSpy();
        browser = new ecto.Ecto(driver);
    })

    it("delegates web site visits", function() {
        runs(function() {
            browser.visit("http://some.url")
                .then(function() {
                    expect(driver.visit).toHaveBeenCalledWith("http://some.url");
                });
        });
    });

    it("delegates clicking", function() {
        runs(function() {
            browser.click("#foobar")
                .then(function() {
                    expect(driver.click).toHaveBeenCalledWith("#foobar");
                });
        });
    });

    it("delegates form filling", function() {
        runs(function() {
            browser.fill("#foobar", "somevalue")
                .then(function() {
                    expect(driver.fill).toHaveBeenCalledWith("#foobar", "somevalue");
                });
        });
    });
});
