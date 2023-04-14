import { FC } from 'react';
import { InternalApiInfo } from './types/apply';
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
declare const SandboxAccessForm: FC<SandboxAccessFormProps>;
export { SandboxAccessForm };
