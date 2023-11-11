import { MouseEvent, ReactNode } from 'react';
export interface NotificationProps {
    children?: ReactNode;
    className?: string;
    title?: string;
    type?: string;
    timestamp?: string;
    priority?: PriorityType;
    onActionClick?: (event: MouseEvent<HTMLAnchorElement>, notification: NotificationProps) => void;
    actionText?: string;
    unread?: boolean;
    onClose?: (event: MouseEvent<SVGElement>, notification: NotificationProps) => void;
    subNotifications?: NotificationProps[];
    notificationType?: string;
}
export interface NotificationActionProps {
    children?: ReactNode;
    actionText?: string;
    onActionClick?: (event: MouseEvent<HTMLAnchorElement>, notification: NotificationActionProps) => void;
}
export interface NotificationCloseProps extends NotificationProps {
    children?: ReactNode;
}
export type PriorityType = 'info' | 'warning' | 'error';
export interface NotificationGroupProps {
    children?: ReactNode;
    className?: string;
    subNotifications?: NotificationProps[];
}
export interface NotificationIconProps {
    children?: ReactNode;
    priority?: PriorityType;
}
export interface NotificationSubTitleProps {
    children?: ReactNode;
    type?: string;
    timestamp?: string;
    unread?: boolean;
    className?: string;
}
export interface NotificationTitleProps {
    children?: ReactNode;
    title?: string;
}
