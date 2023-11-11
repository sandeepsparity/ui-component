import { __assign } from 'tslib';
import React from 'react';
import { NotificationCard } from './NotificationCard.js';

var NotificationGroup = function (_a) {
    var children = _a.children, subNotifications = _a.subNotifications;
    return (React.createElement("div", { className: 'ml-8' }, children !== null && children !== void 0 ? children : subNotifications === null || subNotifications === void 0 ? void 0 : subNotifications.map(function (subNotification, index) { return React.createElement(NotificationCard, __assign({ key: index }, subNotification)); })));
};

export { NotificationGroup };
