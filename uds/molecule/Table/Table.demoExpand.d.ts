import React from 'react';
import { TableProps } from './Table.types';
type Movie = {
    id: number;
    language: string;
    released: string;
    runtime: number;
    title: string;
    rating: string;
};
export declare const DefaultProps: TableProps<Movie>;
export declare const TableExpand: (props: TableProps<Movie>) => React.JSX.Element;
declare const _default: () => React.JSX.Element;
export default _default;
export { Movie as DemoTableItemType };
