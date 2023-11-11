import React, { ForwardedRef, ReactElement } from 'react';
import { SingleSelectProps } from './SingleSelect.types';
import '../../../tailwind.css';
declare const SingleSelect: <T>(_: SingleSelectProps<T> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined;
}) => ReactElement;
export default SingleSelect;
