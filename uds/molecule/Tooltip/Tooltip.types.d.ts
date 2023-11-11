import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface PopoverProps {
    children?: ReactNode;
}
export interface TooltipProps extends BaseProps {
    label?: string;
    zIndex?: number;
    variant?: 'light' | 'dark';
    anchor?: 'top' | 'right' | 'bottom' | 'left';
    children?: ReactNode;
    className?: string;
}
