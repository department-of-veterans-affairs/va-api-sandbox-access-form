"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxAccessForm = void 0;
var react_1 = __importStar(require("react"));
var react_cookie_1 = require("react-cookie");
var formik_1 = require("formik");
var validateForm_1 = require("./validateForm");
var TextField_1 = __importDefault(require("./components/forms/TextField"));
var FieldSet_1 = __importDefault(require("./components/forms/FieldSet"));
var CheckboxRadioField_1 = __importDefault(require("./components/forms/CheckboxRadioField"));
var TermsOfServiceCheckbox_1 = __importDefault(require("./components/forms/TermsOfServiceCheckbox"));
var makeRequest_1 = require("./utils/makeRequest");
var OAuthAcgAppInfo_1 = require("./components/OAuthAcgAppInfo");
var OAuthCcgAppInfo_1 = require("./components/OAuthCcgAppInfo");
var initialValues = {
    description: '',
    email: '',
    firstName: '',
    lastName: '',
    oAuthApplicationType: '',
    oAuthPublicKey: '',
    oAuthRedirectURI: '',
    organization: '',
    termsOfService: false,
    typeAndApi: '',
};
var SandboxAccessForm = function (_a) {
    var apiIdentifier = _a.apiIdentifier, authTypes = _a.authTypes, onFailure = _a.onFailure, onSuccess = _a.onSuccess, urls = _a.urls;
    var _b = (0, react_1.useState)(), authType = _b[0], setAuthType = _b[1];
    var setCookie = (0, react_cookie_1.useCookies)(['CSRF-TOKEN'])[1];
    var acgPkceAuthUrl = urls.acgPkceAuthUrl, ccgPublicKeyUrl = urls.ccgPublicKeyUrl, postUrl = urls.postUrl, termsOfServiceUrl = urls.termsOfServiceUrl;
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var applicationBody, forgeryToken, response, json, error_1, errors;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    applicationBody = __assign(__assign({}, values), { apis: values.typeAndApi });
                    forgeryToken = 'CsrfBlocker';
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    setCookie('CSRF-TOKEN', forgeryToken, {
                        path: postUrl,
                        sameSite: 'strict',
                        secure: true,
                    });
                    return [4 /*yield*/, (0, makeRequest_1.makeRequest)(postUrl, {
                            body: JSON.stringify(applicationBody),
                            headers: {
                                'X-Csrf-Token': forgeryToken,
                                accept: 'application/json',
                                'content-type': 'application/json',
                            },
                            method: 'POST',
                        }, { responseType: makeRequest_1.ResponseType.JSON })];
                case 2:
                    response = _d.sent();
                    json = response.body;
                    if (!json.token && !json.clientID && !json.email) {
                        throw Error('Developer Application endpoint returned successful response status with an invalid response body');
                    }
                    onSuccess(__assign(__assign({}, json), { apis: [values.typeAndApi], email: (_a = json.email) !== null && _a !== void 0 ? _a : values.email }));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _d.sent();
                    errors = (_c = (_b = error_1.body) === null || _b === void 0 ? void 0 : _b.errors) !== null && _c !== void 0 ? _c : [];
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
                case "typeAndApiFormFieldacg".concat(apiIdentifier):
                    setAuthType('acg');
                    break;
                case "typeAndApiFormFieldccg".concat(apiIdentifier):
                    setAuthType('ccg');
                    break;
                case "typeAndApiFormFieldapikey".concat(apiIdentifier):
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
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: handleSubmit, validate: validateForm_1.validateForm, validateOnBlur: false, validateOnChange: false }, function (_a) {
        var isSubmitting = _a.isSubmitting;
        var handleSubmitButtonClick = function () {
            setTimeout(function () {
                var errorElements = document.querySelectorAll('[aria-invalid=true]');
                if (errorElements.length > 0) {
                    errorElements[0].focus();
                }
            }, 0);
        };
        return (react_1.default.createElement(formik_1.Form, { noValidate: true, onChange: authTypeChange },
            react_1.default.createElement(TextField_1.default, { label: "First name", name: "firstName", required: true, className: "vads-u-margin-top--4" }),
            react_1.default.createElement(TextField_1.default, { label: "Last name", name: "lastName", required: true, className: "vads-u-margin-top--4" }),
            react_1.default.createElement(TextField_1.default, { label: "Email address", name: "email", type: "email", required: true, className: "vads-u-margin-top--4" }),
            react_1.default.createElement(TextField_1.default, { as: "textarea", label: "Briefly describe your project and how you'll use this API.", name: "description", className: "vads-u-margin-top--4" }),
            authTypes.length > 1 && (react_1.default.createElement(FieldSet_1.default, { className: "vads-u-margin-top--4", legend: "Choose your auth type", name: "typeAndApi", required: true },
                authTypes.includes('apikey') && (react_1.default.createElement(CheckboxRadioField_1.default, { type: "radio", label: "API Key", name: "typeAndApi", value: "apikey/".concat(apiIdentifier), required: true })),
                authTypes.includes('acg') && (react_1.default.createElement(CheckboxRadioField_1.default, { type: "radio", label: "Authorization Code Grant", name: "typeAndApi", value: "acg/".concat(apiIdentifier), required: true })),
                authTypes.includes('ccg') && (react_1.default.createElement(CheckboxRadioField_1.default, { type: "radio", label: "Client Credentials Grant", name: "typeAndApi", value: "ccg/".concat(apiIdentifier), required: true })))),
            authType === 'acg' && (react_1.default.createElement(OAuthAcgAppInfo_1.OAuthAcgAppInfo, { acgPkceAuthUrl: acgPkceAuthUrl, multipleTypes: authTypes.length > 1 })),
            authType === 'ccg' && (react_1.default.createElement(OAuthCcgAppInfo_1.OAuthCcgAppInfo, { ccgPublicKeyUrl: ccgPublicKeyUrl, multipleTypes: authTypes.length > 1 })),
            react_1.default.createElement(TermsOfServiceCheckbox_1.default, { termsOfServiceUrl: termsOfServiceUrl }),
            react_1.default.createElement("button", { onClick: handleSubmitButtonClick, type: "submit", className: "vads-u-width--auto" }, isSubmitting ? 'Sending...' : 'Submit')));
    }));
};
exports.SandboxAccessForm = SandboxAccessForm;
