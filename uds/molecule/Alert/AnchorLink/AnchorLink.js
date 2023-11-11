import { __assign } from 'tslib';
import React, { useState } from 'react';
import '../../tailwind.css.js';
import clsx from 'clsx';
import { Circle, ChevronUp, ChevronDown, AlertCircle, CheckCircle2, Check } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var AnchorLink = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(false), showTooltip = _a[0], setShowTooltip = _a[1];
    var onHover = function (event) {
        var target = event.target;
        if (target) {
            setShowTooltip(target.offsetHeight < target.scrollHeight);
        }
    };
    var icon = function () {
        switch (props.icon) {
            case 'checkmark':
                return (React.createElement(Check, { size: 16, stroke: color('success'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px] ml-[13.5px] mr-[15px]' }));
            case 'check-circle':
                return (React.createElement(CheckCircle2, { size: 20, fill: color('green-500'), stroke: color('white'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px] ml-[13.5px] mr-[15px]' }));
            case 'warning':
                return (React.createElement(AlertCircle, { size: 16, fill: color('white'), stroke: color('brand'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px] ml-[13.5px] mr-[15px]' }));
            case 'chevron-down':
                return (React.createElement(ChevronDown, { size: 16, fill: color('white'), stroke: color('brand'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px] ml-[13.5px] mr-[15px]' }));
            case 'chevron-up':
                return (React.createElement(ChevronUp, { size: 16, fill: color('white'), stroke: color('brand'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px] ml-[13.5px] mr-[15px]' }));
            default:
                return (React.createElement(Circle, { size: 20, fill: color('white'), stroke: color('brand-light'), strokeWidth: 2, className: 'min-w-[22.23px] min-h-[22.23px] ml-[13.5px] mr-[15px]' }));
        }
    };
    return (React.createElement("div", __assign({}, baseProps, { onClick: props.onClick, className: clsx('flex items-center overflow-hidden cursor-pointer w-full min-h-12 border-l-4 hover:bg-blue-307', {
            'text-blue-302 border-gray-204': !props.selected,
            'text-blue-301 border-brand-light': props.selected,
        }, props.className) }),
        React.createElement("div", { className: clsx('flex items-center justify-between h-full w-full py-3.5', {
                'border-b border-b-gray-204': props.divider,
            }) },
            React.createElement("span", __assign({}, (showTooltip ? { title: props.label } : {}), { className: 'select-none pl-3 whitespace-normal line-clamp-2 block truncate', onMouseEnter: onHover }), props.label),
            !props.hideIcon && icon())));
};

export { AnchorLink as default };
