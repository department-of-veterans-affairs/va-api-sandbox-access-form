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
var TextField = function (_a) {
    var description = _a.description, className = _a.className, label = _a.label, secondLabel = _a.secondLabel, name = _a.name, _b = _a.required, required = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, placeholder = _a.placeholder, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onKeyDown = _a.onKeyDown, customFieldClass = _a.customFieldClass, children = _a.children, innerRef = _a.innerRef, maxLength = _a.maxLength, props = __rest(_a, ["description", "className", "label", "secondLabel", "name", "required", "type", "placeholder", "disabled", "onKeyDown", "customFieldClass", "children", "innerRef", "maxLength"]);
    var _e = (0, formik_1.useFormikContext)(), errors = _e.errors, touched = _e.touched;
    var shouldDisplayErrors = (!!errors[name] && !!touched[name]) || (!!(0, formik_1.getIn)(errors, name) && !!(0, formik_1.getIn)(touched, name));
    var containerClass = shouldDisplayErrors ? 'usa-input-error' : '';
    var labelClass = shouldDisplayErrors ? 'usa-input-error-label' : '';
    var validationClass = shouldDisplayErrors ? 'usa-input-error-message' : '';
    var fieldClass = (0, classnames_1.default)({
        'vads-u-margin-top--1': props.as !== 'textarea',
        'vads-u-margin-top--2p5': props.as === 'textarea',
    });
    var idReadyName = (0, toHtmlId_1.default)(name);
    var descriptionId = description ? "".concat(idReadyName, "FormFieldDescription") : '';
    var errorId = "".concat(idReadyName, "FormFieldError");
    var fieldId = "".concat(idReadyName, "FormField");
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)('va-api-text-field', containerClass, className) },
        react_1.default.createElement("label", { htmlFor: fieldId, className: (0, classnames_1.default)('vads-u-margin-top--0', labelClass) },
            label,
            secondLabel && react_1.default.createElement("p", { className: "second-label" }, secondLabel),
            required && (react_1.default.createElement("span", { className: (0, classnames_1.default)('form-required-span', {
                    'second-label-required-span': secondLabel,
                }) }, "(*Required)"))),
        description && (react_1.default.createElement("div", { id: descriptionId, className: (0, classnames_1.default)('vads-u-color--gray', 'vads-u-margin-top--2') }, description)),
        react_1.default.createElement("span", { id: errorId, className: validationClass, role: "alert" },
            react_1.default.createElement(formik_1.ErrorMessage, { name: name })),
        react_1.default.createElement(formik_1.Field, __assign({ id: fieldId, className: (0, classnames_1.default)(fieldClass, customFieldClass), name: name, required: required, "aria-describedby": "".concat(errorId, " ").concat(descriptionId), "aria-invalid": shouldDisplayErrors, type: props.as ? undefined : type, placeholder: placeholder, disabled: disabled, onKeyDown: onKeyDown, innerRef: innerRef, maxLength: maxLength }, props)),
        children));
};
exports.default = TextField;
