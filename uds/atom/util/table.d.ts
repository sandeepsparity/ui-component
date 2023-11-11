import { Column, ColumnDef, ColumnGroupDef } from '../../molecule/Table/Table.types';
export declare const isColumn: <T>(column: Column<T>) => column is ColumnDef<T>;
export declare const isColumnGroup: <T>(column: Column<T>) => column is ColumnGroupDef<T>;
export declare const columnDepth: <T>(columns: Column<T> | Column<T>[]) => number;
export declare const columnSpan: <T>(columns: Column<T> | Column<T>[]) => number;
export declare const columnsByDepth: <T>(columns: Column<T>[], depth?: number) => [Column<T> | undefined, number][];
