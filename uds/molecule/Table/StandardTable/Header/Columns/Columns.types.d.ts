import { Column } from '../../../Table.types';
export interface ColumnsProps<T> {
    label?: string;
    truncate?: boolean;
    columns?: Column<T>[];
    reorder?(_: (Partial<Column<T>> & Required<Pick<Column<T>, 'id'>>)[]): void;
    update?(_: Partial<Column<T>> & Required<Pick<Column<T>, 'id'>>): void;
    className?: string;
}
