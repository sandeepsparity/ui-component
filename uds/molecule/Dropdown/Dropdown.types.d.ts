import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface AnchorProps {
    children?: ReactNode;
}
export interface ItemProps {
    disabled?: boolean;
    onClick?(): void;
    children?: ReactNode;
}
export interface FooterProps {
    children?: ReactNode;
}
export interface DropdownProps extends BaseProps {
    width?: number;
    height?: number;
    disabled?: boolean;
    zIndex?: number;
    children?: ReactNode;
    className?: string;
}
