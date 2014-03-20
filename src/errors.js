var Errors = {
    NotImplementedError: function(message) {
        var error = Error.call(this, message);
        error.name = 'NotImplementedError';
        return error;
    }
};

exports.Errors = Errors;
