import { __assign, __rest } from 'tslib';
import React, { useState, useEffect } from 'react';
import { X, Search as Search$1 } from 'lucide-react';
import clsx from 'clsx';
import useHAF from '../../atom/hook/useHAF.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import Divider from '../Divider/Divider.js';

var splitProps = function (_props) {
    var value = _props.value, onChange = _props.onChange, onClick = _props.onClick, rounded = _props.rounded, size = _props.size, error = _props.error, className = _props.className, borderRadius = _props.borderRadius, variant = _props.variant, rest = __rest(_props, ["value", "onChange", "onClick", "rounded", "size", "error", "className", "borderRadius", "variant"]);
    var props = {
        value: value,
        onChange: onChange,
        onClick: onClick,
        rounded: rounded,
        size: size,
        error: error,
        className: className,
        borderRadius: borderRadius,
        variant: variant,
    };
    return { props: props, rest: rest };
};
var Search = function (_props) {
    var _a = splitProps(_props), props = _a.props, rest = _a.rest;
    var _b = useState(props.value || ''), value = _b[0], setValue = _b[1];
    var _c = useHAF(), ref = _c.ref, overflowX = _c.overflowX;
    var onChange = function (input) {
        var _a, _b;
        var val = (typeof input === 'string' ? input : (_a = input === null || input === void 0 ? void 0 : input.target) === null || _a === void 0 ? void 0 : _a.value) || '';
        setValue(val);
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, val);
    };
    useEffect(function () {
        if (props.value !== value) {
            onChange(props.value);
        }
    }, [props.value]);
    return (React.createElement("div", { className: props.className },
        React.createElement("div", { className: clsx('flex items-center w-[inherit]', {
                'border focus-within:border-2': true,
                'border-gray-204 focus-within:border-brand-light [&.error]:border-error [&.disabled]:border-disabled': true,
                'bg-transparent hover:[&:not(.disabled)]:bg-blue-307 hover:[&:not(.disabled)]:[&.error]:bg-red-50 [&.disabled]:bg-gray-205': true,
                'h-[32px]': props.size === 'sm',
                'h-[40px]': !props.size || props.size === 'md',
                'h-[48px]': props.size === 'lg',
                'px-[12px] focus-within:px-[11px] rounded-[4px]': !props.rounded && !props.borderRadius,
                'px-[18px] focus-within:px-[17px] rounded-[20px]': props.rounded || props.borderRadius,
                error: props.error,
                disabled: rest.disabled,
            }) },
            React.createElement("input", __assign({}, rest, { value: value, onChange: onChange, className: 'w-full h-full bg-transparent border-0 outline-0 text-dark-text placeholder:font-light placeholder:light-text disabled:text-disabled-text disabled:placeholder:disabled-text' })),
            value.length > 0 && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'h-full flex justify-center items-center' },
                    React.createElement(X, { "data-testid": 'clear-icon', strokeWidth: 1.8, height: 24, color: color(rest.disabled ? 'disabled-text' : 'light-text'), onClick: function () { return onChange(''); }, className: clsx({ 'cursor-pointer': !rest.disabled }) })),
                React.createElement(Divider, { className: 'mx-2', height: 24, color: color('gray-204') }))),
            React.createElement("div", { className: 'h-full flex justify-center items-center' },
                React.createElement(Search$1, { "data-testid": 'search-icon', strokeWidth: 1.8, height: 24, color: color(rest.disabled ? 'disabled-text' : 'light-text'), onClick: props.onClick, className: clsx({ 'cursor-pointer': props.onClick }) }))),
        typeof props.error === 'string' && (React.createElement("div", { ref: ref, title: overflowX ? props.error : '', className: clsx('w-[inherit] text-error mt-1 font-bold text-sm whitespace-nowrap truncate leading-4 select-none', { 'px-[16px]': props.rounded || props.borderRadius }) }, props.error))));
};

export { Search as default };
