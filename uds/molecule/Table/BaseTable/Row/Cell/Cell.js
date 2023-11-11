import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'tslib';
import { color } from '../../../../../atom/util/colors.js';
import '../../../../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../../../../tailwind.css.js';

var Cell = function (props) {
    var align = props.column.align || 'left';
    var style = { minWidth: props.column.minWidth, width: props.column.width, maxWidth: props.column.maxWidth };
    var render = function () {
        if (props.loading) {
            return React.createElement(Skeleton, { wrapper: function (_a) {
                    var children = _a.children;
                    return React.createElement("div", { className: "flex h-full max-h-12 p-[1px]", style: style }, children);
                }, height: 46, baseColor: color('gray-206'), highlightColor: color('white'), duration: 3 });
        }
        else if (typeof props.column.value === 'function') {
            return props.column.value(props.item, props.toggle, props.expanded);
        }
        else if (typeof props.column.value === 'string' && typeof props.item === 'object' && props.column.value in props.item) {
            return (React.createElement("span", { className: "px-3 text-sm leading-4 text-dark-text select-none whitespace-nowrap truncate" }, String(props.item[props.column.value])));
        }
        else {
            return null;
        }
    };
    return (React.createElement("td", { align: align, className: clsx(props.column.clazz, props.className), style: style }, render()));
};

export { Cell as default };
