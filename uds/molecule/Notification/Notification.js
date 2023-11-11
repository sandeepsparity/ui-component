import { __rest, __assign } from 'tslib';
import React, { useState } from 'react';
import clsx from 'clsx';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { getComponentByType, getChildrenCount } from '../../atom/util/react.js';
import { NotificationCard } from './NotificationCard.js';
import { NotificationGroup } from './NotificationGroup.js';
import { NotificationAction } from './NotificationAction.js';
import { NotificationClose } from './NotificationClose.js';
import { NotificationIcon } from './NotificationIcon.js';
import { NotificationSubTitle } from './NotificationSubTitle.js';
import { NotificationTitle } from './NotificationTitle.js';

var Notification = function (_a) {
    var _b, _c, _d;
    var children = _a.children, _e = _a.className, className = _e === void 0 ? '' : _e, notification = __rest(_a, ["children", "className"]);
    var _f = useState(false), toggleNotifications = _f[0], setToggleNotifications = _f[1];
    var handleClickToggle = function (event) {
        event.stopPropagation();
        setToggleNotifications(function (prev) { return !prev; });
    };
    var notificationGroup = getComponentByType(children, notification, 'NotificationGroup');
    var notificationCard = getComponentByType(children, __assign({}, notification), 'NotificationCard');
    var hasSubnotifications = notificationGroup
        || notification.subNotifications && notification.subNotifications.length > 0;
    return (React.createElement("div", { className: "group bg-white hover:bg-[#F7F8FA] ".concat(className) }, hasSubnotifications ?
        React.createElement("div", { className: clsx({
                'bg-[#F7F8FA]': toggleNotifications
            }, "w-full pr-2") },
            React.createElement("div", { className: 'py-3' },
                notificationGroup
                    ? getChildrenCount(children, 'NotificationGroup') && (React.createElement("span", { className: 'text-sm font-semibold text-brand ml-5' },
                        getChildrenCount(children, 'NotificationGroup'),
                        " New ", (_b = notification.notificationType) !== null && _b !== void 0 ? _b : 'Proposals',
                        " Received"))
                    : (notification.subNotifications &&
                        notification.subNotifications.length > 0 && (React.createElement("span", { className: 'text-sm font-semibold text-brand ml-5' }, (_c = notification.subNotifications) === null || _c === void 0 ? void 0 :
                        _c.length,
                        " New ", (_d = notification.notificationType) !== null && _d !== void 0 ? _d : 'Proposals',
                        " Received"))),
                React.createElement("div", { className: 'relative' },
                    React.createElement("div", { onClick: handleClickToggle, className: clsx({
                            'bg-white border relative z-10 border-gray-207 border-solid shadow-[0_2px_12px_rgba(3,59,105,0.15)]': !toggleNotifications,
                            'border border-transparent': !toggleNotifications,
                        }) }, notificationCard !== null && notificationCard !== void 0 ? notificationCard : React.createElement(NotificationCard, __assign({}, notification)),
                        toggleNotifications && (notificationGroup !== null && notificationGroup !== void 0 ? notificationGroup : React.createElement(NotificationGroup, { subNotifications: notification.subNotifications }))),
                    !toggleNotifications && (React.createElement("div", { style: { width: '100%' }, className: 'absolute bg-white top-2 left-2 z-0 h-full w-full border border-gray-207 border-solid shadow-[0_2px_12px_rgba(3,59,105,0.15)]' })))))
        : !notificationGroup && notificationCard ? notificationCard : React.createElement(NotificationCard, __assign({}, notification))));
};
var Notification$1 = Object.assign(Notification, {
    Action: NotificationAction,
    Close: NotificationClose,
    Icon: NotificationIcon,
    SubTitle: NotificationSubTitle,
    Title: NotificationTitle,
    Card: NotificationCard,
    Group: NotificationGroup
});

export { Notification$1 as default };
