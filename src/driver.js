var Errors = require(__dirname + '/../src/errors').Errors;

var Driver = function Driver(callback) {

};

Driver.prototype.visit = function(url, callback) {
    throw Errors.NotImplementedError();
};

Driver.prototype.click = function(selector, callback) {
    throw Errors.NotImplementedError();
};

Driver.prototype.fill = function(selector, value, callback) {
    throw Errors.NotImplementedError();
};

exports.Driver = Driver;
