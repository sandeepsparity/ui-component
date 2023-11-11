import { ReactNode, ReactElement } from 'react';
import { Action } from '../../Table.types';
import { Column } from '../../../../atom/hook/useTable';
import { HeaderRenderProps, Options } from '../StandardTable.types';
export interface HeaderProps<T> {
    selected?: T[];
    clear?(): void;
    actions?: Action<T>[];
    columns?: Column<T>[];
    reorder?(_: (Partial<Column<T>> & Required<Pick<Column<T>, 'id'>>)[]): void;
    update?(_: Partial<Column<T>> & Required<Pick<Column<T>, 'id'>>): void;
    options?: Options;
    children?: ReactNode | ((_: HeaderRenderProps) => ReactElement);
    className?: string;
}
