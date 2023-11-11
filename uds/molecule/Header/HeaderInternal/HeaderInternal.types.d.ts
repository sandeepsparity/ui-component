import { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface HeaderInternalProps extends BaseProps {
    title?: string;
    subtitle?: string;
    logo?: boolean;
    placeholder?: string;
    children?: ReactNode;
    className?: string;
}
