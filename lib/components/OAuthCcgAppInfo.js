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
exports.OAuthCcgAppInfo = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_router_dom_1 = require("react-router-dom");
var TextField_1 = __importDefault(require("./forms/TextField"));
var OAuthCcgAppInfo = function (_a) {
    var ccgPublicKeyUrl = _a.ccgPublicKeyUrl, multipleTypes = _a.multipleTypes;
    return (React.createElement("div", { className: (0, classnames_1.default)('sandbox-access-form-oauth-details', {
            'multiple-types': multipleTypes,
        }) },
        React.createElement("h3", null, "Client Credentials Grant"),
        React.createElement("div", { className: "vads-u-margin-top--2" },
            React.createElement("p", null,
                "In order to access an API that uses OAuth 2.0 Client Credentials Grant, you must provide your public key.",
                ' ',
                React.createElement(react_router_dom_1.Link, { to: ccgPublicKeyUrl, target: "_blank" }, "Learn how to generate a public key."))),
        React.createElement(TextField_1.default, { as: "textarea", placeholder: '{\n  "kty": "RSA",\n  "n": "mYi1wUpwkJ1QB8..."\n  ...\n}', label: "OAuth public key", name: "oAuthPublicKey", required: true, className: "vads-u-margin-top--2" }),
        React.createElement("p", null,
            React.createElement("strong", null, "Important:"),
            " To get production access using client credentials grant, you must either work for the VA or have specific VA agreements in place. If you have questions,",
            ' ',
            React.createElement("a", { href: "https://developer.va.gov/support/contact-us" }, "Contact us"),
            ".")));
};
exports.OAuthCcgAppInfo = OAuthCcgAppInfo;
