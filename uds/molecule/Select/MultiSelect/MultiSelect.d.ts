import React, { ForwardedRef, ReactElement } from 'react';
import { MultiSelectProps } from './MultiSelect.types';
import '../../../tailwind.css';
declare const MultiSelect: <T>(_: MultiSelectProps<T> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined;
}) => ReactElement;
export default MultiSelect;
