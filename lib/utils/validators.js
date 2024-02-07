"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOAuthPublicKey = exports.validateOAuthRedirectURI = exports.validateEmail = exports.validateOAuthApplicationType = exports.validatePresence = void 0;
var EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@(?!((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.[a-zA-Z]{2,6}))([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
var PRESENCE_PATTERN = /^(?!\s*$).+/;
var PARTIAL_URL_PATTERN = /^http[s]?:[/][/][^/:?#]+(:[0-9]+)?([/][^?#]*)?$/;
var validatePresence = function (fieldName, value) {
    if (!PRESENCE_PATTERN.test(value)) {
        return "Enter your ".concat(fieldName, ".");
    }
    return undefined;
};
exports.validatePresence = validatePresence;
var validateOAuthApplicationType = function (value) {
    if (!PRESENCE_PATTERN.test(value)) {
        return 'Choose an option.';
    }
    return undefined;
};
exports.validateOAuthApplicationType = validateOAuthApplicationType;
var validateEmail = function (value) {
    if (!EMAIL_PATTERN.test(value)) {
        return 'Enter a valid email address.';
    }
    return undefined;
};
exports.validateEmail = validateEmail;
var validateOAuthRedirectURI = function (value) {
    if (!PARTIAL_URL_PATTERN.test(value)) {
        return 'Enter an http or https URI.';
    }
    return undefined;
};
exports.validateOAuthRedirectURI = validateOAuthRedirectURI;
var validateOAuthPublicKey = function (value) {
    try {
        var jwk = JSON.parse(value);
        if (!jwk.kty || !jwk.n || !jwk.e || jwk.kty !== 'RSA') {
            return 'Please enter a valid RSA-generated key in JSON Web Key format.';
        }
        return undefined;
    }
    catch (e) {
        return 'Please enter a valid RSA-generated key in JSON Web Key format.';
    }
};
exports.validateOAuthPublicKey = validateOAuthPublicKey;
