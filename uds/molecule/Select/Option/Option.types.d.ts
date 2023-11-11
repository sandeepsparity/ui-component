import { ReactNode } from 'react';
export interface OptionProps {
    label?: string;
    selected?: boolean;
    disabled?: boolean;
    wrap?: boolean;
    checkbox?: boolean;
    indeterminate?: boolean;
    onClick?(): void;
    variant?: 'primary' | 'secondary';
    children?: ReactNode;
    className?: string;
}
