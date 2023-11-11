import { ReactNode, InputHTMLAttributes } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface RadioProps<T> extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    dense?: boolean;
    error?: string | boolean;
    children?: ReactNode;
    className?: string;
}
