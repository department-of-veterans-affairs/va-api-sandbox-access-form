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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var toHtmlId_1 = __importDefault(require("../../utils/toHtmlId"));
var CheckboxRadioField = function (_a) {
    var name = _a.name, className = _a.className, label = _a.label, type = _a.type, innerRef = _a.innerRef, value = _a.value, description = _a.description, _b = _a.showError, showError = _b === void 0 ? false : _b, labelClassOverride = _a.labelClassOverride, props = __rest(_a, ["name", "className", "label", "type", "innerRef", "value", "description", "showError", "labelClassOverride"]);
    var _c = (0, formik_1.useFormikContext)(), errors = _c.errors, touched = _c.touched;
    var radioClass = type === 'radio' ? 'vads-u-margin--0 vads-u-padding-top--1' : '';
    radioClass = labelClassOverride !== null && labelClassOverride !== void 0 ? labelClassOverride : radioClass;
    var idReadyName = (0, toHtmlId_1.default)(name);
    var idReadyValue = (0, toHtmlId_1.default)(value !== null && value !== void 0 ? value : '');
    var shouldDisplayErrors = showError && !!(0, formik_1.getIn)(errors, name) && !!(0, formik_1.getIn)(touched, name);
    var errorId = "".concat(idReadyName, "FormFieldError");
    var fieldId = "".concat(idReadyName, "FormField").concat(idReadyValue);
    var descriptionId = "".concat(idReadyName, "FormFieldDescription");
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)({
            'usa-input-error': shouldDisplayErrors,
        }, className) },
        description && (react_1.default.createElement("div", { id: descriptionId }, description)),
        showError && (react_1.default.createElement("span", { id: errorId, className: (0, classnames_1.default)({ 'usa-input-error-message': shouldDisplayErrors }), role: "alert" },
            react_1.default.createElement(formik_1.ErrorMessage, { name: name }))),
        react_1.default.createElement(formik_1.Field, __assign({ id: fieldId, name: name, type: type, value: value, innerRef: innerRef, "aria-invalid": shouldDisplayErrors, "aria-describedby": "".concat(showError ? errorId : '', " ").concat(description ? descriptionId : '') }, props)),
        react_1.default.createElement("label", { htmlFor: fieldId, className: radioClass }, label)));
};
exports.default = CheckboxRadioField;
