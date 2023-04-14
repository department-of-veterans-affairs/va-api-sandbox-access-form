import React from 'react';
interface TermsOfServiceCheckboxProps {
    termsOfServiceUrl: string;
}
export interface TermsOfServiceFormValues {
    termsOfService: boolean;
}
declare const TermsOfServiceCheckbox: React.FC<TermsOfServiceCheckboxProps>;
export default TermsOfServiceCheckbox;
