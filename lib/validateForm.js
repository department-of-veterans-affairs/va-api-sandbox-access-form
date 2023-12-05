"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
var validators_1 = require("./utils/validators");
var validateForm = function (values) {
    var errors = {
        email: (0, validators_1.validateEmail)(values.email),
        firstName: (0, validators_1.validatePresence)('first name', values.firstName),
        lastName: (0, validators_1.validatePresence)('last name', values.lastName),
        organization: (0, validators_1.validatePresence)('organization', values.organization),
        typeAndApi: (0, validators_1.validatePresence)('auth type', values.typeAndApi),
    };
    if (!values.termsOfService) {
        errors.termsOfService = 'You must agree to the terms of service to continue.';
    }
    if (values.typeAndApi.startsWith('acg')) {
        errors.oAuthApplicationType = (0, validators_1.validateOAuthApplicationType)(values.oAuthApplicationType);
        errors.oAuthRedirectURI = (0, validators_1.validateOAuthRedirectURI)(values.oAuthRedirectURI);
    }
    if (values.typeAndApi.startsWith('ccg')) {
        errors.oAuthPublicKey = (0, validators_1.validateOAuthPublicKey)(values.oAuthPublicKey);
    }
    /*
     * This removes any fields that have an 'undefined' error (as returned by validatePresence)
     * This is needed, otherwise formik thinks there is still an error
     */
    return Object.entries(errors).reduce(function (reducedErrors, _a) {
        var key = _a[0], value = _a[1];
        if (value) {
            reducedErrors[key] = value;
        }
        return reducedErrors;
    }, {});
};
exports.validateForm = validateForm;
