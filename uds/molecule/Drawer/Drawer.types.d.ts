import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export type DrawerProps = BaseProps & {
    isOpen: boolean;
    setOpen(_: boolean): void;
    anchor?: 'bottom' | 'left' | 'right' | 'top';
    hideBackdrop?: boolean;
    hideBorder?: boolean;
    height?: string;
    width?: string;
    className?: string;
    children?: ReactNode;
    noPadding?: boolean;
} & ({
    header?: ReactNode;
    customHeader?: never;
} | {
    header?: never;
    customHeader?: ReactNode;
});
