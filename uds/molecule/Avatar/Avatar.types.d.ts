import React, { ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
import { PopoverRenderProps } from '../Popover/Popover.types';
export interface AvatarProps extends BaseProps {
    src?: string;
    name?: string;
    title?: string;
    status?: 'none' | 'online' | 'busy' | 'offline' | 'away';
    full?: boolean;
    small?: boolean;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode | ((_: PopoverRenderProps) => ReactNode);
    className?: string;
}
