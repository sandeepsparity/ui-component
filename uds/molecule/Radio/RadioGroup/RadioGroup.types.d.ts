import { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface RadioGroupProps<T> extends BaseProps {
    value?: T;
    disabled?: boolean;
    error?: string | boolean;
    horizontal?: boolean;
    variant?: 'small' | 'medium' | 'large';
    label?: string;
    isRequired?: boolean;
    onChange?(_: T): void;
    children?: ReactNode;
    className?: string;
}
