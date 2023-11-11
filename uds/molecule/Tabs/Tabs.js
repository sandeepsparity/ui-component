import { __assign } from 'tslib';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { intersperse } from '../../atom/util/array.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import { findByType, findChildrenByType } from '../../atom/util/react.js';
import Divider from '../Divider/Divider.js';
import MoreHorizontalIcon from '../../atom/icon/MoreHorizontalIcon/MoreHorizontalIcon.js';
import Tab from './Tab/Tab.js';
export { default as Tab } from './Tab/Tab.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Tabs = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(props.initialTab || 0), tabIdx = _a[0], setTabIdx = _a[1];
    var onClick = function (idx) {
        setTabIdx(idx);
        if (props.onChange) {
            props.onChange(idx);
        }
    };
    var headers = function () {
        var _a;
        var children = (_a = findByType(props.children, Tab.name)) === null || _a === void 0 ? void 0 : _a.map(function (tab, idx) {
            var _a, _b;
            return React.createElement(Tab, {
                key: idx,
                disabled: (_a = tab === null || tab === void 0 ? void 0 : tab.props) === null || _a === void 0 ? void 0 : _a.disabled,
                variant: props.variant,
                hideBorder: props.hideBorder,
                selected: tabIdx === idx,
                onClick: function () { return onClick(idx); },
            }, findChildrenByType((_b = tab === null || tab === void 0 ? void 0 : tab.props) === null || _b === void 0 ? void 0 : _b.children, Tab.Header.name));
        });
        if (props.hideDividers) {
            return children;
        }
        var divider = React.createElement(Divider, { color: color('light-text'), height: 24 });
        return intersperse(divider, children).map(function (tab, key) { return (__assign(__assign({}, tab), { key: key })); });
    };
    var content = function () {
        var _a, _b;
        var tab = (_a = findByType(props.children, Tab.name)) === null || _a === void 0 ? void 0 : _a[tabIdx];
        return tab && findChildrenByType((_b = tab === null || tab === void 0 ? void 0 : tab.props) === null || _b === void 0 ? void 0 : _b.children, Tab.Content.name);
    };
    var fill = function () { return (props.variant === 'light' ? color('dark-text') : color('gray-206')); };
    var variant = function () {
        switch (props.variant) {
            case 'light':
                return 'bg-white text-dark-text border-gray-203';
            case 'dark':
                return 'bg-blue-309 border-brand';
            default:
                return 'bg-blue-309 border-brand';
        }
    };
    var hideBorder = function () {
        if (props.hideBorder) {
            return 'border-none';
        }
        else {
            return 'border-[1px]';
        }
    };
    return (React.createElement("div", __assign({ className: clsx('flex flex-col overflow-hidden', props.className) }, baseProps),
        React.createElement("div", { className: clsx('h-[52px] min-h-[52px] max-h-[52px]  overflow-hidden border-t border-b', variant(), hideBorder()) },
            React.createElement(Transition, { show: !!props.collapsed, enter: 'transform transition ease-in-out duration-300', enterFrom: '-translate-x-full', enterTo: 'translate-x-0', className: 'flex items-center w-full h-full' },
                React.createElement(MoreHorizontalIcon, { title: 'collapsedIcon', className: 'mx-auto', fill: fill() })),
            React.createElement(Transition, { show: !props.collapsed, enter: 'transform transition ease-in-out duration-300', enterFrom: 'translate-x-full', enterTo: 'translate-x-0', className: 'flex justify-between w-full h-full' }, headers())),
        React.createElement("div", { className: clsx('-mr-[15px] overflow-x-hidden overflow-y-scroll', {
                'bg-brand-dark bg-gradient-to-b from-brand-dark via-brand-dark/70 to-black/30': !props.transparent && props.variant === 'dark',
            }) }, content())));
};

export { Tabs as default };
