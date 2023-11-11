import { __assign } from 'tslib';
import React from 'react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import ArrowLeftIcon from '../../atom/icon/ArrowLeftIcon/ArrowLeftIcon.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useHAF from '../../atom/hook/useHAF.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Breadcrumb = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useHAF(), ref = _a.ref, hover = _a.hover, active = _a.active, focus = _a.focus;
    var fill = function () {
        if (props.static) {
            return color('dark-text');
        }
        else if (active) {
            return color('blue-301');
        }
        else if (focus || hover) {
            return color('brand-medium');
        }
        return color('brand');
    };
    return (React.createElement("button", __assign({}, baseProps, { ref: ref, onClick: props.onClick, name: props.name, className: clsx('flex items-center w-fit cursor-pointer h-5 rounded-[2px]', {
            'text-brand hover:text-brand-medium active:text-blue-301 focus:text-brand-medium hover:bg-blue-307 active:bg-blue-305 focus:bg-blue-306': !props.static,
        }, props.className) }),
        (!props.static || !props.hideIcon) && (React.createElement(ArrowLeftIcon, { className: 'ml-[1.33px] mr-[5.33px]', width: 16, height: 16, fill: fill() })),
        React.createElement("span", { className: 'text-xs font-extrabold uppercase tracking-[1.5px] whitespace-nowrap' }, props.label)));
};

export { Breadcrumb as default };
