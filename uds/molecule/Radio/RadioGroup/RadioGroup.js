import { __assign } from 'tslib';
import React, { useState, useEffect } from 'react';
import '../../../foundation/color/index.js';
import '../../../atom/util/dayjs.js';
import { findByType } from '../../../atom/util/react.js';
import Radio from '../Radio.js';
import clsx from 'clsx';
import '../../../tailwind.css.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';

var RadioGroup = function (props) {
    var _a;
    var baseProps = useBaseProps(props);
    var _b = useState(props.value), value = _b[0], setValue = _b[1];
    var onChange = function (val) {
        setValue(val);
        if (props.onChange) {
            props.onChange(val);
        }
    };
    useEffect(function () {
        if (props.value !== value) {
            setValue(props.value);
        }
    }, [props.value]);
    return (React.createElement("div", __assign({ className: props.className }, baseProps),
        props.label && (React.createElement("div", { className: 'flex items-center' },
            React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none truncate' }, props.label),
            props.isRequired && (React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none ml-1 text-error' }, "*")))),
        React.createElement("div", { className: clsx('flex', { 'flex-col': !props.horizontal }) }, (_a = findByType(props.children, Radio.name)) === null || _a === void 0 ? void 0 : _a.map(function (child, idx) { return (React.createElement(Radio, __assign({}, child.props, { key: idx, id: child.props.id || String(idx), label: child.props.label, checked: child.props.value === value, value: child.props.value, disabled: props.disabled || child.props.disabled, dense: props.variant === 'small', error: props.error, onChange: function () { return onChange(child.props.value); }, children: child.props.children, className: clsx('', {
                'mt-2': idx > 0 && props.variant === 'small' && !props.horizontal,
                'mt-[10px]': idx > 0 && (props.variant === 'medium' || !props.variant) && !props.horizontal,
                'mt-[14px]': idx > 0 && props.variant === 'large' && !props.horizontal,
                'ml-[14px]': idx > 0 && props.variant === 'small' && props.horizontal,
                'ml-[17px]': idx > 0 && (props.variant === 'medium' || !props.variant) && props.horizontal,
                'ml-6': idx > 0 && props.variant === 'large' && props.horizontal,
            }, child.props.className) }))); })),
        props.error && (React.createElement("div", { className: 'text-sm leading-4 font-bold text-error mt-1 whitespace-nowrap select-none truncate' }, props.error))));
};

export { RadioGroup as default };
