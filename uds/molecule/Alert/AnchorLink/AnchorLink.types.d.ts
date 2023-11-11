import React from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface AnchorLinkProps extends BaseProps {
    label: string;
    selected?: boolean;
    divider?: boolean;
    hideIcon?: boolean;
    icon?: 'none' | 'checkmark' | 'check-circle' | 'warning' | 'chevron-down' | 'chevron-up';
    onClick?(_?: React.MouseEvent): void;
    className?: string;
}
