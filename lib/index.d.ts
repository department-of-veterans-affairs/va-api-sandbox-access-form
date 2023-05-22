import { FC } from 'react';
export interface Values {
    description: string;
    email: string;
    firstName: string;
    lastName: string;
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
}
declare const SandboxAccessForm: FC<SandboxAccessFormProps>;
export { SandboxAccessForm };
