import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
import { PopoverRenderProps } from '../Popover/Popover.types';
export interface ModalProps extends BaseProps {
    isOpen: boolean;
    onClose?(): void;
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    variant?: 'light' | 'dark';
    children?: ReactNode | ((renderProps: PopoverRenderProps) => ReactNode);
    className?: string;
    iconSmall?: boolean;
}
