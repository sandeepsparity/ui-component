import { InputHTMLAttributes } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface TextAreaProps extends BaseProps, InputHTMLAttributes<HTMLElement> {
    width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    disabled?: boolean;
    label?: string;
    error?: boolean | string;
    isRequired?: boolean;
    optionalHelperText?: string;
    tooltip?: string;
    tooltipVariant?: 'light' | 'dark';
    tooltipAnchor?: 'top' | 'right' | 'bottom' | 'left';
    resize?: 'resize-x' | 'resize-y' | 'both' | 'none';
    maxCharacters?: number;
}
