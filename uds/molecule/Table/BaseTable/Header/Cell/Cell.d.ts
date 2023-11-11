import React from 'react';
import { CellProps } from './Cell.types';
import '../../../../../tailwind.css';
declare const Cell: <T>(props: CellProps<T>) => React.JSX.Element;
export default Cell;
