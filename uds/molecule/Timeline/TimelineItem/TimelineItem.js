import React, { useState } from 'react';
import clsx from 'clsx';
import '../../../tailwind.css.js';
import { ChevronDown } from 'lucide-react';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var TimelineItem = function (_a) {
    var children = _a.children, _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.icon, icon = _d === void 0 ? React.createElement(React.Fragment, null) : _d, _e = _a.divider, divider = _e === void 0 ? false : _e, _f = _a.roundIcon, roundIcon = _f === void 0 ? true : _f, _g = _a.connector, connector = _g === void 0 ? true : _g, _h = _a.optionalStatus, optionalStatus = _h === void 0 ? '' : _h, _j = _a.collapsible, collapsible = _j === void 0 ? false : _j, onClick = _a.onClick, onCollapse = _a.onCollapse;
    var _k = useState(false), collapsed = _k[0], setCollapsed = _k[1];
    var onItemCollapse = function () {
        if (onCollapse) {
            onCollapse(!collapsed);
        }
        setCollapsed(!collapsed);
    };
    return (React.createElement("div", { onClick: onClick, className: clsx('flex mt-1', className, { 'cursor-pointer': onClick }, { 'overflow-hidden': collapsible }, { 'h-22': collapsed }) },
        React.createElement("div", { className: 'flex flex-col items-center' },
            React.createElement("div", { className: clsx('flex justify-center items-center m-1 w-8 h-8 overflow-hidden', roundIcon ? 'rounded-full' : '') }, icon),
            connector && React.createElement("div", { className: 'w-0.5 mt-1 flex-grow bg-[#CFE0ED]' })),
        React.createElement("div", { className: clsx('flex-col ml-3 text-left w-full pb-6', divider ? 'border-b' : '') },
            React.createElement("div", { className: 'flex font-bold text-[14px] leading-6 justify-between items-center h-10 text-light-text' },
                React.createElement("div", { className: 'whitespace-nowrap' }, label),
                React.createElement("div", { className: 'flex items-center justify-end ml-16' },
                    optionalStatus && React.createElement("div", { className: 'line-clamp-1' }, optionalStatus),
                    collapsible && (React.createElement("div", { className: 'cursor-pointer ml-2', onClick: onItemCollapse },
                        React.createElement(ChevronDown, { className: clsx('transition duration-200', {
                                '-rotate-180': !collapsed,
                            }), size: 32, strokeWidth: 1, color: color('light-text') }))))),
            !collapsed && React.createElement("div", null, children))));
};

export { TimelineItem as default };
