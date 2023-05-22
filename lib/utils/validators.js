"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOAuthRedirectURI = exports.validateEmail = exports.validateOAuthApplicationType = exports.validatePresence = void 0;
var EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
