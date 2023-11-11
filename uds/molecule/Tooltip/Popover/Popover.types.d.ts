import { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface PopoverProps extends BaseProps {
    label?: string;
    variant?: 'light' | 'dark';
    anchor?: 'none' | 'top' | 'right' | 'bottom' | 'left';
    children?: ReactNode;
    className?: string;
}
