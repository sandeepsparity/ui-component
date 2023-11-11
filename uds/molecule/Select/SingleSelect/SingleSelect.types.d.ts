import { MouseEvent, ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
import { ActionProps, IndexedOption } from '../Select.types';
export interface SingleSelectProps<T> extends BaseProps {
    name?: string;
    value?: IndexedOption<T>;
    disabled?: boolean;
    wrap?: boolean;
    search?: boolean | ((_: T, __: string) => boolean);
    items: IndexedOption<T>[];
    onChange?(_: T): void;
    onClick?(_?: MouseEvent<HTMLElement>): void;
    onSearch?(_: string): void;
    error?: boolean;
    placeholder?: string;
    menuWidth?: number;
    menuHeight?: number;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    actions?: ActionProps<T>[];
    zIndex?: number;
    footer?: ReactNode;
    className?: string;
}
