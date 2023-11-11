import { Action } from '../../../Table.types';
export interface ActionsProps<T> {
    label?: string;
    actions?: Action<T>[];
    selected?: T[];
    clear?(): void;
    className?: string;
}
