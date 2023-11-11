import { __assign } from 'tslib';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import { findByType, findChildrenByType } from '../../atom/util/react.js';
import Divider from '../Divider/Divider.js';
import Slider from '../../atom/component/Slider/Slider.js';
import clsx from 'clsx';
import Fader from '../../atom/component/Fader/Fader.js';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Header = function (props) { return React.createElement("div", null, props.children); };
var Content = function (props) { return React.createElement("div", null, props.children); };
var Footer = function (props) { return React.createElement("div", null, props.children); };
var Card = function (props) {
    var _a;
    var baseProps = useBaseProps(props);
    var _b = useState(!!props.isOpen || !props.collapsible), isOpen = _b[0], setOpen = _b[1];
    var hasFooter = isOpen && !!((_a = findByType(props.children, 'Footer')) === null || _a === void 0 ? void 0 : _a.length);
    var toggle = function () {
        if (props.collapsible) {
            setOpen(!isOpen);
            if (props.onChange) {
                props.onChange(!isOpen);
            }
        }
    };
    useEffect(function () {
        setOpen(!!props.isOpen || !props.collapsible);
    }, [props.isOpen]);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx('bg-gray-208 border border-gray-204 rounded-lg drop-shadow relative', props.className), style: { zIndex: props.zIndex } }),
        props.customHeader ? (findChildrenByType(props.children, 'Header')) : (React.createElement("div", { "data-testId": 'header', onClick: toggle, className: clsx('flex items-center w-full h-[64px] -mb-[1px] px-4', {
                'cursor-pointer': props.collapsible,
                'border-b border-gray-204': isOpen,
            }) },
            props.collapsible && (React.createElement("div", { className: 'flex flex-col items-center justify-center min-w-[32px] w-[32px] min-h-[32px] h-[32px]' },
                React.createElement(ChevronDown, { height: 12, strokeWidth: 1, color: color('dark-text'), className: clsx('relative top-[6px] min-w-[24px] min-h-[24px] transition duration-200', { 'rotate-180': !props.isOpen }) }),
                React.createElement(ChevronUp, { height: 12, strokeWidth: 1, color: color('dark-text'), className: clsx('relative bottom-[6px] min-w-[24px] min-h-[24px] transition duration-200', { '-rotate-180': !props.isOpen }) }))),
            props.title && (React.createElement("span", { className: 'font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap' }, props.title)),
            props.subtitle && (React.createElement(React.Fragment, null,
                props.title && React.createElement(Divider, { className: 'mx-2', height: 32, color: color('gray-204') }),
                React.createElement("span", { className: 'text-lg leading-6 select-none whitespace-nowrap' }, props.subtitle))),
            findChildrenByType(props.children, 'Header'))),
        React.createElement(Fader, { isOpen: isOpen, className: clsx({ hidden: !isOpen }) },
            React.createElement(Slider, { isOpen: isOpen, className: clsx({ hidden: !isOpen }) },
                React.createElement("div", { className: 'w-full h-full px-6 pt-6 pb-8' }, findChildrenByType(props.children, 'Content')))),
        hasFooter && (React.createElement("div", { "data-testId": 'footer', className: 'w-full h-[32px] px-6 border-t border-gray-204' }, findChildrenByType(props.children, 'Footer')))));
};
var Card$1 = Object.assign(Card, { Header: Header, Content: Content, Footer: Footer });

export { Card$1 as default };
