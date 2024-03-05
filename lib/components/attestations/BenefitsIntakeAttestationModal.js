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
exports.BenefitsIntakeAttestationModal = void 0;
var react_1 = __importStar(require("react"));
var formik_1 = require("formik");
var react_bindings_1 = require("@department-of-veterans-affairs/component-library/dist/react-bindings");
var CheckboxRadioField_1 = __importDefault(require("../forms/CheckboxRadioField"));
var BenefitsIntakeAttestationModal = function () {
    var _a = (0, react_1.useState)(false), showBenefitsIntakeAttestation = _a[0], setShowBenefitsIntakeAttestation = _a[1];
    var _b = (0, formik_1.useFormikContext)(), errors = _b.errors, isSubmitting = _b.isSubmitting, values = _b.values;
    (0, react_1.useEffect)(function () {
        if (values.typeAndApi === 'apikey/benefits' &&
            errors.benefitsIntakeAttestation &&
            !values.benefitsIntakeAttestation &&
            values.termsOfService &&
            isSubmitting) {
            setShowBenefitsIntakeAttestation(true);
        }
    }, [errors.benefitsIntakeAttestation, isSubmitting]);
    return (react_1.default.createElement(react_bindings_1.VaModal, { clickToClose: true, id: "benefits-intake-attestation-modal", large: true, modalTitle: "Requirements for the Benefits Intake API", onCloseEvent: function () { return setShowBenefitsIntakeAttestation(false); }, visible: showBenefitsIntakeAttestation, primaryButtonText: "Confirm", onPrimaryButtonClick: function () { return setShowBenefitsIntakeAttestation(false); }, secondaryButtonText: "Cancel", onSecondaryButtonClick: function () { return setShowBenefitsIntakeAttestation(false); }, uswds: true },
        react_1.default.createElement("p", null,
            "By accessing or using the ",
            react_1.default.createElement("span", { className: "vads-u-font-weight--bold" }, "Benefits Intake API"),
            " in the production environment provided by VA, you must affirm and attest that the end user of your application is:"),
        react_1.default.createElement("ol", null,
            react_1.default.createElement("li", null, "A VA benefits claimant;"),
            react_1.default.createElement("li", null, "An individual accredited by VA to prepare, present, and prosecute VA benefits claims;"),
            react_1.default.createElement("li", null, "An accredited representative of a Veteran Service Organization (VSO) recognized by VA to represent VA benefits claimants; or"),
            react_1.default.createElement("li", null, "A person authorized by the VA secretary to prepare, present, and prosecute a VA benefits claim pursuant to 38 C.F.R. \u00A7 14.630.")),
        react_1.default.createElement("p", null, "You must agree that this API will not be accessed by individuals or entities who do not meet the specified criteria above, and to limit your application's scope as authorized and defined by VA. Any expansion of your application's scope requires prior approval from VA."),
        react_1.default.createElement("p", null, "Violation of these terms may result in revocation of API access and possible legal action. In addition, a willfully false statement or certification is a criminal offense and is punishable by law. See 18 U.S.C. \u00A7 1001."),
        react_1.default.createElement(CheckboxRadioField_1.default, { className: "vads-u-margin-x--2p5", type: "checkbox", label: "I attest that I have read, understood, and agree to the terms above.", name: "benefitsIntakeApiAttestation", required: true, showError: true })));
};
exports.BenefitsIntakeAttestationModal = BenefitsIntakeAttestationModal;
