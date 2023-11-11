import { RefObject } from 'react';
export interface ResizeObserverEntry {
    borderBoxSize: any;
    target: HTMLElement;
    contentRect: DOMRectReadOnly;
}
export declare const useResizeObserver: (ref: RefObject<HTMLElement>, callback?: ((entry: DOMRectReadOnly) => void) | undefined) => (string | number | undefined)[];
