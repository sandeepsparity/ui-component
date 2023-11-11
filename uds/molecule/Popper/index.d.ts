import { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface AnchorProps {
    children?: ReactNode;
}
export interface ContentProps {
    children?: ReactNode | ((_: PopoverRenderProps) => ReactNode);
}
export interface PopoverRenderProps {
    close(): void;
}
export interface PopoverProps extends BaseProps {
    open?: boolean;
    disabled?: boolean;
    zIndex?: number;
    children?: ReactNode;
    className?: string;
}
