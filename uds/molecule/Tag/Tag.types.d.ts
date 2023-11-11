import React, { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface TagProps extends BaseProps {
    label?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    textColor?: string;
    backgroundColorAlt?: string;
    borderColorAlt?: string;
    textColorAlt?: string;
    preset?: 'none' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray' | 'red' | 'white';
    onClick?(_?: React.MouseEvent): void;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
}
