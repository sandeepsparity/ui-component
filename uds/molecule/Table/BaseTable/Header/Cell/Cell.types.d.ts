import { Column } from '../../../Table.types';
export interface CellProps<T> {
    column?: Column<T>;
    toggleSort?(_: Column<T>): void;
    span?: number;
    className?: string;
}
