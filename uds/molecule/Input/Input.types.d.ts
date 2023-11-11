import { InputHTMLAttributes, ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
    height?: 'sm' | 'md' | 'lg' | number;
    width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    type?: 'text' | 'number' | 'password' | 'search';
    prefixElement?: ReactNode;
    suffixElement?: ReactNode;
    right?: boolean;
    disabled?: boolean;
    error?: boolean | string;
    className?: string;
    optionalHelperText?: string;
    label?: string;
    isRequired?: boolean;
    placeholder?: string;
    tooltip?: string;
    tooltipVariant?: 'light' | 'dark';
    tooltipAnchor?: 'top' | 'right' | 'bottom' | 'left';
    maxCharacters?: number;
}
