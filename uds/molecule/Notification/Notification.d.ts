import React from 'react';
import { NotificationProps } from './Notification.types';
declare const _default: (({ children, className, ...notification }: NotificationProps) => React.JSX.Element) & {
    Action: ({ children, actionText, onActionClick, ...notification }: import("./Notification.types").NotificationActionProps) => React.JSX.Element;
    Close: ({ children, onClose, ...notification }: import("./Notification.types").NotificationCloseProps) => React.JSX.Element;
    Icon: ({ children, priority }: import("./Notification.types").NotificationIconProps) => React.JSX.Element;
    SubTitle: ({ children, type, unread, timestamp, className }: import("./Notification.types").NotificationSubTitleProps) => React.JSX.Element;
    Title: ({ children, title }: import("./Notification.types").NotificationTitleProps) => React.JSX.Element;
    Card: ({ children, onClose, className, ...notification }: NotificationProps) => React.JSX.Element;
    Group: ({ children, subNotifications }: import("./Notification.types").NotificationGroupProps) => React.JSX.Element;
};
export default _default;
