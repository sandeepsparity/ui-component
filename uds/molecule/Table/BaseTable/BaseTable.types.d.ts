import { Column } from '../Table.types';
import { ReactNode } from 'react';
export interface BaseTableProps<T> {
    id?: string;
    items: T[];
    itemKey: keyof T | ((_: T) => string | number);
    columns: Column<T>[];
    toggleSort?(_: Column<T>): void;
    expansion?(_: T, __: () => void): ReactNode;
    autoExpand?: boolean | ((_: T) => boolean);
    loading?: boolean;
    dividers?: boolean | 'horizontal' | 'vertical';
    size?: number;
    depth?: number;
    empty?: ReactNode;
    className?: string;
}
