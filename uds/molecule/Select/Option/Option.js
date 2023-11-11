import React, { useRef } from 'react';
import Checkbox from '../../Checkbox/Checkbox.js';
import Label from '../../../atom/component/Label/Label.js';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var Option = function (props) {
    var ref = useRef(null);
    var onClick = function () {
        var _a;
        if (!props.disabled) {
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props);
        }
    };
    var onClickHandler = function (ev) {
        var _a;
        if (ref.current === ev.target || !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(ev.target))) {
            ev.preventDefault();
            onClick();
        }
    };
    return (React.createElement("div", { "data-testid": 'optionWrapper', onClick: onClickHandler, className: clsx('flex items-center justify-between select-none', {
            'hover:bg-blue-306': !props.disabled,
            'bg-gray-cool-100 pointer-events-none': props.disabled,
            'bg-blue-307': props.selected,
            'rounded-lg mx-2 p-2': !props.variant || props.variant === 'primary',
            'text-blue-301 py-2 pr-2': props.variant === 'secondary',
            'pl-4': !props.selected && props.variant === 'secondary',
            'pl-3 border-l-4 border-l-brand-light': props.selected && props.variant === 'secondary',
        }, props.className) },
        React.createElement("div", { className: clsx('flex items-center', { truncate: !props.wrap }) },
            props.checkbox && (React.createElement(Checkbox, { disabled: props.disabled, indeterminate: props.indeterminate, checked: props.selected, onClick: onClick })),
            React.createElement(Label, { label: props.label, className: clsx({
                    'font-normal truncate': !props.wrap,
                    'ml-2': props.checkbox,
                    'text-disabled-text': props.disabled,
                }) })),
        props.children && (React.createElement("div", { ref: ref, className: clsx('ml-1 flex items-center', { 'opacity-50': props.disabled }) }, props.children))));
};

export { Option as default };
