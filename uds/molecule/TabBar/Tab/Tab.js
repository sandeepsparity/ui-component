import React from 'react';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var Tab = function (props) {
    var onClick = function (ev) {
        if (!props.disabled && props.onClick) {
            props.onClick(ev);
        }
    };
    return (React.createElement("span", { className: clsx('h-full  select-none min-w-[205px] flex justify-center items-center', props.className) },
        React.createElement("span", { onClick: onClick, className: clsx('min-w-[156px] select-none h-full text-dark-text flex justify-center items-center', {
                'cursor-pointer': !props.disabled,
                'text-data-light-gray-70': props.disabled,
                'border-b-[3px] border-brand-light': props.selected,
                'border-b-[3px] border-transparent': !props.selected,
            }) }, props.children)));
};

export { Tab as default };
