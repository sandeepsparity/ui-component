import { __assign } from 'tslib';
import React from 'react';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var Header = function (props) { return React.createElement("div", null, props.children); };
var Content = function (props) { return React.createElement("div", null, props.children); };
var Tab = function (props) {
    var onClick = function (ev) {
        if (!props.disabled && props.onClick) {
            props.onClick(ev);
        }
    };
    return (React.createElement("span", __assign({ "data-testid": 'tab' }, props, { onClick: onClick, className: clsx('pt-[14px] mx-auto select-none', props.variant === 'light' ? 'text-dark' : 'text-white', {
            'cursor-pointer': !props.disabled,
            'text-data-light-gray-70': props.disabled,
            'border-b-[3px] border-brand-light': props.selected,
        }, props.className) }), props.children));
};
var Tab$1 = Object.assign(Tab, { Header: Header, Content: Content });

export { Tab$1 as default };
