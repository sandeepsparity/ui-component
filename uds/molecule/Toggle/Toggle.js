import { __assign } from 'tslib';
import React from 'react';
import { Check, X } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import useHAF from '../../atom/hook/useHAF.js';
import clsx from 'clsx';
import '../../tailwind.css.js';

var Toggle = function (props) {
    var _a = useHAF(), ref = _a.ref, hover = _a.hover, focus = _a.focus;
    var fill = function () {
        if (props.checked) {
            return color('white');
        }
        else if (props.disabled) {
            return color('disabled-text');
        }
        else if (hover) {
            return color('brand-medium');
        }
        else if (focus) {
            return color('blue-301');
        }
        return color('gray-203');
    };
    var icon = function () {
        var dimensions = props.small ? { width: 9.5, height: 9.5 } : { width: 12, height: 12 };
        var Icon = props.checked ? Check : X;
        return React.createElement(Icon, __assign({}, dimensions, { color: fill(), strokeWidth: 4 }));
    };
    return (React.createElement("div", { className: props.className },
        React.createElement("div", { className: clsx("flex items-center overflow-visible rounded-lg h-2", props.small ? "w-8" : "w-10", { "bg-gray-204": !props.disabled, "bg-gray-205": props.disabled }) },
            React.createElement("button", { ref: ref, disabled: props.disabled, onClick: function () { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, !props.checked); }, className: clsx({
                    "flex items-center justify-center rounded-full transition-transform ease-in-out duration-300": true,
                    "w-4 h-4": props.small,
                    "w-5 h-5": !props.small,
                    "translate-x-full": props.checked,
                    "translate-x-0 bg-white border-2": !props.checked,
                    "bg-disabled": props.disabled && props.checked,
                    "border-disabled": props.disabled && !props.checked,
                    "cursor-pointer": !props.disabled,
                    "bg-brand-medium": !props.disabled && props.checked && hover,
                    "bg-blue-301": !props.disabled && props.checked && !hover && focus,
                    "bg-brand": !props.disabled && props.checked && !hover && !focus,
                    "border-brand-medium": !props.disabled && !props.checked && hover,
                    "border-blue-301": !props.disabled && !props.checked && !hover && focus,
                    "border-gray-203": !props.disabled && !props.checked && !hover && !focus,
                    "outline outline-[5px] outline-blue-306": !props.disabled && hover,
                    "outline outline-[5px] outline-blue-305": !props.disabled && !hover && focus,
                }) }, icon()))));
};

export { Toggle as default };
