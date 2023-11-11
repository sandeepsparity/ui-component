import React from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface BreadcrumbProps extends BaseProps {
    label: string;
    static?: boolean;
    hideIcon?: boolean;
    onClick?(_?: React.MouseEvent): void;
    className?: string;
    name?: string;
}
