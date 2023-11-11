import { __assign } from 'tslib';
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { intersperse } from '../../atom/util/array.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import { findByType } from '../../atom/util/react.js';
import Divider from '../Divider/Divider.js';
import Tab from './Tab/Tab.js';
export { default as Tab } from './Tab/Tab.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';

var TabBar = function (props) {
    var _a = useState(false), overflow = _a[0], setoverflow = _a[1];
    var sliderRef = useRef(null);
    var tabs = findByType(props.children, Tab.name);
    useLayoutEffect(function () {
        var checkoverflow = function () {
            var _a, _b;
            if (sliderRef.current) {
                var isoverflow = ((_a = sliderRef === null || sliderRef === void 0 ? void 0 : sliderRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) < ((_b = sliderRef === null || sliderRef === void 0 ? void 0 : sliderRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth);
                setoverflow(isoverflow);
            }
        };
        window.addEventListener('resize', checkoverflow);
        return function () { return window.removeEventListener('resize', checkoverflow); };
    }, []);
    useEffect(function () {
        var _a, _b;
        if (sliderRef.current) {
            var isoverflow = ((_a = sliderRef === null || sliderRef === void 0 ? void 0 : sliderRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) < ((_b = sliderRef === null || sliderRef === void 0 ? void 0 : sliderRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth);
            setoverflow(isoverflow);
        }
    }, [props.children]);
    var handleSlide = function (scrollOffset) {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollOffset;
        }
    };
    var baseProps = useBaseProps(props);
    var _b = useState(props.selected || 0), tabIdx = _b[0], setTabIdx = _b[1];
    var onClick = function (idx) {
        setTabIdx(idx);
    };
    useEffect(function () {
        if (props.onChange) {
            props.onChange(tabIdx);
        }
    }, [props.onChange, tabIdx]);
    useEffect(function () {
        if (props.selected !== tabIdx && props.selected) {
            setTabIdx(props === null || props === void 0 ? void 0 : props.selected);
        }
    }, [props.selected]);
    var hideBorder = function () {
        if (props.hideBorder) {
            return 'border-none';
        }
        else {
            return 'border-[1px]';
        }
    };
    var generateTabs = function () {
        var children = React.Children.map(tabs, function (tab, idx) {
            var _a, _b;
            return (React.createElement(React.Fragment, null,
                React.createElement(Tab, { key: idx, disabled: (_a = tab === null || tab === void 0 ? void 0 : tab.props) === null || _a === void 0 ? void 0 : _a.disabled, hideBorder: props.hideBorder, selected: tabIdx === idx, onClick: function () { return onClick(idx); } }, (_b = tab === null || tab === void 0 ? void 0 : tab.props) === null || _b === void 0 ? void 0 : _b.children)));
        });
        var divider = React.createElement(Divider, { color: color('gray-204'), height: 24 });
        return intersperse(divider, children).map(function (tab, key) { return (__assign(__assign({}, tab), { key: key })); });
    };
    return (React.createElement("div", __assign({ className: clsx('flex flex-col', props.className) }, baseProps),
        React.createElement("div", { className: clsx('h-[40px] min-h-[40px] max-h-[40px] flex border-t border-b bg-white  border-gray-204 rounded-lg w-full', hideBorder()) },
            overflow && (React.createElement("span", { className: 'flex items-center' },
                React.createElement(ChevronLeft, { className: clsx('w-[25px] cursor-pointer '), onClick: function () {
                        handleSlide(-200);
                    }, size: 40, color: color('dark-text') }))),
            React.createElement("div", { ref: sliderRef, className: clsx(' h-full no-scrollbar no-scrollbar::-webkit-scrollbar overflow-x-scroll whitespace-nowrap scroll-smooth flex w-full') },
                React.createElement(Transition, { show: true, enter: 'transform transition ease-in-out duration-300', enterFrom: 'translate-x-full', enterTo: 'translate-x-0', className: 'flex w-full h-full items-center' }, generateTabs())),
            overflow && (React.createElement("span", { className: 'flex items-center' },
                React.createElement(ChevronRight, { className: clsx('w-[25px] cursor-pointer '), onClick: function () {
                        handleSlide(200);
                    }, size: 40, color: color('dark-text') }))))));
};

export { TabBar as default };
