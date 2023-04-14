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
declare const TextField: FC<TextFieldProps>;
export default TextField;
