import { ReactNode } from 'react';
export interface DraggableProps<T> {
    items: T[];
    onChange(_: T[]): void;
    children: (_: {
        item: T;
        idx: number;
        handle: ReactNode;
    }) => ReactNode;
    className?: string;
}
