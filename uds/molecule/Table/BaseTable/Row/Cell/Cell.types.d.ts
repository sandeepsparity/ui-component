import { ColumnDef } from '../../../Table.types';
export interface CellProps<T> {
    item: T;
    column: ColumnDef<T>;
    loading?: boolean;
    expanded?: boolean;
    toggle?(): void;
    className?: string;
}
