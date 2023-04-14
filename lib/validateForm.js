"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
var validators_1 = require("./utils/validators");
var validateForm = function (values) {
    console.log('validateForm called');
    console.log(values);
    var errors = {
        email: (0, validators_1.validateEmail)(values.email),
        firstName: (0, validators_1.validatePresence)('first name', values.firstName),
        lastName: (0, validators_1.validatePresence)('last name', values.lastName),
        typeAndApi: (0, validators_1.validatePresence)('auth type', values.typeAndApi),
    };
    if (!values.termsOfService) {
        errors.termsOfService = 'You must agree to the terms of service to continue.';
    }
    // if (!anyApiSelected(values)) {
    //   errors.apis = 'Choose at least one API.';
    // }
    if (values.typeAndApi.startsWith('acg')) {
        errors.oAuthApplicationType = (0, validators_1.validateOAuthApplicationType)(values.oAuthApplicationType);
        errors.oAuthRedirectURI = (0, validators_1.validateOAuthRedirectURI)(values.oAuthRedirectURI);
    }
    if (values.typeAndApi.startsWith('ccg')) {
        errors.oAuthPublicKey = (0, validators_1.validatePresence)('oAuthPublicKey', values.oAuthPublicKey);
    }
    // if (includesInternalSponsorshipAPI(values.apis)) {
    //   errors.internalApiInfo = {
    //     programName: validatePresence('program name', values.internalApiInfo.programName),
    //     sponsorEmail: validateVAEmail(values.internalApiInfo.sponsorEmail),
    //     // eslint-disable-next-line no-negated-condition
    //     vaEmail: !isVaEmail(values.email) ? validateVAEmail(values.internalApiInfo.vaEmail) : '',
    //   };
    //   const internalInfoErrors = errors.internalApiInfo;
    //   if (
    //     !internalInfoErrors.programName &&
    //     !internalInfoErrors.sponsorEmail &&
    //     !internalInfoErrors.vaEmail
    //   ) {
    //     delete errors.internalApiInfo;
    //   }
    // }
    console.log(errors);
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
