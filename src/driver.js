var Errors = require(__dirname + '/../src/errors').Errors;

var Driver = function Driver() {

};

Driver.prototype.visit = function(callback) {
    throw Errors.NotImplementedError();
};

Driver.prototype.click = function(selector, callback) {
    throw Errors.NotImplementedError();
};

Driver.prototype.fill = function(selector, value, callback) {
    throw Errors.NotImplementedError();
};

exports.Driver = Driver;
