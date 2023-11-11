import React, { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface ListItemProps extends BaseProps {
    selected?: boolean;
    disabled?: boolean;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode;
    className?: string;
}
