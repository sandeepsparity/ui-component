import React from 'react';

var NotificationSubTitle = function (_a) {
    var children = _a.children, type = _a.type, unread = _a.unread, timestamp = _a.timestamp, className = _a.className;
    return (React.createElement("div", { className: "my-1 flex items-center ".concat(className) }, children !== null && children !== void 0 ? children : (React.createElement(React.Fragment, null,
        React.createElement("span", { className: 'italic font-normal text-[13px] text-dark-text' }, type),
        React.createElement("span", { className: 'italic font-normal text-xs text-light-text ml-4' },
            timestamp,
            " "),
        unread && (React.createElement("div", { className: 'rounded-full h-[9px] w-[9px] bg-brand-light inline-flex ml-3.5' }))))));
};

export { NotificationSubTitle };
