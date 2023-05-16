var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("types/apply", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("utils/validators", [], function (exports_2, context_2) {
    "use strict";
    var EMAIL_PATTERN, VA_EMAIL_PATTERN, PRESENCE_PATTERN, PARTIAL_URL_PATTERN, validatePresence, validateOAuthApplicationType, validateEmail, validateVAEmail, validateOAuthRedirectURI, isVaEmail;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            VA_EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@va.gov$/;
            PRESENCE_PATTERN = /^(?!\s*$).+/;
            PARTIAL_URL_PATTERN = /^http[s]?:[/][/][^/:?#]+(:[0-9]+)?([/][^?#]*)?$/;
            exports_2("validatePresence", validatePresence = function (fieldName, value) {
                if (!PRESENCE_PATTERN.test(value)) {
                    return "Enter your ".concat(fieldName, ".");
                }
                return undefined;
            });
            exports_2("validateOAuthApplicationType", validateOAuthApplicationType = function (value) {
                if (!PRESENCE_PATTERN.test(value)) {
                    return 'Choose an option.';
                }
                return undefined;
            });
            exports_2("validateEmail", validateEmail = function (value) {
                if (!EMAIL_PATTERN.test(value)) {
                    return 'Enter a valid email address.';
                }
                return undefined;
            });
            exports_2("validateVAEmail", validateVAEmail = function (value) {
                if (!VA_EMAIL_PATTERN.test(value)) {
                    return 'Enter a valid VA-issued email address.';
                }
                return undefined;
            });
            exports_2("validateOAuthRedirectURI", validateOAuthRedirectURI = function (value) {
                if (!PARTIAL_URL_PATTERN.test(value)) {
                    return 'Enter an http or https URI.';
                }
                return undefined;
            });
            exports_2("isVaEmail", isVaEmail = function (value) { return VA_EMAIL_PATTERN.test(value); });
        }
    };
});
System.register("validateForm", ["utils/validators"], function (exports_3, context_3) {
    "use strict";
    var validators_1, validateForm;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }
        ],
        execute: function () {
            exports_3("validateForm", validateForm = function (values) {
                console.log('validateForm called');
                console.log(values);
                var errors = {
                    email: validators_1.validateEmail(values.email),
                    firstName: validators_1.validatePresence('first name', values.firstName),
                    lastName: validators_1.validatePresence('last name', values.lastName),
                    typeAndApi: validators_1.validatePresence('auth type', values.typeAndApi),
                };
                if (!values.termsOfService) {
                    errors.termsOfService = 'You must agree to the terms of service to continue.';
                }
                // if (!anyApiSelected(values)) {
                //   errors.apis = 'Choose at least one API.';
                // }
                if (values.typeAndApi.startsWith('acg')) {
                    errors.oAuthApplicationType = validators_1.validateOAuthApplicationType(values.oAuthApplicationType);
                    errors.oAuthRedirectURI = validators_1.validateOAuthRedirectURI(values.oAuthRedirectURI);
                }
                if (values.typeAndApi.startsWith('ccg')) {
                    errors.oAuthPublicKey = validators_1.validatePresence('oAuthPublicKey', values.oAuthPublicKey);
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
            });
        }
    };
});
System.register("utils/toHtmlId", [], function (exports_4, context_4) {
    "use strict";
    var toHtmlId;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            // Converts a string to an html id suitable for use in an anchor link
            toHtmlId = function (phrase) { return phrase
                .replace(/^[^a-zA-Z]+/, '') // Ensure id starts with a letter
                .replace(/[^\w-_\s]+/g, '')
                .replace(/\s+/g, '-'); };
            exports_4("default", toHtmlId);
        }
    };
});
System.register("components/forms/TextField", ["classnames", "formik", "react", "utils/toHtmlId"], function (exports_5, context_5) {
    "use strict";
    var classnames_1, formik_1, react_1, toHtmlId_1, TextField;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (formik_1_1) {
                formik_1 = formik_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (toHtmlId_1_1) {
                toHtmlId_1 = toHtmlId_1_1;
            }
        ],
        execute: function () {
            TextField = function (_a) {
                var description = _a.description, className = _a.className, label = _a.label, secondLabel = _a.secondLabel, name = _a.name, _b = _a.required, required = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, placeholder = _a.placeholder, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onKeyDown = _a.onKeyDown, customFieldClass = _a.customFieldClass, children = _a.children, innerRef = _a.innerRef, maxLength = _a.maxLength, props = __rest(_a, ["description", "className", "label", "secondLabel", "name", "required", "type", "placeholder", "disabled", "onKeyDown", "customFieldClass", "children", "innerRef", "maxLength"]);
                var _e = formik_1.useFormikContext(), errors = _e.errors, touched = _e.touched;
                var shouldDisplayErrors = (!!errors[name] && !!touched[name]) || (!!formik_1.getIn(errors, name) && !!formik_1.getIn(touched, name));
                var containerClass = shouldDisplayErrors ? 'usa-input-error' : '';
                var labelClass = shouldDisplayErrors ? 'usa-input-error-label' : '';
                var validationClass = shouldDisplayErrors ? 'usa-input-error-message' : '';
                var fieldClass = classnames_1.default({
                    'vads-u-margin-top--1': props.as !== 'textarea',
                    'vads-u-margin-top--2p5': props.as === 'textarea',
                });
                var idReadyName = toHtmlId_1.default(name);
                var descriptionId = description ? "".concat(idReadyName, "FormFieldDescription") : '';
                var errorId = "".concat(idReadyName, "FormFieldError");
                var fieldId = "".concat(idReadyName, "FormField");
                return (react_1.default.createElement("div", { className: classnames_1.default('va-api-text-field', containerClass, className) },
                    react_1.default.createElement("label", { htmlFor: fieldId, className: classnames_1.default('vads-u-margin-top--0', labelClass) },
                        label,
                        secondLabel && react_1.default.createElement("p", { className: "second-label" }, secondLabel),
                        required && (react_1.default.createElement("span", { className: classnames_1.default('form-required-span', {
                                'second-label-required-span': secondLabel,
                            }) }, "(*Required)"))),
                    description && (react_1.default.createElement("div", { id: descriptionId, className: classnames_1.default('vads-u-color--gray', 'vads-u-margin-top--2') }, description)),
                    react_1.default.createElement("span", { id: errorId, className: validationClass, role: "alert" },
                        react_1.default.createElement(formik_1.ErrorMessage, { name: name })),
                    react_1.default.createElement(formik_1.Field, __assign({ id: fieldId, className: classnames_1.default(fieldClass, customFieldClass), name: name, required: required, "aria-describedby": "".concat(errorId, " ").concat(descriptionId), "aria-invalid": shouldDisplayErrors, type: props.as ? undefined : type, placeholder: placeholder, disabled: disabled, onKeyDown: onKeyDown, innerRef: innerRef, maxLength: maxLength }, props)),
                    children));
            };
            exports_5("default", TextField);
        }
    };
});
System.register("components/forms/FieldSet", ["classnames", "formik", "react", "utils/toHtmlId"], function (exports_6, context_6) {
    "use strict";
    var classnames_2, formik_2, react_2, toHtmlId_2, FieldSet;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (classnames_2_1) {
                classnames_2 = classnames_2_1;
            },
            function (formik_2_1) {
                formik_2 = formik_2_1;
            },
            function (react_2_1) {
                react_2 = react_2_1;
            },
            function (toHtmlId_2_1) {
                toHtmlId_2 = toHtmlId_2_1;
            }
        ],
        execute: function () {
            FieldSet = function (_a) {
                var className = _a.className, legend = _a.legend, legendClassName = _a.legendClassName, name = _a.name, _b = _a.required, required = _b === void 0 ? false : _b, children = _a.children, description = _a.description;
                var errors = formik_2.useFormikContext().errors;
                var shouldDisplayErrors = !!errors[name];
                var legendClass = shouldDisplayErrors ? 'usa-input-error-label' : legendClassName;
                var errorMessageClass = shouldDisplayErrors ? 'usa-input-error-message' : '';
                var idReadyName = toHtmlId_2.default(name);
                var errorId = "".concat(idReadyName, "FormFieldError");
                var legendId = "".concat(idReadyName, "Legend");
                return (react_2.default.createElement("div", { className: classnames_2.default({
                        'usa-input-error': shouldDisplayErrors,
                    }, className) },
                    react_2.default.createElement("fieldset", { "aria-labelledby": legendId },
                        react_2.default.createElement("legend", { id: legendId, className: classnames_2.default('vads-u-margin-top--0', legendClass) },
                            legend,
                            required && react_2.default.createElement("span", { className: "form-required-span" }, "(*Required)")),
                        description && (react_2.default.createElement("div", { className: classnames_2.default('vads-u-color--gray', 'vads-u-margin-top--2') }, description)),
                        react_2.default.createElement("span", { id: errorId, className: errorMessageClass, role: "alert" },
                            react_2.default.createElement(formik_2.ErrorMessage, { name: name })),
                        children)));
            };
            exports_6("default", FieldSet);
        }
    };
});
System.register("components/forms/CheckboxRadioField", ["classnames", "formik", "react", "utils/toHtmlId"], function (exports_7, context_7) {
    "use strict";
    var classnames_3, formik_3, react_3, toHtmlId_3, CheckboxRadioField;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (classnames_3_1) {
                classnames_3 = classnames_3_1;
            },
            function (formik_3_1) {
                formik_3 = formik_3_1;
            },
            function (react_3_1) {
                react_3 = react_3_1;
            },
            function (toHtmlId_3_1) {
                toHtmlId_3 = toHtmlId_3_1;
            }
        ],
        execute: function () {
            CheckboxRadioField = function (_a) {
                var name = _a.name, className = _a.className, label = _a.label, type = _a.type, innerRef = _a.innerRef, value = _a.value, description = _a.description, _b = _a.showError, showError = _b === void 0 ? false : _b, labelClassOverride = _a.labelClassOverride, props = __rest(_a, ["name", "className", "label", "type", "innerRef", "value", "description", "showError", "labelClassOverride"]);
                var _c = formik_3.useFormikContext(), errors = _c.errors, touched = _c.touched;
                var radioClass = type === 'radio' ? 'vads-u-margin--0 vads-u-padding-y--1 vads-u-padding-x--1p5' : '';
                radioClass = labelClassOverride !== null && labelClassOverride !== void 0 ? labelClassOverride : radioClass;
                var idReadyName = toHtmlId_3.default(name);
                var idReadyValue = toHtmlId_3.default(value !== null && value !== void 0 ? value : '');
                var shouldDisplayErrors = showError && !!formik_3.getIn(errors, name) && !!formik_3.getIn(touched, name);
                var errorId = "".concat(idReadyName, "FormFieldError");
                var fieldId = "".concat(idReadyName, "FormField").concat(idReadyValue);
                var descriptionId = "".concat(idReadyName, "FormFieldDescription");
                return (react_3.default.createElement("div", { className: classnames_3.default({
                        'usa-input-error': shouldDisplayErrors,
                    }, className) },
                    description && (react_3.default.createElement("div", { id: descriptionId }, description)),
                    showError && (react_3.default.createElement("span", { id: errorId, className: classnames_3.default({ 'usa-input-error-message': shouldDisplayErrors }), role: "alert" },
                        react_3.default.createElement(formik_3.ErrorMessage, { name: name }))),
                    react_3.default.createElement(formik_3.Field, __assign({ id: fieldId, name: name, type: type, value: value, innerRef: innerRef, "aria-invalid": shouldDisplayErrors, "aria-describedby": "".concat(showError ? errorId : '', " ").concat(description ? descriptionId : '') }, props)),
                    react_3.default.createElement("label", { htmlFor: fieldId, className: radioClass }, label)));
            };
            exports_7("default", CheckboxRadioField);
        }
    };
});
System.register("components/forms/TermsOfServiceCheckbox", ["classnames", "formik", "react", "components/forms/CheckboxRadioField"], function (exports_8, context_8) {
    "use strict";
    var classnames_4, formik_4, react_4, CheckboxRadioField_1, TermsOfServiceCheckbox;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (classnames_4_1) {
                classnames_4 = classnames_4_1;
            },
            function (formik_4_1) {
                formik_4 = formik_4_1;
            },
            function (react_4_1) {
                react_4 = react_4_1;
            },
            function (CheckboxRadioField_1_1) {
                CheckboxRadioField_1 = CheckboxRadioField_1_1;
            }
        ],
        execute: function () {
            TermsOfServiceCheckbox = function (_a) {
                var termsOfServiceUrl = _a.termsOfServiceUrl;
                var _b = formik_4.useFormikContext(), errors = _b.errors, touched = _b.touched;
                var hasTermsOfServiceError = !!errors.termsOfService && !!touched.termsOfService;
                return (react_4.default.createElement(CheckboxRadioField_1.default, { label: "I agree to the terms", labelClassOverride: "vads-u-margin-top--0", name: "termsOfService", required: true, type: "checkbox", description: react_4.default.createElement("p", { className: classnames_4.default({ 'vads-u-font-weight--bold': hasTermsOfServiceError }) },
                        "Review our",
                        ' ',
                        react_4.default.createElement("a", { href: termsOfServiceUrl, target: "_blank", rel: "noopener noreferrer" }, "terms of service"),
                        react_4.default.createElement("span", { className: "form-required-span" }, "(*Required)")), className: "vads-u-margin-top--4 terms-of-service-checkbox", showError: true }));
            };
            exports_8("default", TermsOfServiceCheckbox);
        }
    };
});
System.register("utils/makeRequest", ["uuid"], function (exports_9, context_9) {
    "use strict";
    var uuid_1, ResponseType, handleNonNetworkError, makeRequest;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (uuid_1_1) {
                uuid_1 = uuid_1_1;
            }
        ],
        execute: function () {
            (function (ResponseType) {
                ResponseType["BLOB"] = "BLOB";
                ResponseType["JSON"] = "JSON";
                ResponseType["TEXT"] = "TEXT";
            })(ResponseType || (ResponseType = {}));
            exports_9("ResponseType", ResponseType);
            // Handles non network errors (response not ok and status not 200) and logs them to Sentry
            handleNonNetworkError = function (url, requestId, type, response) { return __awaiter(void 0, void 0, void 0, function () {
                var responseBody;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            responseBody = null;
                            if (!((_a = response.headers.get('Content-type')) === null || _a === void 0 ? void 0 : _a.includes('application/json'))) return [3 /*break*/, 2];
                            return [4 /*yield*/, response.json()];
                        case 1:
                            responseBody = (_b.sent());
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, response.text()];
                        case 3:
                            responseBody = _b.sent();
                            _b.label = 4;
                        case 4: return [2 /*return*/, {
                                body: responseBody,
                                ok: response.ok,
                                status: response.status,
                            }];
                    }
                });
            }); };
            // Fetch common logic
            exports_9("makeRequest", makeRequest = function (url, requestInit, config) {
                if (config === void 0) { config = { responseType: ResponseType.JSON }; }
                return new Promise(function (resolve, reject) {
                    var request = new Request(url, requestInit);
                    var requestId = uuid_1.v4();
                    // Common Headers
                    request.headers.append('X-Request-ID', requestId);
                    fetch(request)
                        .then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                        var httpResponse, _a, _b, _c, errorResponse;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!response.ok) return [3 /*break*/, 7];
                                    httpResponse = {
                                        ok: response.ok,
                                        status: response.status,
                                    };
                                    if (!(config.responseType === ResponseType.JSON)) return [3 /*break*/, 2];
                                    _a = httpResponse;
                                    return [4 /*yield*/, response.json()];
                                case 1:
                                    _a.body = (_d.sent());
                                    _d.label = 2;
                                case 2:
                                    if (!(config.responseType === ResponseType.TEXT)) return [3 /*break*/, 4];
                                    _b = httpResponse;
                                    return [4 /*yield*/, response.text()];
                                case 3:
                                    _b.body = (_d.sent());
                                    _d.label = 4;
                                case 4:
                                    if (!(config.responseType === ResponseType.BLOB)) return [3 /*break*/, 6];
                                    _c = httpResponse;
                                    return [4 /*yield*/, response.blob()];
                                case 5:
                                    _c.body = (_d.sent());
                                    _d.label = 6;
                                case 6: return [2 /*return*/, resolve(httpResponse)];
                                case 7: return [4 /*yield*/, handleNonNetworkError(url, requestId, config.responseType, response)];
                                case 8:
                                    errorResponse = _d.sent();
                                    return [2 /*return*/, reject(errorResponse)];
                            }
                        });
                    }); })
                        .catch(function (error) { return reject(new Error(error)); });
                });
            });
        }
    };
});
System.register("components/OAuthAcgAppInfo", ["react", "classnames", "components/forms/FieldSet", "components/forms/CheckboxRadioField", "components/forms/TextField"], function (exports_10, context_10) {
    "use strict";
    var React, classnames_5, FieldSet_1, CheckboxRadioField_2, TextField_1, OAuthAcgAppInfo;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (classnames_5_1) {
                classnames_5 = classnames_5_1;
            },
            function (FieldSet_1_1) {
                FieldSet_1 = FieldSet_1_1;
            },
            function (CheckboxRadioField_2_1) {
                CheckboxRadioField_2 = CheckboxRadioField_2_1;
            },
            function (TextField_1_1) {
                TextField_1 = TextField_1_1;
            }
        ],
        execute: function () {
            OAuthAcgAppInfo = function (_a) {
                var acgPkceAuthUrl = _a.acgPkceAuthUrl;
                return (React.createElement("div", null,
                    React.createElement("div", { className: "vads-u-margin-top--4" },
                        "Apps that cannot securely hide a client secret must use the",
                        ' ',
                        React.createElement("a", { href: "https://oauth.net/2/pkce/", target: "_blank", rel: "noreferrer" }, "PKCE"),
                        ' ',
                        "OAuth flow. If your app is a native or mobile app, or if it uses the same client secret for all users, you'll get credentials for",
                        ' ',
                        React.createElement("a", { href: acgPkceAuthUrl, target: "_blank", rel: "noreferrer" }, "our PKCE OAuth flow"),
                        "."),
                    React.createElement(FieldSet_1.default, { className: classnames_5.default('vads-u-margin-top--4', 'vads-u-padding-left--1p5'), legend: "Can your application securely hide a client secret?", legendClassName: "legend-label", name: "oAuthApplicationType", required: true },
                        React.createElement(CheckboxRadioField_2.default, { type: "radio", label: "Yes", value: "web", name: "oAuthApplicationType", required: true }),
                        React.createElement(CheckboxRadioField_2.default, { type: "radio", label: "No", value: "native", name: "oAuthApplicationType", required: true })),
                    React.createElement(TextField_1.default, { label: "OAuth Redirect URI", name: "oAuthRedirectURI", placeholder: "http://localhost:8080/oauth/callback", required: true, className: classnames_5.default('vads-u-margin-top--4', 'oauth-uri-input', 'xsmall-screen:vads-l-col--10') })));
            };
            exports_10("OAuthAcgAppInfo", OAuthAcgAppInfo);
        }
    };
});
System.register("components/OAuthCcgAppInfo", ["react", "react-router-dom", "components/forms/TextField"], function (exports_11, context_11) {
    "use strict";
    var React, react_router_dom_1, TextField_2, OAuthCcgAppInfo;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (React_2) {
                React = React_2;
            },
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (TextField_2_1) {
                TextField_2 = TextField_2_1;
            }
        ],
        execute: function () {
            OAuthCcgAppInfo = function (_a) {
                var ccgPublicKeyUrl = _a.ccgPublicKeyUrl;
                return (React.createElement("div", null,
                    React.createElement("div", { className: "vads-u-margin-top--4" },
                        React.createElement("p", null,
                            "In order to access an API that uses OAuth 2.0 Client Credentials Grant, you must provide your public key.",
                            ' ',
                            React.createElement(react_router_dom_1.Link, { to: ccgPublicKeyUrl, target: "_blank" }, "Learn how to generate a public key."))),
                    React.createElement(TextField_2.default, { as: "textarea", placeholder: '{\n  "kty": "RSA",\n  "n": "mYi1wUpwkJ1QB8...",\n  "e": "AQAB",\n  "alg": "RS256",\n  "use": "sig"\n}', label: "OAuth public key", name: "oAuthPublicKey", required: true, className: "vads-u-margin-top--4" })));
            };
            exports_11("OAuthCcgAppInfo", OAuthCcgAppInfo);
        }
    };
});
System.register("components/InternalOnlyInfo", ["react", "classnames", "formik", "components/forms/TextField", "utils/validators"], function (exports_12, context_12) {
    "use strict";
    var React, classnames_6, formik_5, TextField_3, validators_2, InternalOnlyInfo;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (React_3) {
                React = React_3;
            },
            function (classnames_6_1) {
                classnames_6 = classnames_6_1;
            },
            function (formik_5_1) {
                formik_5 = formik_5_1;
            },
            function (TextField_3_1) {
                TextField_3 = TextField_3_1;
            },
            function (validators_2_1) {
                validators_2 = validators_2_1;
            }
        ],
        execute: function () {
            InternalOnlyInfo = function () {
                var _a = formik_5.useFormikContext(), errors = _a.errors, values = _a.values;
                var internalApiInfoName = 'internalApiInfo';
                var shouldDisplayInputError = !!errors[internalApiInfoName];
                return (React.createElement("div", { className: classnames_6.default('vads-u-padding-left--1p5') },
                    React.createElement("div", { className: "vads-u-font-weight--bold" }, "Internal to VA only:"),
                    React.createElement("div", null, "This API is for use by VA-authorized individuals and departments only. You cannot request an API key or use this API unless you have permission from VA."),
                    React.createElement("div", { className: classnames_6.default('xsmall-screen:vads-l-col--10', shouldDisplayInputError ? 'vads-u-margin-left--0p5' : '') },
                        React.createElement(TextField_3.default, { label: "Program name", name: "internalApiInfo.programName", required: true, className: "vads-u-margin-top--2" }),
                        React.createElement(TextField_3.default, { label: "Business/OIT sponsor email", name: "internalApiInfo.sponsorEmail", required: true, type: "email", className: "vads-u-margin-top--2" }),
                        !validators_2.isVaEmail(values.email) && (React.createElement(TextField_3.default, { label: "Your VA issued email", name: "internalApiInfo.vaEmail", required: true, type: "email", className: "vads-u-margin-top--2" })))));
            };
            exports_12("InternalOnlyInfo", InternalOnlyInfo);
        }
    };
});
System.register("index", ["react", "react-cookie", "formik", "validateForm", "components/forms/TextField", "components/forms/FieldSet", "components/forms/CheckboxRadioField", "react-router-dom", "components/forms/TermsOfServiceCheckbox", "utils/makeRequest", "components/OAuthAcgAppInfo", "components/OAuthCcgAppInfo", "components/InternalOnlyInfo"], function (exports_13, context_13) {
    "use strict";
    var react_5, react_cookie_1, formik_6, validateForm_1, TextField_4, FieldSet_2, CheckboxRadioField_3, react_router_dom_2, TermsOfServiceCheckbox_1, makeRequest_1, OAuthAcgAppInfo_1, OAuthCcgAppInfo_1, InternalOnlyInfo_1, initialValues, SandboxAccessForm;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (react_5_1) {
                react_5 = react_5_1;
            },
            function (react_cookie_1_1) {
                react_cookie_1 = react_cookie_1_1;
            },
            function (formik_6_1) {
                formik_6 = formik_6_1;
            },
            function (validateForm_1_1) {
                validateForm_1 = validateForm_1_1;
            },
            function (TextField_4_1) {
                TextField_4 = TextField_4_1;
            },
            function (FieldSet_2_1) {
                FieldSet_2 = FieldSet_2_1;
            },
            function (CheckboxRadioField_3_1) {
                CheckboxRadioField_3 = CheckboxRadioField_3_1;
            },
            function (react_router_dom_2_1) {
                react_router_dom_2 = react_router_dom_2_1;
            },
            function (TermsOfServiceCheckbox_1_1) {
                TermsOfServiceCheckbox_1 = TermsOfServiceCheckbox_1_1;
            },
            function (makeRequest_1_1) {
                makeRequest_1 = makeRequest_1_1;
            },
            function (OAuthAcgAppInfo_1_1) {
                OAuthAcgAppInfo_1 = OAuthAcgAppInfo_1_1;
            },
            function (OAuthCcgAppInfo_1_1) {
                OAuthCcgAppInfo_1 = OAuthCcgAppInfo_1_1;
            },
            function (InternalOnlyInfo_1_1) {
                InternalOnlyInfo_1 = InternalOnlyInfo_1_1;
            }
        ],
        execute: function () {
            initialValues = {
                description: '',
                email: '',
                firstName: '',
                internalApiInfo: {
                    programName: '',
                    sponsorEmail: '',
                    vaEmail: '',
                },
                lastName: '',
                oAuthApplicationType: '',
                oAuthPublicKey: '',
                oAuthRedirectURI: '',
                organization: '',
                termsOfService: false,
                typeAndApi: '',
            };
            SandboxAccessForm = function (_a) {
                var apiIdentifier = _a.apiIdentifier, authTypes = _a.authTypes, onFailure = _a.onFailure, onSuccess = _a.onSuccess, urls = _a.urls, internalOnly = _a.internalOnly;
                var _b = react_5.useState(), authType = _b[0], setAuthType = _b[1];
                var setCookie = react_cookie_1.useCookies(['CSRF-TOKEN'])[1];
                var acgPkceAuthUrl = urls.acgPkceAuthUrl, ccgPublicKeyUrl = urls.ccgPublicKeyUrl, postUrl = urls.postUrl, termsOfServiceUrl = urls.termsOfServiceUrl;
                var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
                    var applicationBody, forgeryToken, response, json, error_1, errors;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                applicationBody = __assign(__assign({}, values), { apis: values.typeAndApi });
                                forgeryToken = 'CsrfBlocker';
                                if (!internalOnly) {
                                    delete applicationBody.internalApiInfo;
                                }
                                if (applicationBody.internalApiInfo && !applicationBody.internalApiInfo.vaEmail) {
                                    applicationBody.internalApiInfo.vaEmail = applicationBody.email;
                                }
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 3, , 4]);
                                setCookie('CSRF-TOKEN', forgeryToken, {
                                    path: postUrl,
                                    sameSite: 'strict',
                                    secure: true,
                                });
                                return [4 /*yield*/, makeRequest_1.makeRequest(postUrl, {
                                        body: JSON.stringify(applicationBody),
                                        headers: {
                                            'X-Csrf-Token': forgeryToken,
                                            accept: 'application/json',
                                            'content-type': 'application/json',
                                        },
                                        method: 'POST',
                                    }, { responseType: makeRequest_1.ResponseType.JSON })];
                            case 2:
                                response = _c.sent();
                                json = response.body;
                                if (!json.token && !json.clientID && !json.email) {
                                    throw Error('Developer Application endpoint returned successful response status with an invalid response body');
                                }
                                onSuccess(__assign(__assign({}, json), { apis: [values.typeAndApi], email: (_a = json.email) !== null && _a !== void 0 ? _a : values.email }));
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _c.sent();
                                errors = (_b = error_1.body.errors) !== null && _b !== void 0 ? _b : [];
                                onFailure(errors);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                var authTypeChange = function (event) {
                    var target = event.target;
                    if (target.name === 'typeAndApi') {
                        switch (target.id) {
                            case 'typeAndApiFormFieldacgclaims':
                                setAuthType('acg');
                                break;
                            case 'typeAndApiFormFieldccgclaims':
                                setAuthType('ccg');
                                break;
                            case 'typeAndApiFormFieldapikeyclaims':
                                setAuthType('apikey');
                                break;
                            default:
                        }
                    }
                };
                if (authTypes.length === 1 && authType !== authTypes[0]) {
                    setAuthType(authTypes[0]);
                    initialValues.typeAndApi = "".concat(authTypes[0], "/").concat(apiIdentifier);
                }
                return (react_5.default.createElement(react_router_dom_2.BrowserRouter, null,
                    react_5.default.createElement(formik_6.Formik, { initialValues: initialValues, onSubmit: handleSubmit, validate: validateForm_1.validateForm, validateOnBlur: false, validateOnChange: false }, function (_a) {
                        var isSubmitting = _a.isSubmitting, values = _a.values;
                        var handleSubmitButtonClick = function () {
                            setTimeout(function () {
                                var errorElements = document.querySelectorAll('[aria-invalid=true]');
                                if (errorElements.length > 0) {
                                    errorElements[0].focus();
                                }
                            }, 0);
                        };
                        return (react_5.default.createElement(formik_6.Form, { noValidate: true, onChange: authTypeChange },
                            react_5.default.createElement(TextField_4.default, { label: "First name", name: "firstName", required: true, className: "vads-u-margin-top--4" }),
                            react_5.default.createElement(TextField_4.default, { label: "Last name", name: "lastName", required: true, className: "vads-u-margin-top--4" }),
                            react_5.default.createElement(TextField_4.default, { label: "Email", name: "email", type: "email", required: true, className: "vads-u-margin-top--4" }),
                            authTypes.length > 1 && (react_5.default.createElement(FieldSet_2.default, { className: "vads-u-margin-top--4", legend: "Choose your auth type", name: "typeAndApi", required: true },
                                authTypes.includes('apikey') && (react_5.default.createElement(CheckboxRadioField_3.default, { type: "radio", label: "API Key", name: "authType", value: "apikey/".concat(apiIdentifier), required: true })),
                                authTypes.includes('acg') && (react_5.default.createElement(CheckboxRadioField_3.default, { type: "radio", label: "Authorization Code Flow", name: "typeAndApi", value: "acg/".concat(apiIdentifier), required: true })),
                                authTypes.includes('ccg') && (react_5.default.createElement(CheckboxRadioField_3.default, { type: "radio", label: "Client Credentials Grant", name: "typeAndApi", value: "ccg/".concat(apiIdentifier), required: true })))),
                            authType === 'acg' && react_5.default.createElement(OAuthAcgAppInfo_1.OAuthAcgAppInfo, { acgPkceAuthUrl: acgPkceAuthUrl }),
                            authType === 'ccg' && react_5.default.createElement(OAuthCcgAppInfo_1.OAuthCcgAppInfo, { ccgPublicKeyUrl: ccgPublicKeyUrl }),
                            internalOnly && react_5.default.createElement(InternalOnlyInfo_1.InternalOnlyInfo, null),
                            react_5.default.createElement(TextField_4.default, { as: "textarea", label: "Briefly describe how your organization will use VA APIs:", name: "description", className: "vads-u-margin-top--4" }),
                            react_5.default.createElement(TermsOfServiceCheckbox_1.default, { termsOfServiceUrl: termsOfServiceUrl }),
                            react_5.default.createElement("button", { onClick: handleSubmitButtonClick, type: "submit", className: "vads-u-width--auto" }, isSubmitting ? 'Sending...' : 'Submit')));
                    })));
            };
            exports_13("SandboxAccessForm", SandboxAccessForm);
        }
    };
});
System.register("schemas", ["prop-types"], function (exports_14, context_14) {
    "use strict";
    var PropTypes, ApiDocSourcePropType, ApiDeactivationInfoPropType, ProdAccessFormSteps, ApiDescriptionPropType, VaInternalOnly;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (PropTypes_1) {
                PropTypes = PropTypes_1;
            }
        ],
        execute: function () {
            exports_14("ApiDocSourcePropType", ApiDocSourcePropType = PropTypes.shape({
                apiIntro: PropTypes.any,
                key: PropTypes.string,
                label: PropTypes.string,
                metadataUrl: PropTypes.string,
                openApiUrl: PropTypes.string,
            }));
            exports_14("ApiDeactivationInfoPropType", ApiDeactivationInfoPropType = PropTypes.shape({
                deactivationContent: PropTypes.any.isRequired,
                deactivationDate: PropTypes.any.isRequired,
                deprecationContent: PropTypes.any.isRequired,
                deprecationDate: PropTypes.any.isRequired,
            }));
            /**
             * This enum represents the prod access form from the access of an API. It is referring to the
             * number of steps an API has, not an individual step.
             */
            (function (ProdAccessFormSteps) {
                ProdAccessFormSteps[ProdAccessFormSteps["Two"] = 2] = "Two";
                ProdAccessFormSteps[ProdAccessFormSteps["Three"] = 3] = "Three";
                ProdAccessFormSteps[ProdAccessFormSteps["Four"] = 4] = "Four";
            })(ProdAccessFormSteps || (ProdAccessFormSteps = {}));
            exports_14("ProdAccessFormSteps", ProdAccessFormSteps);
            exports_14("ApiDescriptionPropType", ApiDescriptionPropType = PropTypes.shape({
                deactivationInfo: ApiDeactivationInfoPropType,
                description: PropTypes.string.isRequired,
                docSources: PropTypes.arrayOf(ApiDocSourcePropType).isRequired,
                enabledByDefault: PropTypes.bool.isRequired,
                multiOpenAPIIntro: PropTypes.any,
                name: PropTypes.string.isRequired,
                oAuth: PropTypes.bool,
                releaseNotes: PropTypes.any.isRequired,
                urlFragment: PropTypes.string.isRequired,
            }));
            (function (VaInternalOnly) {
                VaInternalOnly["StrictlyInternal"] = "StrictlyInternal";
                VaInternalOnly["AdditionalDetails"] = "AdditionalDetails";
                VaInternalOnly["FlagOnly"] = "FlagOnly";
            })(VaInternalOnly || (VaInternalOnly = {}));
            exports_14("VaInternalOnly", VaInternalOnly);
        }
    };
});
