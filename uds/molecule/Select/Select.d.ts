import React, { ForwardedRef, ReactElement } from 'react';
import { OptionProps, SelectProps } from './Select.types';
import '../../tailwind.css';
declare const Option: <T>(_: OptionProps<T>) => ReactElement;
declare const _default: <T>(_: SelectProps<T> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined;
}) => ReactElement;
export default _default;
export { Option };
