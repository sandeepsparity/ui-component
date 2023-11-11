/// <reference types="react" />
import { Filter, Sort, TableProps } from '../../molecule/Table/Table.types';
type Props<T> = TableProps<T>;
declare const usePagination: <T>(props: Props<T>) => {
    load: (_page?: number, _size?: number, _sorts?: Sort<T>[], _filters?: Filter[]) => void;
    items: T[];
    page: number;
    size: number;
    count: number;
    start: number;
    end: number;
    pages: number;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    setSize: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export default usePagination;
