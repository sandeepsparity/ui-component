import { ReactNode } from 'react';
import { Action, Sort, Filter, Column } from '../Table.types';
export interface HeaderRenderProps {
    columns: ReactNode;
    actions: ReactNode;
}
export interface HeaderProps {
    children?: ReactNode | ((_: HeaderRenderProps) => ReactNode);
}
export interface FooterProps {
    children?: ReactNode;
}
export interface EmptyProps {
    children?: ReactNode;
}
export interface FetchRequest<T> {
    page: number;
    size: number;
    sort: Sort<T>[];
    filter: Filter[];
}
export interface FetchResponse<T> {
    items: T[];
    count: number;
}
export interface Options {
    heading?: {
        columns?: {
            truncate?: boolean;
        };
    };
    footer?: {
        label?: string;
        pagination?: {
            showButtons?: boolean;
            showIconButtons?: boolean;
        };
    };
}
export interface StandardTableProps<T> {
    id?: string;
    items: T[] | ((_: FetchRequest<T>) => Promise<FetchResponse<T>>);
    itemKey: keyof T | ((_: T) => string | number);
    columns: Column<T>[];
    actions?: Action<T>[];
    dividers?: boolean | 'horizontal' | 'vertical';
    noHeader?: boolean;
    /** @deprecated - Use <i>noPagination</i> prop instead. */
    noFooter?: boolean;
    noPagination?: boolean;
    loading?: boolean;
    jumper?: boolean;
    /** @deprecated - Use <i>checkboxes</i> prop instead. */
    select?: boolean;
    checkboxes?: boolean;
    chevrons?: boolean;
    backfill?: boolean;
    overflow?: boolean;
    singleSort?: boolean;
    pageSize?: number;
    pageSizes?: number[];
    expansion?(_: T, __: () => void): ReactNode;
    autoExpand?: boolean | ((_: T) => boolean);
    onChange?(_: T[], __: () => void): void;
    options?: Options;
    children?: ReactNode;
    className?: string;
}
