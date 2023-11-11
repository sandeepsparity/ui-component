import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface AlertProps extends BaseProps {
    isOpen: boolean;
    onClose?(): void;
    autoClose?: boolean;
    sticky?: boolean;
    timeout?: number;
    size?: 'large' | 'medium' | 'small';
    top?: number;
    dismissible?: boolean;
    variant?: 'success' | 'informational' | 'warning' | 'error';
    children?: ReactNode;
    className?: string;
    zIndex?: number;
}
