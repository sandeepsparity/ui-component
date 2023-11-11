import { __assign } from 'tslib';
import React from 'react';
import Divider from '../Divider/Divider.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../tailwind.css.js';
import Timer from '../Timer/Timer.js';
import useBreakpoint from '../../atom/hook/useBreakpoint.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Footer = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useBreakpoint(), ref = _a.ref, md = _a.md;
    var year = function () { return new Date().getFullYear(); };
    var open = function (url) { return window.open(url, '_blank'); };
    var hasFutureTimeout = props.timeout && props.timeout.getTime() > new Date().getTime();
    var defaultLinks = [
        {
            label: 'Terms and Conditions',
            value: 'https://www.albertsonscompanies.com/policies-and-disclosures/terms-of-use/default.aspx',
        },
        {
            label: 'Privacy Policy',
            value: 'https://www.albertsonscompanies.com/policies-and-disclosures/privacy-policy/default.aspx',
        },
    ];
    var links = Array.isArray(props.links) && props.links.length > 0 ? props.links : defaultLinks;
    return (React.createElement("div", __assign({}, baseProps, { ref: ref, className: clsx('flex items-center px-7 w-full h-[52px] max-h-[52px] bg-gray-207 border-t border-gray-204', { 'flex-col justify-center': !md, 'flex-wrap justify-between': md }, props.className) }),
        React.createElement("span", { className: 'text-[13px] text-light-text whitespace-nowrap select-none' }, "\u00A9 ".concat(year(), " Albertsons Companies, Inc. All rights reserved.")),
        React.createElement("div", { className: 'flex items-center' },
            links.map(function (item, idx) {
                return (React.createElement("div", { key: idx, className: 'flex' },
                    React.createElement("span", { onClick: function () { return open(item.value); }, className: 'text-[13px] text-light-text whitespace-nowrap select-none cursor-pointer hover:text-brand-light' }, item.label),
                    links.length > idx + 1 && (React.createElement(Divider, { className: clsx({ 'mx-4': md, 'mx-2': !md }), height: 16, color: color('gray-204') }))));
            }),
            hasFutureTimeout && (React.createElement(React.Fragment, null,
                React.createElement(Divider, { className: clsx({ 'mx-4': md, 'mx-2': !md }), height: 16, color: color('gray-204') }),
                React.createElement(Timer, { timeout: props.timeout, className: 'h-fit' }))))));
};

export { Footer as default };
