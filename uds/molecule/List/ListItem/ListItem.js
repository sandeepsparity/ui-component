import { __assign } from 'tslib';
import React from 'react';
import '../../../tailwind.css.js';
import clsx from 'clsx';
import useBaseProps from '../../../atom/hook/useBaseProps.js';

var ListItem = function (props) {
    var baseProps = useBaseProps(props);
    var onClick = function (ev) {
        if (!props.disabled && props.onClick) {
            props.onClick(ev);
        }
    };
    return (React.createElement("div", __assign({}, baseProps, { onClick: onClick, className: clsx('flex items-center h-[52px] pl-5 overflow-hidden border-[1.5px] rounded border-transparent font-extralight whitespace-nowrap select-none mb-[2px] last:mb-0', {
            'cursor-pointer active:bg-brand hover:border-brand-medium': !props.disabled,
            'bg-brand-medium': props.selected,
        }, props.className) }),
        React.createElement("div", { className: clsx('flex items-center', {
                'text-gray-206': !props.disabled,
                'text-disabled-text': props.disabled,
            }) }, props.children)));
};

export { ListItem as default };
