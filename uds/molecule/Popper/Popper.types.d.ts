import { ReactNode, RefObject, FocusEvent } from 'react';
import { OptionsGeneric, StrictModifiers, VirtualElement } from '@popperjs/core';
export interface PopperProps {
    open?: boolean;
    anchor?: RefObject<Element | VirtualElement | null>;
    zIndex?: number;
    options?: Partial<OptionsGeneric<StrictModifiers>>;
    onBlur?(_: FocusEvent<HTMLElement>): void;
    children?: ReactNode;
}
