import { ForwardedRef } from 'react';
declare const useHAF: <T extends HTMLElement>(forwardedRef?: ForwardedRef<T> | undefined) => {
    ref: import("react").MutableRefObject<T | null>;
    hover: boolean;
    active: boolean;
    focus: boolean;
    width: number;
    overflowX: boolean;
    overflowY: boolean;
};
export default useHAF;
