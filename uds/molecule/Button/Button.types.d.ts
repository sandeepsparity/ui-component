import React, { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface ButtonRenderProps {
    hover: boolean;
    active: boolean;
    focus: boolean;
}
export interface ButtonProps extends BaseProps {
    name?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    icon?: boolean;
    fixed?: boolean;
    width?: number;
    disabled?: boolean;
    animated?: boolean;
    reset?: boolean | number;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode | ((_: ButtonRenderProps) => ReactNode);
    className?: string;
}
