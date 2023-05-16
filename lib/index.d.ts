/// <reference types="react" resolution-mode="require"/>
declare module "types/apply" {
    export interface ApplySuccessResult {
        apis: string[];
        ccgClientId?: string;
        clientID?: string;
        clientSecret?: string;
        email: string;
        kongUsername?: string;
        token?: string;
        redirectURI?: string;
    }
    export interface DevApplicationRequest {
        email: string;
        firstName: string;
        lastName: string;
        organization: string;
        description: string;
        apis: string;
        oAuthApplicationType: string;
        oAuthRedirectURI: string;
        termsOfService: boolean;
        internalApiInfo?: InternalApiInfo;
    }
    export interface DevApplicationResponse {
        token?: string;
        ccgClientId?: string;
        clientID?: string;
        clientSecret?: string;
        redirectURI?: string;
        kongUsername?: string;
        email?: string;
        errors?: string[];
    }
    export interface InternalApiInfo {
        programName: string;
        sponsorEmail: string;
        vaEmail: string;
    }
}
declare module "utils/validators" {
    export const validatePresence: (fieldName: string, value: string) => string | undefined;
    export const validateOAuthApplicationType: (value: string) => string | undefined;
    export const validateEmail: (value: string) => string | undefined;
    export const validateVAEmail: (value: string) => string | undefined;
    export const validateOAuthRedirectURI: (value: string) => string | undefined;
    export const isVaEmail: (value: string) => boolean;
}
declare module "validateForm" {
    import { FormikErrors } from 'formik';
    import { Values } from "index";
    export const validateForm: (values: Values) => FormikErrors<Values>;
}
declare module "utils/toHtmlId" {
    const toHtmlId: (phrase: string) => string;
    export default toHtmlId;
}
declare module "components/forms/TextField" {
    import { Field } from 'formik';
    import React, { ComponentPropsWithRef, FC, ReactNode, KeyboardEvent } from 'react';
    type FieldProps = ComponentPropsWithRef<typeof Field>;
    export interface TextFieldProps {
        className?: string;
        label: ReactNode;
        secondLabel?: string;
        name: string;
        required?: boolean;
        as?: FieldProps['as'];
        description?: ReactNode;
        type?: 'text' | 'email' | 'password';
        placeholder?: string;
        disabled?: boolean;
        onKeyDown?: (event: KeyboardEvent) => void;
        innerRef?: React.RefObject<HTMLElement>;
        customFieldClass?: string;
        children?: ReactNode;
        maxLength?: number;
    }
    const TextField: FC<TextFieldProps>;
    export default TextField;
}
declare module "components/forms/FieldSet" {
    import { FC, ReactNode } from 'react';
    export interface FieldSetProps {
        className?: string;
        legend: ReactNode;
        legendClassName?: string;
        name: string;
        required?: boolean;
        children: ReactNode;
        description?: string;
    }
    const FieldSet: FC<FieldSetProps>;
    export default FieldSet;
}
declare module "components/forms/CheckboxRadioField" {
    import React, { FC, ReactNode } from 'react';
    export interface CheckboxRadioFieldProps {
        className?: string;
        label: ReactNode;
        name: string;
        required?: boolean;
        type: 'checkbox' | 'radio';
        value?: string;
        innerRef?: React.RefObject<HTMLElement>;
        showError?: boolean;
        description?: ReactNode;
        labelClassOverride?: string;
    }
    const CheckboxRadioField: FC<CheckboxRadioFieldProps>;
    export default CheckboxRadioField;
}
declare module "components/forms/TermsOfServiceCheckbox" {
    import React from 'react';
    interface TermsOfServiceCheckboxProps {
        termsOfServiceUrl: string;
    }
    export interface TermsOfServiceFormValues {
        termsOfService: boolean;
    }
    const TermsOfServiceCheckbox: React.FC<TermsOfServiceCheckboxProps>;
    export default TermsOfServiceCheckbox;
}
declare module "utils/makeRequest" {
    interface CallFetchConfig {
        responseType: ResponseType;
    }
    export interface HttpSuccessResponse<T> {
        ok: boolean;
        status: number;
        body: T;
    }
    type HttpResponse<T> = HttpErrorResponse | HttpSuccessResponse<T>;
    export interface HttpErrorResponse {
        ok: boolean;
        status: number;
        body: Record<string, unknown> | string | null;
    }
    export enum ResponseType {
        BLOB = "BLOB",
        JSON = "JSON",
        TEXT = "TEXT"
    }
    export const makeRequest: <T>(url: string, requestInit: RequestInit, config?: CallFetchConfig) => Promise<HttpResponse<T>>;
}
declare module "components/OAuthAcgAppInfo" {
    import * as React from 'react';
    interface OAuthAcgAppInfoProps {
        acgPkceAuthUrl: string;
    }
    const OAuthAcgAppInfo: React.FC<OAuthAcgAppInfoProps>;
    export { OAuthAcgAppInfo };
}
declare module "components/OAuthCcgAppInfo" {
    import * as React from 'react';
    interface OAuthCcgAppInfoProps {
        ccgPublicKeyUrl: string;
    }
    const OAuthCcgAppInfo: React.FC<OAuthCcgAppInfoProps>;
    export { OAuthCcgAppInfo };
}
declare module "components/InternalOnlyInfo" {
    const InternalOnlyInfo: () => JSX.Element;
    export { InternalOnlyInfo };
}
declare module "index" {
    import { FC } from 'react';
    import { InternalApiInfo } from "types/apply";
    export interface Values {
        description: string;
        email: string;
        firstName: string;
        lastName: string;
        internalApiInfo: InternalApiInfo;
        oAuthApplicationType: string;
        oAuthPublicKey: string;
        oAuthRedirectURI: string;
        organization: string;
        termsOfService: boolean;
        typeAndApi: string;
    }
    interface SandboxAccessFormProps {
        apiIdentifier: string;
        authTypes: string[];
        onFailure: (results: unknown) => void;
        onSuccess: (results: unknown) => void;
        urls: {
            acgPkceAuthUrl: string;
            ccgPublicKeyUrl: string;
            postUrl: string;
            termsOfServiceUrl: string;
        };
        internalOnly: boolean;
    }
    const SandboxAccessForm: FC<SandboxAccessFormProps>;
    export { SandboxAccessForm };
}
declare module "schemas" {
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
    export const ApiDocSourcePropType: PropTypes.Requireable<PropTypes.InferProps<{
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
    export const ApiDeactivationInfoPropType: PropTypes.Requireable<PropTypes.InferProps<{
        deactivationContent: PropTypes.Validator<any>;
        deactivationDate: PropTypes.Validator<any>;
        deprecationContent: PropTypes.Validator<any>;
        deprecationDate: PropTypes.Validator<any>;
    }>>;
    /**
     * This enum represents the prod access form from the access of an API. It is referring to the
     * number of steps an API has, not an individual step.
     */
    export enum ProdAccessFormSteps {
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
    export const ApiDescriptionPropType: PropTypes.Requireable<PropTypes.InferProps<{
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
    export enum VaInternalOnly {
        StrictlyInternal = "StrictlyInternal",
        AdditionalDetails = "AdditionalDetails",
        FlagOnly = "FlagOnly"
    }
}
