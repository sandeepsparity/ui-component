import React, { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface ButtonProps extends BaseProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    icon?: boolean;
    fixed?: boolean;
    disabled?: boolean;
    loading?: boolean;
    progress?: number;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode;
    className?: string;
    name?: string;
}
