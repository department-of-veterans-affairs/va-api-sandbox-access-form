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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaInternalOnly = exports.ApiDescriptionPropType = exports.ProdAccessFormSteps = exports.ApiDeactivationInfoPropType = exports.ApiDocSourcePropType = void 0;
/**
 * This file contains all of the interfaces that currently make up the API definition schema.
 * Any future additions to this schema should be defined here as well. In the future, we will
 * likely move this data to a non-Typescript location, i.e. a database. As a result, we should
 * also not add any more React components to these schema definitions, as that will add to the
 * work that we need to do to convert this schema to a database-based system.
 */
var PropTypes = __importStar(require("prop-types"));
exports.ApiDocSourcePropType = PropTypes.shape({
    apiIntro: PropTypes.any,
    key: PropTypes.string,
    label: PropTypes.string,
    metadataUrl: PropTypes.string,
    openApiUrl: PropTypes.string,
});
exports.ApiDeactivationInfoPropType = PropTypes.shape({
    deactivationContent: PropTypes.any.isRequired,
    deactivationDate: PropTypes.any.isRequired,
    deprecationContent: PropTypes.any.isRequired,
    deprecationDate: PropTypes.any.isRequired,
});
/**
 * This enum represents the prod access form from the access of an API. It is referring to the
 * number of steps an API has, not an individual step.
 */
var ProdAccessFormSteps;
(function (ProdAccessFormSteps) {
    ProdAccessFormSteps[ProdAccessFormSteps["Two"] = 2] = "Two";
    ProdAccessFormSteps[ProdAccessFormSteps["Three"] = 3] = "Three";
    ProdAccessFormSteps[ProdAccessFormSteps["Four"] = 4] = "Four";
})(ProdAccessFormSteps || (exports.ProdAccessFormSteps = ProdAccessFormSteps = {}));
exports.ApiDescriptionPropType = PropTypes.shape({
    deactivationInfo: exports.ApiDeactivationInfoPropType,
    description: PropTypes.string.isRequired,
    docSources: PropTypes.arrayOf(exports.ApiDocSourcePropType).isRequired,
    enabledByDefault: PropTypes.bool.isRequired,
    multiOpenAPIIntro: PropTypes.any,
    name: PropTypes.string.isRequired,
    oAuth: PropTypes.bool,
    releaseNotes: PropTypes.any.isRequired,
    urlFragment: PropTypes.string.isRequired,
});
var VaInternalOnly;
(function (VaInternalOnly) {
    VaInternalOnly["StrictlyInternal"] = "StrictlyInternal";
    VaInternalOnly["AdditionalDetails"] = "AdditionalDetails";
    VaInternalOnly["FlagOnly"] = "FlagOnly";
})(VaInternalOnly || (exports.VaInternalOnly = VaInternalOnly = {}));
