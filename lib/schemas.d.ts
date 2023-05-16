/**
 * This file contains all of the interfaces that currently make up the API definition schema.
 * Any future additions to this schema should be defined here as well. In the future, we will
 * likely move this data to a non-Typescript location, i.e. a database. As a result, we should
 * also not add any more React components to these schema definitions, as that will add to the
 * work that we need to do to convert this schema to a database-based system.
 */
import * as PropTypes from 'prop-types';
export interface VeteranRedirectMessage {
    linkUrl: string;
    linkText: string;
    message: string;
}
export interface APIDocSource {
    readonly metadataUrl?: string;
    readonly openApiUrl?: string;
    readonly key?: string;
    readonly label?: string;
    readonly apiIntro?: string;
}
export declare const ApiDocSourcePropType: PropTypes.Requireable<PropTypes.InferProps<{
    apiIntro: PropTypes.Requireable<any>;
    key: PropTypes.Requireable<string>;
    label: PropTypes.Requireable<string>;
    metadataUrl: PropTypes.Requireable<string>;
    openApiUrl: PropTypes.Requireable<string>;
}>>;
export interface APIDeactivationInfo {
    readonly deprecationContent: string;
    readonly deprecationDate: string;
    readonly deactivationContent: string;
    readonly deactivationDate: string;
}
export declare const ApiDeactivationInfoPropType: PropTypes.Requireable<PropTypes.InferProps<{
    deactivationContent: PropTypes.Validator<any>;
    deactivationDate: PropTypes.Validator<any>;
    deprecationContent: PropTypes.Validator<any>;
    deprecationDate: PropTypes.Validator<any>;
}>>;
/**
 * This enum represents the prod access form from the access of an API. It is referring to the
 * number of steps an API has, not an individual step.
 */
export declare enum ProdAccessFormSteps {
    Two = 2,
    Three = 3,
    Four = 4
}
export interface APIDescription {
    readonly name: string;
    readonly docSources: APIDocSource[];
    readonly urlFragment: string;
    readonly categoryUrlFragment?: string;
    readonly description: string;
    readonly enabledByDefault: boolean;
    readonly vaInternalOnly?: VaInternalOnly;
    readonly openData: boolean;
    readonly oAuth?: boolean;
    readonly oAuthTypes?: string[];
    readonly oAuthInfo?: OAuthInfo;
    readonly releaseNotes: string;
    readonly deactivationInfo?: APIDeactivationInfo;
    readonly multiOpenAPIIntro?: string;
    readonly veteranRedirect?: VeteranRedirectMessage;
    readonly altID?: string;
    readonly lastProdAccessStep: ProdAccessFormSteps;
    readonly versionSelectorLabel?: string;
}
export interface OAuthInfo {
    readonly acgInfo?: ACGInfo;
    readonly ccgInfo?: CCGInfo;
}
export interface ACGInfo {
    readonly baseAuthPath: string;
    readonly scopes: string[];
}
export interface CCGInfo {
    readonly baseAuthPath: string;
    readonly sandboxAud: string;
    readonly productionAud: string;
    readonly scopes: string[];
}
export declare const ApiDescriptionPropType: PropTypes.Requireable<PropTypes.InferProps<{
    deactivationInfo: PropTypes.Requireable<PropTypes.InferProps<{
        deactivationContent: PropTypes.Validator<any>;
        deactivationDate: PropTypes.Validator<any>;
        deprecationContent: PropTypes.Validator<any>;
        deprecationDate: PropTypes.Validator<any>;
    }>>;
    description: PropTypes.Validator<string>;
    docSources: PropTypes.Validator<(PropTypes.InferProps<{
        apiIntro: PropTypes.Requireable<any>;
        key: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        metadataUrl: PropTypes.Requireable<string>;
        openApiUrl: PropTypes.Requireable<string>;
    }> | null | undefined)[]>;
    enabledByDefault: PropTypes.Validator<boolean>;
    multiOpenAPIIntro: PropTypes.Requireable<any>;
    name: PropTypes.Validator<string>;
    oAuth: PropTypes.Requireable<boolean>;
    releaseNotes: PropTypes.Validator<any>;
    urlFragment: PropTypes.Validator<string>;
}>>;
export declare enum VaInternalOnly {
    StrictlyInternal = "StrictlyInternal",
    AdditionalDetails = "AdditionalDetails",
    FlagOnly = "FlagOnly"
}
