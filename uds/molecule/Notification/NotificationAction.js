import { __rest } from 'tslib';
import React from 'react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import ArrowRightIcon from '../../atom/icon/ArrowRightIcon/ArrowRightIcon.js';

var NotificationAction = function (_a) {
    var children = _a.children, actionText = _a.actionText, onActionClick = _a.onActionClick, notification = __rest(_a, ["children", "actionText", "onActionClick"]);
    var handleClick = function (event) {
        event.stopPropagation();
        onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick(event, notification);
    };
    return (React.createElement(React.Fragment, null, children
        ? React.Children.map(children, function (child) { return React.isValidElement(child) ? child : React.createElement(React.Fragment, null, child); })
        : (onActionClick &&
            React.createElement("a", { onClick: handleClick, className: "flex items-center text-[13px] font-bold text-brand cursor-pointer" },
                React.createElement("span", null, actionText),
                React.createElement(ArrowRightIcon, { className: 'right-2 ml-1.5', width: 14, height: 10, fill: color('brand') })))));
};

export { NotificationAction };
