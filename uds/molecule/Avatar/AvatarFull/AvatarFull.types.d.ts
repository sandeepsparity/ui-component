import React, { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
import { PopoverRenderProps } from '../../Popover/Popover.types';
export interface AvatarFullProps extends BaseProps {
    name: string;
    status?: 'none' | 'online' | 'busy' | 'offline' | 'away';
    title?: string;
    src?: string;
    className?: string;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode | ((_: PopoverRenderProps) => ReactNode);
}
