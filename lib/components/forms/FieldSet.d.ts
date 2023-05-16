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
declare const FieldSet: FC<FieldSetProps>;
export default FieldSet;
