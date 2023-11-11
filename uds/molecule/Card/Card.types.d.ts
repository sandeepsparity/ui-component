import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface HeaderProps {
    children?: ReactNode;
}
export interface ContentProps {
    children?: ReactNode;
}
export interface FooterProps {
    children?: ReactNode;
}
export interface CardProps extends BaseProps {
    title?: string;
    subtitle?: string;
    collapsible?: boolean;
    isOpen?: boolean;
    customHeader?: boolean;
    onChange?(_: boolean): void;
    zIndex?: number;
    children?: ReactNode;
    className?: string;
}
