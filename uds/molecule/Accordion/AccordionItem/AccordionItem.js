import { __rest, __assign } from 'tslib';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import { findChildrenByType } from '../../../atom/util/react.js';
import ChevronDownIcon from '../../../atom/icon/ChevronDownIcon/ChevronDownIcon.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';
import { cva } from 'class-variance-authority';

var Header = function (props) { return React.createElement("div", null, props.children); };
var Content = function (props) { return React.createElement("div", null, props.children); };
var accordionItemStyles = cva([
    'flex',
    'justify-between',
    'items-center',
    'h-[52px]',
    'pl-5',
    'pr-3',
    'overflow-hidden',
    'border-[1.5px]',
    'rounded',
    'font-extralight',
    'whitespace-nowrap',
    'select-none',
], {
    variants: {
        variant: {
            dark: ['border-transparent'],
            light: ['bg-white', 'active:!bg-white', '!border-0', 'rounded-none'],
        },
        disabled: {
            false: 'cursor-pointer active:bg-brand',
        },
        selected: {
            true: 'bg-brand-medium',
        },
        isOpen: {
            true: 'mb-[2px] last:mb-0',
        },
    },
    compoundVariants: [
        {
            variant: 'dark',
            disabled: false,
            class: 'hover:border-brand-medium',
        },
        {
            variant: 'light',
            isOpen: false,
            class: '!border-b last:!border-b-0',
        },
    ],
    defaultVariants: {
        variant: 'dark',
        selected: false,
        disabled: false,
    },
});
var headerStyles = cva(['flex', 'items-center'], {
    variants: {
        disabled: {
            true: 'text-disabled-text',
            false: 'text-gray-206',
        },
    },
    defaultVariants: {
        disabled: false,
    },
});
var contentStyles = cva(['px-2', 'text-gray-206'], {
    variants: {
        variant: { dark: '', light: '' },
        isOpen: {
            true: 'mb-[2px] last:mb-0',
        },
    },
    compoundVariants: [
        {
            variant: 'dark',
            isOpen: true,
            class: '-mx-2 bg-[#001425]',
        },
        {
            variant: 'light',
            isOpen: true,
            class: 'border-b last:border-b-0',
        },
    ],
    defaultVariants: {
        variant: 'dark',
        isOpen: false,
    },
});
var iconStyles = cva(['duration-200'], {
    variants: {
        iconRotatable: { true: '' },
        isOpen: { true: '' },
    },
    compoundVariants: [
        {
            iconRotatable: true,
            isOpen: true,
            class: '-rotate-180',
        },
    ],
    defaultVariants: {
        iconRotatable: true,
        isOpen: false,
    },
});
var AccordionItem = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? 'dark' : _c, _d = _a.iconRotatable, iconRotatable = _d === void 0 ? true : _d, className = _a.className, props = __rest(_a, ["variant", "iconRotatable", "className"]);
    var baseProps = useBaseProps(props);
    var _e = useState(false), isOpen = _e[0], setOpen = _e[1];
    var onClick = function (ev) {
        if (!props.disabled) {
            setOpen(function (open) { return !open; });
            if (props.onClick) {
                props.onClick(ev);
            }
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", __assign({}, baseProps, { onClick: onClick, className: accordionItemStyles({
                variant: variant,
                disabled: props.disabled,
                selected: props.selected,
                isOpen: isOpen,
                className: className,
            }) }),
            React.createElement("div", { className: headerStyles({ disabled: props.disabled }) }, findChildrenByType(props.children, 'Header')),
            !props.hideIcon && (React.createElement("div", { className: iconStyles({ iconRotatable: iconRotatable, isOpen: isOpen }) }, props.collapseIcon && isOpen
                ? props.collapseIcon
                : props.expandIcon ||
                    props.icon || (React.createElement(ChevronDownIcon, { title: 'chevron-down', className: 'mx-3', fill: props.disabled ? color('disabled-text') : color('gray-206') }))))),
        React.createElement(Transition, { show: isOpen, enter: 'transition-height overflow-hidden ease-in-out duration-200', enterFrom: 'max-h-0 opacity-0', enterTo: 'opacity-100', leave: 'transition-height overflow-hidden ease-in-out duration-200', leaveFrom: 'opacity-100', leaveTo: 'max-h-0 opacity-0', className: contentStyles({ isOpen: isOpen, variant: variant }) }, isOpen &&
            ((_b = findChildrenByType(props.children, 'Content')) === null || _b === void 0 ? void 0 : _b.map(function (child, idx) { return (React.createElement(Transition.Child, { key: idx, enter: 'transition transform ease-in-out duration-200', enterFrom: 'translate-x-full', enterTo: 'translate-x-0', leave: 'transition-height overflow-hidden ease-in-out duration-200', leaveFrom: 'max-h-screen opacity-100', leaveTo: 'max-h-0 opacity-0', style: { transitionDelay: "".concat(idx * 25, "ms") } }, child)); })))));
};
var AccordionItem$1 = Object.assign(AccordionItem, { Header: Header, Content: Content });

export { AccordionItem$1 as default };
