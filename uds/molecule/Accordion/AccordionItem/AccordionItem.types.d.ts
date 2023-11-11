import React, { ReactElement, ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface HeaderProps {
    children?: ReactNode;
}
export interface ContentProps {
    children?: ReactNode;
}
export interface AccordionItemProps extends BaseProps {
    icon?: ReactElement;
    hideIcon?: boolean;
    selected?: boolean;
    disabled?: boolean;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode;
    className?: string;
    collapseIcon?: ReactElement;
    expandIcon?: ReactElement;
    iconRotatable?: boolean;
    variant?: 'dark' | 'light';
}
