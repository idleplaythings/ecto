var Q = require('q');

var Ecto = function Ecto(driver) {
    this._driver = driver;
}

Ecto.prototype.visit = function(url) {
    var deferred = Q.defer();

    this._driver.visit(url, function() { deferred.resolve(); });

    return deferred.promise;
}

Ecto.prototype.click = function(selector) {
    var deferred = Q.defer();

    this._driver.click(selector, function() { deferred.resolve(); });

    return deferred.promise;
}

Ecto.prototype.fill = function(selector, value) {
    var deferred = Q.defer();

    this._driver.fill(selector, value, function() { deferred.resolve(); });

    return deferred.promise;
}

exports.Ecto = Ecto;
