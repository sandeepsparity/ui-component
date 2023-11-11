import { __assign, __spreadArray } from 'tslib';
import React, { useState, useRef, useEffect } from 'react';
import { range } from '../../atom/util/array.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Pagination = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(props.page || 1), page = _a[0], setPage = _a[1];
    var boundary = props.boundary === 0 ? 0 : props.boundary || 1;
    var siblings = props.siblings === 0 ? 0 : props.siblings || 1;
    var onChange = function (pg) {
        setPage(pg);
        if (props.onChange) {
            props.onChange(pg);
        }
    };
    var pages = function () {
        var left = range(1 + Math.min(boundary, props.pages), 1);
        var right = range(1 + props.pages, Math.max(props.pages - boundary + 1, boundary + 1));
        var centerStart = Math.max(Math.min(page - siblings, props.pages - boundary - siblings * 2 - 1), boundary + 2);
        var centerEnd = 1 +
            Math.min(Math.max(page + siblings, boundary + siblings * 2 + 2), right.length > 0 ? right[0] - 2 : props.pages - 1);
        var center = range(centerEnd, centerStart);
        var dividerLeftOpt = boundary + 1 < props.pages - boundary ? [boundary + 1] : [];
        var dividerLeft = centerStart > boundary + 2 ? [0] : dividerLeftOpt;
        var dividerRightOpt = props.pages - boundary > boundary ? [props.pages - boundary] : [];
        var dividerRight = centerEnd < props.pages - boundary ? [0] : dividerRightOpt;
        useEffect(function () {
            if (props.pages) {
                var pg = Math.min(Math.max(props.page || 1, 1), props.pages);
                if (pg !== page) {
                    setPage(pg);
                }
            }
        }, [props.pages, props.page]);
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], left, true), dividerLeft, true), center, true), dividerRight, true), right, true);
    };
    var inputRef = useRef(null);
    var lastPage = pages()[pages().length - 1];
    var firstPage = pages()[0];
    var handleJump = function (e) {
        if ((e.key == 'Enter' || e.type === 'blur') && e.target.value !== '') {
            var jumpVal = void 0;
            if (Number(e.target.value) > lastPage) {
                jumpVal = lastPage;
            }
            else if (Number(e.target.value) < firstPage) {
                jumpVal = firstPage;
            }
            else {
                jumpVal = e.target.value;
            }
            onChange(Number(jumpVal));
            if (inputRef.current)
                inputRef.current.value = '';
        }
    };
    return (React.createElement("div", __assign({ className: props.className }, baseProps, { "data-testid": 'pagination-container' }),
        React.createElement("div", { className: 'flex items-center justify-center w-fit' },
            props.showButtons && (React.createElement("span", { onClick: function () { return onChange(1); }, className: clsx('flex items-center justify-center h-10 mr-2 bg-white border border-gray-204 rounded font-semibold text-dark-text hover:bg-blue-307 whitespace-nowrap select-none cursor-pointer active:bg-blue-305', props.showIconButtons ? 'w-10' : ' w-14'), "data-testid": 'pagination-first-button' }, props.showIconButtons ? React.createElement(ChevronsLeft, { color: color('light-text') }) : 'First')),
            React.createElement("span", { onClick: function () { return onChange(Math.max(1, page - 1)); }, className: clsx('flex items-center justify-center w-10 h-10 bg-white border border-gray-204 rounded-l', { 'cursor-pointer hover:bg-blue-307 active:bg-blue-305': page !== 1 }) },
                React.createElement(ChevronLeft, { size: 24, strokeWidth: 1.5, color: color(page === 1 ? 'disabled' : 'light-text'), "data-testid": 'pagination-prev-btn' })),
            pages().map(function (pg, key) {
                return pg ? (React.createElement("span", { key: key, onClick: function () { return onChange(pg); }, className: clsx('flex items-center justify-center p-2 w-auto min-w-[38px] h-10 bg-white -mx-[1px] border border-gray-204 font-bold text-light-text hover:bg-blue-307 whitespace-nowrap select-none cursor-pointer active:bg-blue-305', { 'border-b-4 border-b-brand-light pt-2.5': pg === page }), "data-testid": "page-span-".concat(pg) }, pg)) : (React.createElement("span", { key: key, className: 'flex items-center justify-center p-2 h-10 bg-white -mx-[1px] border border-gray-204 font-bold text-light-text whitespace-nowrap select-none', "data-testid": 'page-span-ellipsis' }, "..."));
            }),
            React.createElement("span", { onClick: function () { return onChange(Math.min(props.pages, page + 1)); }, className: clsx('flex items-center justify-center w-10 h-10 bg-white border border-gray-204 rounded-r', { 'cursor-pointer hover:bg-blue-307 active:bg-blue-305': page !== props.pages }) },
                React.createElement(ChevronRight, { size: 24, strokeWidth: 1.5, color: color(page === props.pages ? 'disabled' : 'light-text'), "data-testid": 'pagination-next-btn' })),
            props.showButtons && (React.createElement("span", { onClick: function () { return onChange(props.pages); }, className: clsx('flex items-center justify-center h-10 ml-2 bg-white border border-gray-204 rounded font-semibold text-dark-text hover:bg-blue-307 whitespace-nowrap select-none cursor-pointer active:bg-blue-305', props.showIconButtons ? 'w-10' : ' w-14'), "data-testid": 'pagination-last-button' }, props.showIconButtons ? React.createElement(ChevronsRight, { color: color('light-text') }) : 'Last')),
            props.jumper && (React.createElement(React.Fragment, null,
                React.createElement("span", { className: 'flex items-center justify-center text-dark-text ml-4 mr-2 w-14 h-6 whitespace-nowrap select-none', "data-testid": 'pagination-jumper' }, "Jump To"),
                React.createElement("input", { onBlur: handleJump, onKeyDown: handleJump, ref: inputRef, type: 'number', className: 'flex items-center justify-center p-3 w-[60px] h-10 bg-white border border-gray-204 rounded font-semibold text-dark-text whitespace-nowrap select-none focus:outline-brand-light', "data-testid": 'pagination-jumper-input' }))))));
};

export { Pagination as default };
