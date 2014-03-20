var Errors = require(__dirname + '/../src/errors').Errors;

var Driver = function Driver() {

};

Driver.prototype.visit = function() {
    throw Errors.NotImplementedError();
};

Driver.prototype.click = function(selector) {
    throw Errors.NotImplementedError();
};

Driver.prototype.fill = function(selector, value) {
    throw Errors.NotImplementedError();
};

exports.Driver = Driver;
