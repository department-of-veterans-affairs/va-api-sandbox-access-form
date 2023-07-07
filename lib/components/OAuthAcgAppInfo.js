"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthAcgAppInfo = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var FieldSet_1 = __importDefault(require("./forms/FieldSet"));
var CheckboxRadioField_1 = __importDefault(require("./forms/CheckboxRadioField"));
var TextField_1 = __importDefault(require("./forms/TextField"));
var OAuthAcgAppInfo = function (_a) {
    var acgPkceAuthUrl = _a.acgPkceAuthUrl, multipleTypes = _a.multipleTypes;
    return (React.createElement("div", { className: (0, classnames_1.default)('sandbox-access-form-oauth-details', {
            'multiple-types': multipleTypes,
        }) },
        React.createElement("h3", null, "Authorization Code Grant"),
        React.createElement("div", { className: "vads-u-margin-top--2" },
            "Apps that cannot securely hide a client secret must use the",
            ' ',
            React.createElement("a", { href: "https://oauth.net/2/pkce/", target: "_blank", rel: "noreferrer" }, "PKCE"),
            ' ',
            "OAuth flow. If your app is a native or mobile app, or if it uses the same client secret for all users, you'll get credentials for",
            ' ',
            React.createElement("a", { href: acgPkceAuthUrl, target: "_blank", rel: "noreferrer" }, "our PKCE OAuth flow"),
            "."),
        React.createElement(FieldSet_1.default, { className: "vads-u-margin-top--2", legend: "Can your application securely hide a client secret?", legendClassName: "legend-label", name: "oAuthApplicationType", required: true },
            React.createElement(CheckboxRadioField_1.default, { type: "radio", label: "Yes", value: "web", name: "oAuthApplicationType", required: true }),
            React.createElement(CheckboxRadioField_1.default, { type: "radio", label: "No", value: "native", name: "oAuthApplicationType", required: true })),
        React.createElement(TextField_1.default, { label: "OAuth Redirect URI", name: "oAuthRedirectURI", placeholder: "http://localhost:8080/oauth/callback", required: true, className: (0, classnames_1.default)('vads-u-margin-top--2', 'oauth-uri-input', 'xsmall-screen:vads-l-col--10') })));
};
exports.OAuthAcgAppInfo = OAuthAcgAppInfo;
