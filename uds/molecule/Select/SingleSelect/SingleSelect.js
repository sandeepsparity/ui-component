import React, { forwardRef, useState, useRef, useMemo, useEffect } from 'react';
import { CellMeasurerCache, List, CellMeasurer } from 'react-virtualized';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import ChevronDownIcon from '../../../atom/icon/ChevronDownIcon/ChevronDownIcon.js';
import Label from '../../../atom/component/Label/Label.js';
import Option from '../Option/Option.js';
import Popper from '../../Popper/Popper.js';
import Search from '../Search/Search.js';
import clsx from 'clsx';
import useHAF from '../../../atom/hook/useHAF.js';
import '../../../tailwind.css.js';

var options = {
    placement: 'bottom-start',
    modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
        { name: 'flip', enabled: false },
    ],
};
var SingleSelect = forwardRef(function (props, ref) {
    var _a, _b;
    var _c = useHAF(ref), buttonRef = _c.ref, hover = _c.hover, active = _c.active;
    var _d = useState(), selection = _d[0], setSelection = _d[1];
    var _e = useState(false), open = _e[0], setOpen = _e[1];
    var _f = useState(''), query = _f[0], setQuery = _f[1];
    var cache = useRef(new CellMeasurerCache({ fixedWidth: true, defaultHeight: 42 }));
    var items = useMemo(function () {
        if (!query || !props.search) {
            return props.items;
        }
        else if (typeof props.search === 'function') {
            return props.items.filter(function (_a) {
                var item = _a.item;
                return props.search(item, query);
            });
        }
        else {
            return props.items.filter(function (_a) {
                var label = _a.label;
                return label.toLowerCase().includes(query.toLowerCase());
            });
        }
    }, [query, props.search, props.items]);
    var onChange = function (selected) {
        var _a;
        setSelection(selected);
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, selected.item);
        setOpen(false);
    };
    var onClick = function (ev) {
        var _a;
        setOpen(!open);
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, ev);
    };
    var onBlur = function (ev) {
        if (ev.relatedTarget !== ev.target.previousElementSibling) {
            setOpen(false);
        }
    };
    var onSearch = function (query) {
        var _a;
        (_a = props.onSearch) === null || _a === void 0 ? void 0 : _a.call(props, query);
        if (props.search) {
            setQuery(query);
        }
    };
    var text = function () {
        var classes = clsx({ 'text-sm': props.size === 'sm' });
        switch (props.variant) {
            case 'secondary':
            case 'tertiary':
                return clsx(classes, {
                    'text-disabled-text': props.disabled,
                    'text-blue-301 hover:text-brand-medium active:text-blue-301': !props.disabled && open,
                    'text-brand hover:text-brand-medium active:text-blue-301': !props.disabled && !open,
                });
            case 'quaternary':
                return clsx(classes, {
                    'text-disabled-text': props.disabled,
                    'text-blue-301 hover:text-brand-medium active:text-blue-301': !props.disabled && open,
                    'text-dark-text hover:text-brand-medium active:text-blue-301': !props.disabled && !open,
                });
            default:
                return clsx(classes, {
                    'text-disabled-text': props.disabled,
                    'text-dark-text': !props.disabled,
                });
        }
    };
    var height = function () {
        switch (props.size) {
            case 'md':
                return 'h-10';
            case 'sm':
                return 'h-8';
            default:
                return 'h-12';
        }
    };
    var background = function () {
        switch (props.variant) {
            case 'tertiary':
            case 'quaternary':
                return clsx('bg-white', { 'hover:bg-blue-307 active:bg-blue-305': !props.disabled });
            default:
                return clsx({
                    'bg-white hover:bg-blue-307 active:bg-blue-305': !props.disabled,
                    'bg-gray-205': props.disabled,
                });
        }
    };
    var border = function () {
        switch (props.variant) {
            case 'secondary':
                return clsx('rounded-lg border-2 border-solid', {
                    'border-disabled': props.disabled,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-3 outline-error': !props.disabled && props.error,
                    'border-brand hover:border-brand-medium active:border-blue-301': !props.disabled && !props.error && !open,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-4 outline-[#BFD4E7]': !props.disabled && !props.error && open,
                });
            case 'tertiary':
                return clsx('rounded-lg', {
                    'outline outline-2 outline-error': !props.disabled && props.error,
                    'outline outline-4 outline-[#BFD4E7]': !props.disabled && !props.error && open,
                });
            case 'quaternary':
                return clsx('rounded-lg', {
                    'outline outline-2 outline-error': !props.disabled && props.error,
                    'outline outline-4 outline-none': !props.disabled && !props.error && open,
                });
            default:
                return clsx('rounded border border-solid', {
                    'border-disabled': props.disabled,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-2 outline-error': !props.disabled && props.error,
                    'border-[#BFD4E7]': !props.disabled && !props.error && !open,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-4 outline-[#BFD4E7]': !props.disabled && !props.error && open,
                });
        }
    };
    var fill = function () {
        switch (props.variant) {
            case 'secondary':
            case 'tertiary': {
                if (props.disabled) {
                    return color('disabled-text');
                }
                else if (active || open) {
                    return color('blue-301');
                }
                else if (hover) {
                    return color('brand-medium');
                }
                else {
                    return color('brand');
                }
            }
            case 'quaternary': {
                if (props.disabled) {
                    return color('disabled-text');
                }
                else if (active || open) {
                    return color('blue-301');
                }
                else if (hover) {
                    return color('brand-medium');
                }
                else {
                    return color('dark-text');
                }
            }
            default:
                return color(props.disabled ? 'disabled-text' : 'dark-text');
        }
    };
    var renderRow = function (_a) {
        var _b, _c;
        var index = _a.index, key = _a.key, style = _a.style, parent = _a.parent;
        var indexedOption = items[index] || null;
        return !indexedOption ? null : (
        // @ts-ignore
        React.createElement(CellMeasurer, { key: key, cache: cache.current, parent: parent, rowIndex: index, columnIndex: 0 },
            React.createElement("div", { style: style },
                React.createElement(Option, { label: indexedOption.label, disabled: indexedOption.disabled, selected: (selection === null || selection === void 0 ? void 0 : selection.key) === indexedOption.key, onClick: function () { return onChange(indexedOption); }, wrap: props.wrap, variant: ((_b = props.actions) === null || _b === void 0 ? void 0 : _b.length) ? 'secondary' : 'primary', className: clsx({ 'mt-[2px]': index > 0 }) }, (_c = props.actions) === null || _c === void 0 ? void 0 : _c.map(function (action) { return action(indexedOption.item, indexedOption.idx || -1); })))));
    };
    useEffect(function () {
        setSelection(props.value);
    }, [props.value]);
    useEffect(function () {
        var _a;
        (_a = cache.current) === null || _a === void 0 ? void 0 : _a.clearAll();
    }, [props.wrap]);
    useEffect(function () {
        if (!open) {
            onSearch('');
        }
    }, [open]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { id: props.id, ref: buttonRef, type: "button", disabled: props.disabled, name: props.name, onClick: onClick, className: clsx('w-full px-3', height(), background(), border(), { 'cursor-pointer': !props.disabled }, props.className) },
            React.createElement("div", { className: 'flex items-center justify-between' },
                React.createElement(Label, { className: clsx('font-normal truncate', text()), label: (selection === null || selection === void 0 ? void 0 : selection.label) || props.placeholder }),
                React.createElement(ChevronDownIcon, { fill: fill(), className: clsx('min-w-[24px] transition duration-200', { '-rotate-180': open }) }))),
        React.createElement(Popper, { anchor: buttonRef, open: !props.disabled && open, onBlur: onBlur, options: options, zIndex: props.zIndex || 10 },
            React.createElement("div", { className: 'h-fit rounded-lg bg-white shadow-md overflow-hidden', style: { width: props.menuWidth || ((_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 336 } },
                (!!props.search || !!props.onSearch) && React.createElement(Search, { onSearch: onSearch }),
                // @ts-ignore
                React.createElement(List, { width: props.menuWidth || ((_b = buttonRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) || 336, height: props.menuHeight || 8 + Math.min(336, 42 * (items.length || 0)), rowHeight: cache.current.rowHeight, rowCount: items.length || 0, rowRenderer: renderRow, deferredMeasurementCache: cache.current, className: 'py-1' }),
                props.footer))));
});

export { SingleSelect as default };
