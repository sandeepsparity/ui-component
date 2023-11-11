import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var SidebarItem = function (props) {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var isMenuList = props.menuItem.type === 'MenuList' && props.menuItem.depth % 2 === 0;
    var selected = props.selected && (props.menuItem.type === 'MenuButton' || !open || !props.visible);
    var onClick = function () {
        var _a;
        if (isMenuList) {
            setOpen(!open);
        }
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    useEffect(function () {
        if (isMenuList) {
            setOpen(!!props.open || open);
        }
    }, [props.open]);
    return (React.createElement("div", { className: clsx('first:mt-0 mt-1', props.className) },
        React.createElement("div", { onClick: onClick, className: clsx('flex items-center justify-between min-h-[52px] mx-2 px-4 overflow-hidden border-[1.5px] rounded-md border-transparent font-extralight whitespace-nowrap select-none cursor-pointer active:bg-brand hover:border-brand-medium', { 'bg-brand-medium': selected }) },
            React.createElement("div", { className: 'flex items-center' },
                props.menuItem.icon &&
                    React.cloneElement(props.menuItem.icon, {
                        className: 'min-w-[18px] w-[18px]',
                        size: 18,
                        strokeWidth: 1.5,
                        color: color('gray-206'),
                    }),
                props.visible && (React.createElement("span", { className: clsx('mx-4 whitespace-nowrap text-sm font-medium text-gray-206 select-none', { 'pl-6': !props.menuItem.icon }) }, props.menuItem.label))),
            props.visible && isMenuList && (React.createElement(ChevronDown, { className: clsx('min-w-[18px] w-[18px] duration-200', {
                    '-rotate-180': props.visible && open,
                }), size: 18, strokeWidth: 1.5, color: color('gray-206') }))),
        props.children && (React.createElement(Transition, { show: props.visible && open, enter: 'transition-height overflow-hidden ease-in-out duration-200', enterFrom: 'max-h-0 opacity-0', enterTo: 'opacity-100', leave: 'transition-height overflow-hidden ease-in-out duration-200', leaveFrom: 'opacity-100', leaveTo: 'max-h-0 opacity-0', className: 'py-[2px] mx-2 text-gray-206' }, props.visible && open && (React.createElement("div", { className: 'bg-[#001425] rounded-md' }, React.Children.map(props.children, function (sidebarItem, idx) { return (React.createElement(Transition.Child, { key: idx, enter: 'transition-all ease-in-out duration-200', enterFrom: 'translate-x-1/4 opacity-0', enterTo: 'translate-x-0 opacity-100', leave: 'transition-height overflow-hidden ease-in-out duration-200', leaveFrom: 'max-h-screen opacity-100', leaveTo: 'max-h-0 opacity-0', style: { transitionDelay: "".concat(idx * 25, "ms") }, className: 'first:mt-0 mt-1 -mx-2' }, sidebarItem)); })))))));
};

export { SidebarItem as default };
