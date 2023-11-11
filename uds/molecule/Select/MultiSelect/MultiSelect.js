import { __assign } from 'tslib';
import React, { forwardRef, useRef, useState, useMemo, useEffect } from 'react';
import { CellMeasurerCache, List, CellMeasurer } from 'react-virtualized';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import ChevronDownIcon from '../../../atom/icon/ChevronDownIcon/ChevronDownIcon.js';
import Chip from '../Chip/Chip.js';
import Label from '../../../atom/component/Label/Label.js';
import Option from '../Option/Option.js';
import Popper from '../../Popper/Popper.js';
import Search from '../Search/Search.js';
import clsx from 'clsx';
import useHAF from '../../../atom/hook/useHAF.js';
import '../../../tailwind.css.js';
import { toMap } from '../../../atom/util/reducer.js';

var options = {
    placement: 'bottom-start',
    modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
        { name: 'flip', enabled: false },
    ],
};
var MultiSelect = forwardRef(function (props, ref) {
    var _a, _b, _c;
    var tagRef = useRef(null);
    var listRef = useRef(null);
    var _d = useHAF(ref), buttonRef = _d.ref, hover = _d.hover, active = _d.active;
    var _e = useState({}), selection = _e[0], setSelection = _e[1];
    var _f = useState(false), open = _f[0], setOpen = _f[1];
    var _g = useState(''), query = _g[0], setQuery = _g[1];
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
    var allActive = useMemo(function () { return items.filter(function (_a) {
        var disabled = _a.disabled;
        return !disabled;
    }); }, [items]);
    var allSelected = useMemo(function () { return allActive.length === Object.keys(selection).length && allActive.every(function (_a) {
        var key = _a.key;
        return key in selection;
    }); }, [allActive, selection]);
    var toggleAll = function () {
        var _a, _b;
        if (allSelected) {
            setSelection({});
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, []);
        }
        else {
            setSelection(allActive.reduce(toMap('key'), {}));
            (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, allActive.map(function (_a) {
                var item = _a.item;
                return item;
            }));
        }
    };
    var onChange = function (selected) {
        var _a;
        var _b, _c;
        if (!!selection[selected.key]) {
            var updated = __assign({}, selection);
            delete updated[selected.key];
            setSelection(updated);
            (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, Object.values(updated).map(function (_a) {
                var item = _a.item;
                return item;
            }));
        }
        else {
            var updated = __assign(__assign({}, selection), (_a = {}, _a[selected.key] = selected, _a));
            setSelection(updated);
            (_c = props.onChange) === null || _c === void 0 ? void 0 : _c.call(props, Object.values(updated).map(function (_a) {
                var item = _a.item;
                return item;
            }));
        }
    };
    var onClick = function (ev) {
        var _a, _b;
        if (tagRef.current === ev.target || !!props.noTags || !((_a = tagRef.current) === null || _a === void 0 ? void 0 : _a.contains(ev.target))) {
            setOpen(!open);
        }
        (_b = props.onClick) === null || _b === void 0 ? void 0 : _b.call(props, ev);
    };
    var onBlur = function (ev) {
        if (!ev.relatedTarget || ev.relatedTarget !== ev.target.previousElementSibling) {
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
        switch (props.variant) {
            case 'secondary':
            case 'tertiary':
                return clsx({
                    'text-disabled-text': props.disabled,
                    'text-blue-301 hover:text-brand-medium active:text-blue-301': !props.disabled && open,
                    'text-brand hover:text-brand-medium active:text-blue-301': !props.disabled && !open,
                });
            case 'quaternary':
                return clsx({
                    'text-disabled-text': props.disabled,
                    'text-blue-301 hover:text-brand-medium active:text-blue-301': !props.disabled && open,
                    'text-dark-text hover:text-brand-medium active:text-blue-301': !props.disabled && !open,
                });
            default:
                return clsx({
                    'text-disabled-text': props.disabled,
                    'text-dark-text': !props.disabled,
                });
        }
    };
    var background = function () {
        return props.variant === 'tertiary'
            ? 'bg-white'
            : clsx({ 'bg-white': !props.disabled, 'bg-gray-205': props.disabled });
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
                React.createElement(Option, { label: indexedOption.label, disabled: indexedOption.disabled, selected: !!selection[indexedOption.key], onClick: function () { return onChange(indexedOption); }, wrap: props.wrap, checkbox: props.checkboxes, variant: ((_b = props.actions) === null || _b === void 0 ? void 0 : _b.length) ? 'secondary' : 'primary', className: clsx({ 'mt-[2px]': index > 0 }) }, (_c = props.actions) === null || _c === void 0 ? void 0 : _c.map(function (action) { return action(indexedOption.item, indexedOption.idx || -1); })))));
    };
    useEffect(function () {
        var _a;
        setSelection(((_a = props.value) === null || _a === void 0 ? void 0 : _a.reduce(toMap('key'), {})) || {});
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
        React.createElement("button", { id: props.id, ref: buttonRef, type: "button", disabled: props.disabled, name: props.name, onClick: onClick, className: clsx('w-full px-3 min-h-[48px]', background(), border(), { 'cursor-pointer': !props.disabled }, props.className) },
            React.createElement("div", { className: "flex items-center justify-between" },
                !Object.keys(selection).length ? React.createElement(Label, { className: clsx('font-normal truncate', text()), label: props.placeholder }) :
                    React.createElement("div", { ref: tagRef, className: 'flex flex-wrap my-[6px] truncate' }, props.noTags || props.nestedTags ?
                        React.createElement(Label, { label: "".concat(Object.keys(selection).length, " Selected") }) :
                        Object.values(selection).map(function (indexedOption) { return React.createElement(Chip, { key: indexedOption.key, label: indexedOption.label, onClick: function () { return onChange(indexedOption); } }); })),
                React.createElement(ChevronDownIcon, { fill: fill(), className: clsx('min-w-[24px] transition duration-200', { '-rotate-180': open }) }))),
        React.createElement(Popper, { anchor: buttonRef, open: !props.disabled && open, onBlur: onBlur, options: options, zIndex: props.zIndex || 10 },
            React.createElement("div", { className: 'h-fit rounded-lg bg-white shadow-md overflow-hidden', style: { width: props.menuWidth || ((_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 336 } },
                !props.noTags && props.nestedTags &&
                    React.createElement("div", { className: 'flex flex-wrap mt-2 mx-2 p-2 min-h-[77px] border border-gray-204 rounded truncate' }, Object.values(selection).map(function (indexedOption) { return React.createElement(Chip, { key: indexedOption.key, label: indexedOption.label, onClick: function () { return onChange(indexedOption); } }); })),
                (!!props.search || !!props.onSearch) && React.createElement(Search, { onSearch: onSearch }),
                props.selectAllOption &&
                    React.createElement("div", { className: 'w-full mt-1' },
                        React.createElement(Option, { label: typeof props.selectAllOption === 'string' ? props.selectAllOption : 'Select All', disabled: allActive.length < 1, selected: allSelected, onClick: toggleAll, wrap: props.wrap, checkbox: props.checkboxes, indeterminate: !!Object.keys(selection).length, variant: ((_b = props.actions) === null || _b === void 0 ? void 0 : _b.length) ? 'secondary' : 'primary' })),
                // @ts-ignore
                React.createElement(List, { ref: listRef, width: props.menuWidth || ((_c = buttonRef.current) === null || _c === void 0 ? void 0 : _c.offsetWidth) || 336, height: props.menuHeight || 8 + Math.min(336, 42 * (items.length || 0)), rowHeight: cache.current.rowHeight, rowCount: items.length || 0, rowRenderer: renderRow, deferredMeasurementCache: cache.current, className: clsx('py-1', { 'mt-2': !props.selectAllOption && !props.noTags && props.nestedTags, 'mt-1 border-t border-t-[#BFD4E7]': props.selectAllOption }) }),
                props.footer))));
});

export { MultiSelect as default };
