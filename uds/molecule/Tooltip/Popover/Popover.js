import { __assign } from 'tslib';
import React from 'react';
import clsx from 'clsx';
import '../../../tailwind.css.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';

var Popover = function (props) {
    var baseProps = useBaseProps(props);
    var isDark = props.variant === 'dark';
    var background = isDark ? 'bg-blue-301' : 'bg-white';
    var text = isDark ? 'text-white' : 'text-dark-text';
    var vertical = props.anchor === 'top' || props.anchor === 'bottom';
    var reversed = props.anchor === 'top' || props.anchor === 'left';
    return (React.createElement("div", __assign({ className: props.className }, baseProps),
        React.createElement("div", { className: clsx('w-fit flex items-center justify-center drop-shadow-[0px_4px_8px_rgba(3,59,105,0.25)]', {
                'flex-col': vertical,
                'flex-col-reverse': vertical && reversed,
                'flex-row-reverse': !vertical && reversed,
            }) },
            props.anchor === 'top' && (React.createElement("div", { className: clsx('w-0 h-0 border-transparent border-t-[8px] border-l-[8px] border-r-[8px]', isDark ? 'border-t-blue-301' : 'border-t-white') })),
            props.anchor === 'right' && (React.createElement("div", { className: clsx('w-0 h-0 border-transparent border-r-[8px] border-t-[8px] border-b-[8px]', isDark ? 'border-r-blue-301' : 'border-r-white') })),
            props.anchor === 'bottom' && (React.createElement("div", { className: clsx('w-0 h-0 border-transparent border-b-[8px] border-l-[8px] border-r-[8px]', isDark ? 'border-b-blue-301' : 'border-b-white') })),
            props.anchor === 'left' && (React.createElement("div", { className: clsx('w-0 h-0 border-transparent border-l-[8px] border-t-[8px] border-b-[8px]', isDark ? 'border-l-blue-301' : 'border-l-white') })),
            React.createElement("div", { className: clsx('flex items-center justify-center w-fit rounded', background, props.className) }, props.children || (React.createElement("span", { className: clsx('font-bold text-[13px] p-2 leading-4 select-none', text) }, props.label))))));
};

export { Popover as default };
