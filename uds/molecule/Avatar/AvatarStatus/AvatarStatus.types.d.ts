import React, { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
import { PopoverRenderProps } from '../../Popover/Popover.types';
export type AvatarStatusProps = BaseProps & {
    status: 'none' | 'online' | 'offline' | 'busy' | 'away';
    small?: boolean;
    onClick?(_?: React.MouseEvent): void;
    children?: ReactNode | ((_: PopoverRenderProps) => ReactNode);
    className?: string;
} & ({
    src: string;
    name?: never;
} | {
    src?: never;
    name: string;
});
