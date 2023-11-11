import { HTMLAttributes, ReactNode } from 'react';
export interface TimelineItemProps extends HTMLAttributes<HTMLElement> {
    label?: ReactNode | string;
    icon?: ReactNode;
    divider?: boolean;
    connector?: boolean;
    roundIcon?: boolean;
    optionalStatus?: ReactNode | string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    collapsible?: boolean;
    onCollapse?: (_: boolean) => void;
}
