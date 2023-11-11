import { __rest, __assign } from 'tslib';
import React from 'react';
import { NotificationAction } from './NotificationAction.js';
import { NotificationClose } from './NotificationClose.js';
import { NotificationIcon } from './NotificationIcon.js';
import { NotificationSubTitle } from './NotificationSubTitle.js';
import { NotificationTitle } from './NotificationTitle.js';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { getComponentByType } from '../../atom/util/react.js';

var NotificationCard = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, onClose = _a.onClose, _f = _a.className, className = _f === void 0 ? '' : _f, notification = __rest(_a, ["children", "onClose", "className"]);
    return (React.createElement("div", { className: "relative flex p-3 ".concat(className) },
        getComponentByType(children, notification, 'NotificationIcon')
            ? getComponentByType(children, notification, 'NotificationIcon')
            : notification.priority && React.createElement(NotificationIcon, { priority: notification.priority }),
        React.createElement("div", { className: 'flex flex-col ml-2 mt-1.5' }, (_b = getComponentByType(children, notification, 'NotificationTitle')) !== null && _b !== void 0 ? _b : (React.createElement(NotificationTitle, { title: notification.title })), (_c = getComponentByType(children, notification, 'NotificationSubTitle')) !== null && _c !== void 0 ? _c : (React.createElement(NotificationSubTitle, { type: notification.type, timestamp: notification.timestamp, unread: notification.unread })), (_d = getComponentByType(children, notification, 'NotificationAction')) !== null && _d !== void 0 ? _d : (React.createElement(NotificationAction, __assign({ onActionClick: notification.onActionClick, actionText: notification.actionText }, notification)))), (_e = getComponentByType(children, notification, 'NotificationClose')) !== null && _e !== void 0 ? _e : (React.createElement(NotificationClose, __assign({ onClose: onClose }, notification)))));
};

export { NotificationCard };
