import React from 'react';

var NotificationTitle = function (_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement(React.Fragment, null, children
        ? React.Children.map(children, function (child) { return React.isValidElement(child) ? child : React.createElement(React.Fragment, null, child); })
        : React.createElement("span", { className: "text-sm font-bold text-dark-text" }, title)));
};

export { NotificationTitle };
