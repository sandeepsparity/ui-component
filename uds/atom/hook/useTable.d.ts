import { Column as TableColumn, ColumnDef as TableColumnDef, ColumnGroupDef as TableColumnGroupDef, Sort } from '../../molecule/Table/Table.types';
type ColumnDef<T> = TableColumnDef<T> & {
    rank: number;
};
type ColumnGroupDef<T> = TableColumnGroupDef<T> & {
    columns: ColumnDef<T>[];
};
export type Column<T> = ColumnDef<T> | ColumnGroupDef<T>;
type Props<T> = {
    columns: TableColumn<T>[];
    singleSort?: boolean;
};
declare const useTable: <T>(props: Props<T>) => {
    tableID: string;
    columns: Column<T>[];
    sorts: Sort<T>[];
    sort: (items: T[]) => T[];
    toggleSort: (column: Column<T>) => void;
    reorder: (cols: (Partial<Column<T>> & Required<Pick<Column<T>, "id">>)[]) => void;
    update: (column: Partial<Column<T>> & Required<Pick<Column<T>, "id">>) => void;
};
export default useTable;
