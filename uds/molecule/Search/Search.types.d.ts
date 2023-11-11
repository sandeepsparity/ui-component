import { InputHTMLAttributes, SyntheticEvent } from 'react';
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onClick' | 'size' | 'className'>;
export interface Props {
    value?: string;
    onChange?(_: string): void;
    onClick?(_: SyntheticEvent): void;
    rounded?: boolean;
    size?: 'sm' | 'md' | 'lg';
    error?: string | boolean;
    className?: string;
    /** @deprecated - Use the <i>rounded</i> prop instead. */
    borderRadius?: number;
    /** @deprecated */
    variant?: 'simple' | 'transparent';
}
export type SearchProps = InputProps & Props;
