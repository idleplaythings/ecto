try {
    var Spooky = require('spooky');
} catch (e) {
    var Spooky = require('../lib/spooky');
}


var Driver = require('./driver').Driver;

var PhantomDriver = function PhantomDriver(callback) {
    Driver.apply(this, arguments);

    this._spooky = new SpookyWrapper(callback);
    this.response = null;
};

PhantomDriver.prototype = Object.create(Driver.prototype);

PhantomDriver.prototype.visit = function(url, callback) {
    var driver = this;

    this._spooky.once('response', function(response) {
        driver.response = JSON.parse(response);
    })

    this._spooky.once('done', function() {
        callback();
    });

    this._spooky.start(url, function(response) {
        this.emit('response', JSON.stringify(response));
    });

    this._spooky.run(function() {
        this.emit('done');
    });
};

var SpookyWrapper = function SpookyWrapper(callback) {
    var spooky = new Spooky({
        casper: {
            verbose: true,
            logLevel: 'warning'
        },
        child: {
            transport: 'stdio'
        }
    }, callback);

    spooky.on('error', function(err, stack) {
        console.log(err);

        if (stack) {
            console.log(stack);
        }
    });

    spooky.on('console', function(log) {
        console.log(log);
    });

    return spooky;
}

exports.PhantomDriver = PhantomDriver;
