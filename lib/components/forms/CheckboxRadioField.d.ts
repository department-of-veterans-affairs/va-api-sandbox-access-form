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
declare const CheckboxRadioField: FC<CheckboxRadioFieldProps>;
export default CheckboxRadioField;
