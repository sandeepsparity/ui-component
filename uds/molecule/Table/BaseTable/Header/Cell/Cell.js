import React from 'react';
import { ArrowUpDown, SortAsc, SortDesc } from 'lucide-react';
import { Direction } from '../../../Table.types.js';
import 'tslib';
import { color } from '../../../../../atom/util/colors.js';
import '../../../../../atom/util/dayjs.js';
import 'react-dom/client';
import { isColumnGroup } from '../../../../../atom/util/table.js';
import useHAF from '../../../../../atom/hook/useHAF.js';
import clsx from 'clsx';
import '../../../../../tailwind.css.js';

var Cell = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = useHAF(), ref = _h.ref, hover = _h.hover;
    var align = ((_a = props.column) === null || _a === void 0 ? void 0 : _a.align) || 'left';
    var style = { minWidth: (_b = props.column) === null || _b === void 0 ? void 0 : _b.minWidth, width: (_c = props.column) === null || _c === void 0 ? void 0 : _c.width, maxWidth: (_d = props.column) === null || _d === void 0 ? void 0 : _d.maxWidth };
    var className = { "cursor-pointer bg-blue-307": props.column && !isColumnGroup(props.column) && !!props.column.sortable && hover };
    var isCustomHeader = !!((_e = props.column) === null || _e === void 0 ? void 0 : _e.label) && typeof props.column.label === 'function' || React.isValidElement((_f = props.column) === null || _f === void 0 ? void 0 : _f.label);
    var iconWrapper = function (node) { return (React.createElement("div", { className: "flex items-center justify-between w-full h-full" },
        React.createElement("div", { className: "flex items-center w-full h-full" }, node),
        icon())); };
    var render = function () {
        if (!props.column) {
            return null;
        }
        else if (typeof props.column.label === 'function') {
            return props.column.label(props.column.sortable ? { icon: icon() } : {});
        }
        else if (React.isValidElement(props.column.label)) {
            return !props.column.sortable ? props.column.label : iconWrapper(props.column.label);
        }
        else if (props.column.label) {
            var node = (React.createElement("span", { className: "px-3 font-bold text-sm leading-4 text-dark-text select-none whitespace-nowrap truncate" }, String(props.column.label)));
            return !props.column.sortable ? node : iconWrapper(node);
        }
        return null;
    };
    var icon = function () {
        var _icon = function () {
            var _a;
            if (!((_a = props.column) === null || _a === void 0 ? void 0 : _a.sortable)) {
                return null;
            }
            else if (!props.column.direction) {
                return React.createElement(ArrowUpDown, { className: clsx('min-w-[13px]', { 'mx-2': !isCustomHeader }, { invisible: !hover }), size: 13, color: color('light-text') });
            }
            else if (props.column.direction === Direction.ASC) {
                return React.createElement(SortAsc, { className: clsx('min-w-[13px]', { 'mx-2': !isCustomHeader }), size: 13, color: color('light-text') });
            }
            else if (props.column.direction === Direction.DESC) {
                return React.createElement(SortDesc, { className: clsx('min-w-[13px]', { 'mx-2': !isCustomHeader }), size: 13, color: color('light-text') });
            }
        };
        return !_icon() ? null : (React.createElement("div", { onClick: isCustomHeader ? onClick : undefined, className: clsx("w-fit h-fit", { "p-1 rounded-full hover:bg-gray-204": isCustomHeader }) }, _icon()));
    };
    var onClick = function () {
        if (props.column && props.column.sortable && props.toggleSort) {
            props.toggleSort(props.column);
        }
    };
    return (React.createElement("th", { ref: ref, align: align, onClick: !isCustomHeader ? onClick : undefined, colSpan: props.span || 1, className: clsx(className, (_g = props.column) === null || _g === void 0 ? void 0 : _g.className, props.className), style: style }, render()));
};

export { Cell as default };
