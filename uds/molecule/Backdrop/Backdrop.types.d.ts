import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface BackdropProps extends BaseProps {
    isOpen: boolean;
    onClose?(): void;
    children?: ReactNode;
    className?: string;
}
