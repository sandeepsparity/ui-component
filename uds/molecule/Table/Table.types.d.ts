import { ReactNode } from 'react';
import { StandardTableProps } from './StandardTable/StandardTable.types';
export type Comparator<T> = (_: T, __: T) => number;
export type Action<T> = {
    label: string | ReactNode;
    onClick: (_: T[]) => void | Promise<void>;
};
export declare enum Direction {
    ASC = "asc",
    DESC = "desc"
}
export interface Sort<T> {
    key: keyof T | Comparator<T>;
    direction: Direction;
}
export interface Filter {
    key: string;
    operator: string;
    value: string;
}
export interface ColumnRenderProps {
    icon?: ReactNode;
}
interface BaseColumn<T> {
    id: string | number;
    label: ReactNode | ((_: ColumnRenderProps) => ReactNode);
    direction?: Direction;
    pinned?: boolean;
    hidden?: boolean;
    sortable?: boolean | Comparator<T>;
    align?: 'left' | 'center' | 'right' | 'justify';
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    hideFromMenu?: boolean;
    clazz?: string;
    className?: string;
}
export interface ColumnDef<T> extends BaseColumn<T> {
    value: keyof T | ((item: T, toggle?: () => void, expanded?: boolean) => ReactNode);
}
export interface ColumnGroupDef<T> extends BaseColumn<T> {
    sortable?: never;
    direction?: never;
    columns: Column<T>[];
}
export type Column<T> = ColumnDef<T> | ColumnGroupDef<T>;
export type TableProps<T> = {
    variant?: 'standard';
} & StandardTableProps<T>;
export {};
