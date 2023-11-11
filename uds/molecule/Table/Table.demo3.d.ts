import React from 'react';
import { TableProps } from './Table.types';
import { SelectProps } from '../Select/Select.types';
export type Item = {
    name: string;
    num: number;
};
export declare const props: SelectProps<Item>;
type Movie = {
    id: number;
    language: string;
    released: string;
    runtime: number;
    title: string;
    rating: string;
};
export declare const DefaultProps: TableProps<Movie>;
export declare const Table3: (props: TableProps<Movie>) => React.JSX.Element;
declare const _default: () => React.JSX.Element;
export default _default;
export { Movie as DemoTableItemType };
