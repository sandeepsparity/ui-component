import React, { HTMLAttributes, ReactNode } from 'react';
export interface HeaderProps {
    children?: ReactNode;
}
export interface ContentProps {
    children?: ReactNode;
}
export interface TabProps extends HTMLAttributes<HTMLElement> {
    selected?: boolean;
    disabled?: boolean;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode;
    className?: string;
    variant?: 'light' | 'dark';
    hideBorder?: boolean;
}
