import { ColumnDef } from '../../Table.types';
import { ReactNode } from 'react';
export interface RowProps<T> {
    item: T;
    columns: ColumnDef<T>[];
    loading?: boolean;
    dividers?: boolean | 'horizontal' | 'vertical';
    expansion?(_: T, __: () => void): ReactNode;
    autoExpand?: boolean | ((_: T) => boolean);
    className?: string;
}
