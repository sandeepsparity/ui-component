import { __rest } from 'tslib';
import React from 'react';
import { X } from 'lucide-react';

var NotificationClose = function (_a) {
    var children = _a.children, onClose = _a.onClose, notification = __rest(_a, ["children", "onClose"]);
    var handleClick = function (event) {
        event.stopPropagation();
        onClose === null || onClose === void 0 ? void 0 : onClose(event, notification);
    };
    return (React.createElement("div", { className: 'absolute right-3 top-5 invisible group-hover:visible' }, children !== null && children !== void 0 ? children : (onClose && (React.createElement(X, { size: 16, className: 'cursor-pointer text-[#5A697B]', onClick: handleClick })))));
};

export { NotificationClose };
