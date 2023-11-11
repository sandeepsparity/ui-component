import { MouseEvent, Dispatch, ReactElement, ReactNode } from 'react';
export type OptionProps<T> = {
    item: T;
    disabled?: boolean;
};
export type IndexedOption<T> = OptionProps<T> & {
    idx?: number;
    key: string;
    label: string;
};
export type ActionProps<T> = (item: T, idx: number) => ReactElement;
export type ItemProps<T> = {
    items: T[];
    children?: never;
} | {
    items?: never;
    children: ReactElement<OptionProps<T>>[];
};
export type CommonProps<T> = ItemProps<T> & {
    id?: string;
    name?: string;
    disabled?: boolean;
    wrap?: boolean;
    placeholder?: string;
    itemKey?: keyof T | ((_: T) => string | number);
    itemText?: keyof T | ((_: T) => string);
    search?: boolean | ((_: T, __: string) => boolean);
    error?: boolean;
    menuWidth?: number;
    menuHeight?: number;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    actions?: ActionProps<T>[];
    onClick?(_?: MouseEvent): void;
    onSearch?(_: string): void;
    zIndex?: number;
    footer?: ReactNode;
    className?: string;
};
export type MultiSelectProps<T> = CommonProps<T> & {
    multiple: true;
    value?: T[];
    /** @deprecated - Use the <i>error</i> prop instead. */
    isValid?(_: T[]): boolean;
    onChange?: Dispatch<T[]>;
    checkboxes?: boolean;
    selectAllOption?: boolean | string;
    noTags?: boolean;
    nestedTags?: boolean;
};
export type SingleSelectProps<T> = CommonProps<T> & {
    multiple?: false;
    value?: T;
    /** @deprecated - Use the <i>error</i> prop instead. */
    isValid?(_: T): boolean;
    onChange?: Dispatch<T>;
    size?: 'sm' | 'md' | 'lg';
};
export type SelectProps<T> = MultiSelectProps<T> | SingleSelectProps<T>;
