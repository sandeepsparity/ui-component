import React from 'react';
import 'tslib';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import { Info, AlertTriangle, AlertOctagon } from 'lucide-react';

var NotificationIcon = function (_a) {
    var children = _a.children, priority = _a.priority;
    var iconStyles, icon;
    switch (priority) {
        case 'error':
            iconStyles = 'border-red-300 bg-red-50';
            icon = React.createElement(AlertOctagon, { color: color('compliant-red') });
            break;
        case 'warning':
            iconStyles = 'border-honey-200 bg-honey-50';
            icon = React.createElement(AlertTriangle, { color: color('compliant-orange') });
            break;
        default:
            iconStyles = 'border-blue-304 bg-blue-307';
            icon = React.createElement(Info, { color: color('brand') });
    }
    return (React.createElement(React.Fragment, null, children
        ? React.Children.map(children, function (child) { return React.isValidElement(child) ? child : React.createElement(React.Fragment, null, child); })
        : (React.createElement("div", { className: "p-4 flex items-center justify-center w-8 h-8 border border-solid rounded-full ".concat(iconStyles) },
            React.createElement("span", null, icon)))));
};

export { NotificationIcon };
