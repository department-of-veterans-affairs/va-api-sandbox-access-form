"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var toHtmlId_1 = __importDefault(require("../../utils/toHtmlId"));
var FieldSet = function (_a) {
    var className = _a.className, legend = _a.legend, legendClassName = _a.legendClassName, name = _a.name, _b = _a.required, required = _b === void 0 ? false : _b, children = _a.children, description = _a.description;
    var errors = (0, formik_1.useFormikContext)().errors;
    var shouldDisplayErrors = !!errors[name];
    var legendClass = shouldDisplayErrors ? 'usa-input-error-label' : legendClassName;
    var errorMessageClass = shouldDisplayErrors ? 'usa-input-error-message' : '';
    var idReadyName = (0, toHtmlId_1.default)(name);
    var errorId = "".concat(idReadyName, "FormFieldError");
    var legendId = "".concat(idReadyName, "Legend");
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)({
            'usa-input-error': shouldDisplayErrors,
        }, className) },
        react_1.default.createElement("fieldset", { "aria-labelledby": legendId },
            react_1.default.createElement("legend", { id: legendId, className: (0, classnames_1.default)('vads-u-margin-top--0', legendClass) },
                legend,
                required && react_1.default.createElement("span", { className: "form-required-span" }, "(*Required)")),
            description && (react_1.default.createElement("div", { className: (0, classnames_1.default)('vads-u-color--gray', 'vads-u-margin-top--2') }, description)),
            react_1.default.createElement("span", { id: errorId, className: errorMessageClass, role: "alert" },
                react_1.default.createElement(formik_1.ErrorMessage, { name: name })),
            children)));
};
exports.default = FieldSet;
