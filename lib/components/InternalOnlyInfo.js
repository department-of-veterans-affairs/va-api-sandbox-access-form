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
exports.InternalOnlyInfo = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var formik_1 = require("formik");
var TextField_1 = __importDefault(require("./forms/TextField"));
var validators_1 = require("../utils/validators");
var InternalOnlyInfo = function () {
    var _a = (0, formik_1.useFormikContext)(), errors = _a.errors, values = _a.values;
    var internalApiInfoName = 'internalApiInfo';
    var shouldDisplayInputError = !!errors[internalApiInfoName];
    return (React.createElement("div", { className: (0, classnames_1.default)('vads-u-padding-left--1p5') },
        React.createElement("div", { className: "vads-u-font-weight--bold" }, "Internal to VA only:"),
        React.createElement("div", null, "This API is for use by VA-authorized individuals and departments only. You cannot request an API key or use this API unless you have permission from VA."),
        React.createElement("div", { className: (0, classnames_1.default)('xsmall-screen:vads-l-col--10', shouldDisplayInputError ? 'vads-u-margin-left--0p5' : '') },
            React.createElement(TextField_1.default, { label: "Program name", name: "internalApiInfo.programName", required: true, className: "vads-u-margin-top--2" }),
            React.createElement(TextField_1.default, { label: "Business/OIT sponsor email", name: "internalApiInfo.sponsorEmail", required: true, type: "email", className: "vads-u-margin-top--2" }),
            !(0, validators_1.isVaEmail)(values.email) && (React.createElement(TextField_1.default, { label: "Your VA issued email", name: "internalApiInfo.vaEmail", required: true, type: "email", className: "vads-u-margin-top--2" })))));
};
exports.InternalOnlyInfo = InternalOnlyInfo;
