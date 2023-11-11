import { __rest, __spreadArray } from 'tslib';
import React, { forwardRef, useState, useImperativeHandle, useRef, useEffect, Fragment } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { Combobox, Transition } from '@headlessui/react';
import { unique } from '../../atom/util/array.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import Tag from '../Tag/Tag.js';
import Spinner from '../Spinner/Spinner.js';
import useDebounce from '../../atom/hook/useDebounce.js';
import ChevronDownIcon from '../../atom/icon/ChevronDownIcon/ChevronDownIcon.js';
import '../../tailwind.css.js';

var AutoComplete = function (props, ref) {
    var className = props.className, placeholder = props.placeholder, multiple = props.multiple, suggestions = props.suggestions, onChange = props.onChange, notFoundText = props.notFoundText, disabled = props.disabled, isRequired = props.isRequired, label = props.label, width = props.width, suggestionKey = props.suggestionKey, value = props.value, variant = props.variant, error = props.error; __rest(props, ["className", "placeholder", "multiple", "suggestions", "onChange", "notFoundText", "disabled", "isRequired", "label", "width", "suggestionKey", "value", "variant", "error"]);
    var _a = useState(''), query = _a[0], setQuery = _a[1];
    var _b = useState([]), suggestionList = _b[0], setSuggestionsList = _b[1];
    var _c = useState([]), selectedValue = _c[0], setSelectedValue = _c[1];
    var _d = useState(true), renderValues = _d[0], setRenderValues = _d[1];
    var _e = useState(false), render = _e[0], setRender = _e[1];
    var _f = useState(false), showLoader = _f[0], setShowLoader = _f[1];
    var _g = useState(false), hover = _g[0], setHover = _g[1];
    var _h = useState(false), active = _h[0], setActive = _h[1];
    var isAsyncItems = typeof suggestions === 'function';
    useImperativeHandle(ref, function () { return ({
        forceUpdate: function () {
            setRender(!render);
        },
    }); });
    var getOptionsvalue = function (items) {
        if (Array.isArray(items)) {
            var isStringOption = items.some(function (item) { return !(typeof item === 'object' && item !== null); });
            return isStringOption
                ? items
                : suggestionKey && items.map(function (item) { return item[suggestionKey]; });
        }
        else {
            var isStringOption = !(typeof items === 'object' && items !== null);
            return isStringOption ? items : suggestionKey && items[suggestionKey];
        }
    };
    var comboRef = useRef(null);
    var valueExists = function (val) {
        if (suggestionList.length === 0)
            return false;
        if (typeof val === 'string') {
            return suggestionList.includes(val);
        }
        else if (Array.isArray(val)) {
            return val.some(function (item) {
                if (typeof item === 'string') {
                    return suggestionList.includes(item);
                }
                else if (typeof item === 'object' && item !== null) {
                    return suggestionList.some(function (list) {
                        var _a;
                        return suggestionKey &&
                            ((_a = list[suggestionKey]) === null || _a === void 0 ? void 0 : _a.includes(item[suggestionKey]));
                    });
                }
            });
        }
        else if (typeof val === 'object' && val !== null) {
            return suggestionList.some(function (list) {
                var _a;
                return (_a = list[suggestionKey]) === null || _a === void 0 ? void 0 : _a.includes(val[suggestionKey]);
            });
        }
        else {
            return false;
        }
    };
    useEffect(function () {
        setSelectedValue([]);
        if (isAsyncItems) {
            setShowLoader(true);
            suggestions('').then(function (data) {
                setShowLoader(false);
                setSuggestionsList(data);
                setRenderValues(!renderValues);
            });
        }
        else {
            setSuggestionsList(suggestions);
            setRenderValues(!renderValues);
        }
    }, [suggestions, render]);
    var filterMultipleList = function (parentList, childList) {
        return parentList === null || parentList === void 0 ? void 0 : parentList.filter(function (suggestion) {
            return childList === null || childList === void 0 ? void 0 : childList.some(function (filterValue) {
                if (typeof filterValue === 'string') {
                    return filterValue === suggestion;
                }
                return (filterValue[suggestionKey] ===
                    suggestion[suggestionKey]);
            });
        });
    };
    var filterSingleList = function (list, value) {
        return list === null || list === void 0 ? void 0 : list.find(function (suggestion) {
            if (typeof value === 'string') {
                return suggestion === value;
            }
            return (suggestion[suggestionKey] ===
                value[suggestionKey]);
        });
    };
    useEffect(function () {
        setSelectedValue(multiple ? [] : '');
    }, [multiple]);
    useEffect(function () {
        if (!isAsyncItems && !valueExists(value)) {
            setSelectedValue(multiple ? [] : '');
            return;
        }
        if (multiple && value) {
            var newValue = void 0;
            var nonExistingValues = [];
            if (Array.isArray(value) && (suggestionList === null || suggestionList === void 0 ? void 0 : suggestionList.length) > 0) {
                if (isAsyncItems) {
                    nonExistingValues = value === null || value === void 0 ? void 0 : value.filter(function (val) { return val && !valueExists(val); });
                }
                var newValueFiltered = value === null || value === void 0 ? void 0 : value.filter(function (val) { return valueExists(val); });
                newValue = filterMultipleList(suggestionList, newValueFiltered);
                (newValue || nonExistingValues) &&
                    setSelectedValue((isAsyncItems ? __spreadArray(__spreadArray([], nonExistingValues, true), newValue, true) : newValue));
            }
        }
        else {
            if (!Array.isArray(value) && (suggestionList === null || suggestionList === void 0 ? void 0 : suggestionList.length) > 0) {
                var newValue = filterSingleList(suggestionList, value);
                if (isAsyncItems && !newValue) {
                    newValue = value;
                }
                setSelectedValue(newValue);
            }
        }
    }, [multiple, value, renderValues]);
    var filteredSuggestions = [];
    if (isAsyncItems) {
        filteredSuggestions = suggestionList;
    }
    else {
        filteredSuggestions =
            query === ''
                ? suggestionList
                : suggestionList === null || suggestionList === void 0 ? void 0 : suggestionList.filter(function (item) {
                    return item && getOptionsvalue(item).toLowerCase().includes(query.toLowerCase());
                });
    }
    var onChangeValue = function (selected) {
        if (Array.isArray(selected)) {
            var uniqueSelectedValues = unique(selected, suggestionKey);
            setSelectedValue(uniqueSelectedValues);
        }
        else {
            setSelectedValue(selected);
        }
        multiple && setQuery('');
        if (onChange) {
            onChange(selected);
        }
    };
    var onRemoveSelected = function (value) {
        var newSelectedValue = Array.isArray(selectedValue)
            ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.filter(function (item) { return item !== value; })
            : [];
        setSelectedValue(newSelectedValue);
        if (onChange) {
            onChange(newSelectedValue);
        }
    };
    var setQueryChange = function (event) {
        var value = event.target.value;
        setQuery(value);
        if (isAsyncItems) {
            setShowLoader(true);
            setSuggestionsList([]);
            suggestions(value).then(function (data) {
                setShowLoader(false);
                setSuggestionsList(data);
                if (data.length > 0) {
                    if (Array.isArray(selectedValue)) {
                        var newSelectedValues = selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.map(function (suggestion) {
                            var suggestedValuePresent = filterSingleList(data, suggestion);
                            return suggestedValuePresent || suggestion;
                        });
                        setSelectedValue(newSelectedValues);
                    }
                    else {
                        var suggestedValuePresent = filterSingleList(data, selectedValue);
                        var newSelectedValues = suggestedValuePresent || selectedValue;
                        setSelectedValue(newSelectedValues);
                    }
                }
            });
        }
    };
    var onDeleteMultiple = function (e) {
        if (e.key === 'Backspace' &&
            Array.isArray(selectedValue) &&
            (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) > 0 &&
            query.length < 1 &&
            multiple) {
            var newSelectedValue = Array.isArray(selectedValue) ? __spreadArray([], selectedValue, true) : [];
            var slicedValue = newSelectedValue.slice(0, -1);
            if (onChange) {
                onChange(slicedValue);
            }
            setSelectedValue(slicedValue);
        }
    };
    var text = function () {
        clsx({
            'text-sm': props.size === 'sm' && !multiple,
            'text-disabled-text': disabled,
        });
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
    var placeholderText = function () {
        switch (variant) {
            case 'secondary':
            case 'tertiary':
                return 'placeholder-brand hover:placeholder-brand-medium active:placeholder-blue-301 focus:placeholder-blue-301';
            default:
                return 'placeholder-dark-text';
        }
    };
    var comboInput = function (open, full) {
        return disabled && multiple ? null : (React.createElement(Combobox.Input, { displayValue: function (value) {
                return multiple ? (isAsyncItems ? query : '') : getOptionsvalue(value);
            }, className: clsx('bg-transparent', text(), placeholderText(), "".concat(full ? 'w-full' : 'w-fit', " text-md leading-5 focus:ring-0 outline-none grow"), { 'text-disabled-text': disabled, 'py-2 pl-1 pr-4': multiple, 'pl-3 pr-10': !multiple }), autoComplete: 'off', onKeyDown: onDeleteMultiple, placeholder: placeholder, onClick: function () {
                var _a;
                (_a = comboRef === null || comboRef === void 0 ? void 0 : comboRef.current) === null || _a === void 0 ? void 0 : _a.click();
            }, onFocus: function (e) {
                var _a, _b;
                if ((_b = (_a = e.relatedTarget) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.includes('headlessui-combobox-button'))
                    return;
            }, onChange: isAsyncItems ? useDebounce(setQueryChange) : setQueryChange }));
    };
    var height = function () {
        if (multiple) {
            return '';
        }
        switch (props.size) {
            case 'lg':
                return 'h-12';
            case 'sm':
                return 'h-8';
            case 'md':
            default:
                return 'h-10';
        }
    };
    var border = function (open) {
        switch (variant) {
            case 'secondary':
                return clsx('rounded-lg border-2 border-solid', {
                    'border-disabled': props.disabled,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-3 outline-error': !props.disabled && error,
                    'border-brand hover:border-brand-medium active:border-blue-301': !props.disabled && !error && !open,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-4 outline-[#BFD4E7]': !props.disabled && !error && open,
                });
            case 'tertiary':
                return clsx('rounded-lg', {
                    'outline outline-2 outline-error': !props.disabled && error,
                    'outline outline-4 outline-[#BFD4E7]': !props.disabled && !error && open,
                });
            case 'quaternary':
                return clsx('rounded-lg', {
                    'outline outline-2 outline-error': !props.disabled && error,
                    'outline outline-4 outline-none': !props.disabled && !error && open,
                });
            default:
                return clsx('rounded border border-solid', {
                    'border-disabled': props.disabled,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-2 outline-error': !props.disabled && error,
                    'border-[#BFD4E7]': !props.disabled && !error && !open,
                    'border-white hover:border-blue-307 active:border-blue-305 outline outline-4 outline-[#BFD4E7]': !props.disabled && !error && open,
                });
        }
    };
    var background = function () {
        return clsx({
            'bg-white': !disabled && !hover && !active,
            'bg-blue-307': !multiple && !disabled && hover && !active,
            'bg-blue-305': !multiple && !disabled && active && hover,
            'bg-gray-205': disabled,
        });
    };
    var fill = function (open) {
        switch (props.variant) {
            case 'secondary':
            case 'tertiary': {
                if (props.disabled) {
                    return color('disabled-text');
                }
                else if (open) {
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
    var widthStyle = function () {
        if (typeof width === 'number') {
            return "".concat(width, "px");
        }
        switch (width) {
            case 'xs':
                return '142px';
            case 'sm':
                return '220px';
            case 'md':
                return '298px';
            case 'lg':
                return '456px';
            case 'xl':
                return '928px';
            default:
                return '100%';
        }
    };
    var getSuggestionLists = function () {
        return (React.createElement(Combobox.Options, { static: true, className: 'absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' }, !showLoader && filteredSuggestions.length === 0 && query !== '' ? (React.createElement("div", { className: 'relative cursor-default select-none py-2 px-4 text-gray-700' }, notFoundText)) : (filteredSuggestions
            .filter(function (list) { return list; })
            .map(function (suggestion, index) { return (React.createElement(Combobox.Option, { key: "".concat(suggestion, "-").concat(index), className: function (_a) {
                var active = _a.active, selected = _a.selected;
                return clsx('relative cursor-default select-none py-2 mt-[2px] mx-2 rounded-lg text-dark-text-201 font-normal h-10', {
                    'bg-blue-306 text-blue-301': selected,
                    'bg-blue-307 text-blue-301': active,
                });
            }, value: suggestion }, function (_a) {
            var selected = _a.selected;
            return (React.createElement("span", { className: "mx-2 block text-base truncate ".concat(selected ? 'font-medium' : 'font-normal') }, getOptionsvalue(suggestion)));
        })); }))));
    };
    var selectedTags = function (open) {
        return (React.createElement("div", { className: 'flex items-center pl-3 pr-8 justify-between w-full' },
            React.createElement("div", { className: 'flex flex-wrap w-full truncate' },
                Array.isArray(selectedValue) &&
                    (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.map(function (item, idx) { return (React.createElement(Tag, { key: idx, disabled: disabled, className: clsx('mr-1 mt-1 p-0.5 !rounded-[8px] truncate h-7', {
                            'cursor-pointer': !disabled,
                        }), backgroundColor: color('blue-305'), borderColor: color('blue-305'), backgroundColorAlt: color('blue-304'), borderColorAlt: color('blue-304'), onClick: function () { return onRemoveSelected(item); } },
                        React.createElement("div", { className: 'flex items-center justify-between mx-2' },
                            React.createElement("span", { className: clsx('mt-[2px] text-[13px] font-bold truncate', {
                                    'text-black': !disabled,
                                    'text-disabled-text': disabled,
                                }) }, getOptionsvalue(item)),
                            React.createElement(X, { className: 'ml-1 min-w-[16px]', size: 16, strokeWidth: 1.5, color: disabled ? color('disabled-text') : color('dark-text') })))); })),
                comboInput(open, false))));
    };
    return (React.createElement("div", { className: className, style: { width: widthStyle() } },
        React.createElement(Combobox
        // @ts-ignore
        , { 
            // @ts-ignore
            value: selectedValue, 
            // @ts-ignore
            onChange: onChangeValue, 
            // @ts-ignore
            multiple: multiple, disabled: disabled }, function (_a) {
            var open = _a.open;
            return (React.createElement(React.Fragment, null,
                React.createElement(Combobox.Label, null,
                    React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none truncate' }, label),
                    isRequired && (React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none ml-1 text-error' }, "*"))),
                React.createElement("div", { className: 'relative mt-1' },
                    React.createElement("div", { "aria-label": 'combo-btnWrapper', "data-testid": 'container', className: clsx('relative w-full cursor-default py-[1px] overflow-hidden rounded-lg text-left flex', height(), background(), border(open), {
                            'min-h-[40px]': multiple,
                            'min-h-[32px]': !multiple,
                            'focus-within:outline focus-within:outline-4 focus-within:outline-[#BFD4E7]': !disabled && open,
                            'focus-within:border-white': !disabled && open && !hover && !active,
                            'focus-within:border-blue-307': !disabled && open && hover && !active,
                            'focus-within:border-blue-305': !disabled && open && active,
                        }), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); } },
                        multiple && Array.isArray(selectedValue)
                            ? selectedTags(open)
                            : comboInput(open, true),
                        React.createElement(Combobox.Button, { ref: comboRef, className: "absolute inset-y-0 right-0 flex  items-center pr-3" },
                            React.createElement(ChevronDownIcon, { title: 'chev-down', fill: fill(open), className: clsx('min-w-[24px] transition duration-200', {
                                    '-rotate-180': open,
                                }), "aria-hidden": 'true' }))),
                    showLoader && (React.createElement("div", { className: 'py-2 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none', "data-testid": 'loader' },
                        React.createElement(Spinner, { id: 'spinner', variant: 'solid', direction: 'clockwise', size: 'xs' }))),
                    !showLoader && (React.createElement(Transition, { "data-testid": 'transition', show: open, as: Fragment, leave: 'transition ease-in duration-100', leaveFrom: 'opacity-100', leaveTo: 'opacity-0', afterLeave: function () { return setQuery(''); } }, getSuggestionLists())))));
        })));
};
var AutoComplete$1 = forwardRef(AutoComplete);

export { AutoComplete$1 as default };
