import { Column } from '../../Table.types';
export interface HeaderProps<T> {
    columns: Column<T>[];
    toggleSort?(_: Column<T>): void;
    dividers?: boolean | 'horizontal' | 'vertical';
    depth?: number;
    className?: string;
}
