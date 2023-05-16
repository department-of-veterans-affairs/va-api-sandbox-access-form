"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var CheckboxRadioField_1 = __importDefault(require("./CheckboxRadioField"));
var TermsOfServiceCheckbox = function (_a) {
    var termsOfServiceUrl = _a.termsOfServiceUrl;
    var _b = (0, formik_1.useFormikContext)(), errors = _b.errors, touched = _b.touched;
    var hasTermsOfServiceError = !!errors.termsOfService && !!touched.termsOfService;
    return (react_1.default.createElement(CheckboxRadioField_1.default, { label: "I agree to the terms", labelClassOverride: "vads-u-margin-top--0", name: "termsOfService", required: true, type: "checkbox", description: react_1.default.createElement("p", { className: (0, classnames_1.default)({ 'vads-u-font-weight--bold': hasTermsOfServiceError }) },
            "Review our",
            ' ',
            react_1.default.createElement("a", { href: termsOfServiceUrl, target: "_blank", rel: "noopener noreferrer" }, "terms of service"),
            react_1.default.createElement("span", { className: "form-required-span" }, "(*Required)")), className: "vads-u-margin-top--4 terms-of-service-checkbox", showError: true }));
};
exports.default = TermsOfServiceCheckbox;
