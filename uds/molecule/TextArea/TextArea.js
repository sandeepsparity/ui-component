import { __rest, __assign } from 'tslib';
import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../tailwind.css.js';
import Tooltip from '../Tooltip/Tooltip.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import { useResizeObserver } from './useResizeObserver.js';

var TextArea = function (props) {
    var baseProps = useBaseProps(props);
    var className = props.className, value = props.value, width = props.width, resize = props.resize, label = props.label, disabled = props.disabled, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, error = props.error, isRequired = props.isRequired, tooltip = props.tooltip, tooltipVariant = props.tooltipVariant, tooltipAnchor = props.tooltipAnchor, optionalHelperText = props.optionalHelperText, maxCharacters = props.maxCharacters, rest = __rest(props, ["className", "value", "width", "resize", "label", "disabled", "onChange", "onFocus", "onBlur", "error", "isRequired", "tooltip", "tooltipVariant", "tooltipAnchor", "optionalHelperText", "maxCharacters"]);
    var _a = useState(value || ''), textArea = _a[0], setTextArea = _a[1];
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    var _c = useState(0), characterCount = _c[0], setCharacterCount = _c[1];
    var resizeRef = useRef(null);
    var widthObs = useResizeObserver(resizeRef)[0];
    var overFlowRef = useRef(null);
    var errorRef = useRef(null);
    var _d = useState(false), helperOverflow = _d[0], setHelperOverflow = _d[1];
    var _e = useState(false), errorOverflow = _e[0], setErrorOverflow = _e[1];
    var widthStyle = function () {
        switch (width) {
            case 'xs':
                return 'w-[142px]';
            case 'sm':
                return 'w-[220px]';
            case 'md':
                return 'w-[298px]';
            case 'lg':
                return 'w-[456px]';
            case 'xl':
                return 'w-[928px]';
            default:
                return 'w-full';
        }
    };
    var resizeStyle = function () {
        switch (resize) {
            case 'resize-x':
                return 'resize-x';
            case 'resize-y':
                return 'resize-y';
            case 'both':
                return 'resize';
            case 'none':
            default:
                return 'resize-none';
        }
    };
    var handleChange = function (event) {
        var inputValue = event.target.value;
        if (onChange && value !== inputValue) {
            onChange(event);
        }
        setTextArea(inputValue || '');
        setCharacterCount(inputValue.length);
    };
    var handleFocus = function (event) {
        setFocus(true);
        if (typeof onFocus === 'function') {
            onFocus(event);
        }
    };
    var handleBlur = function (event) {
        setFocus(false);
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };
    useEffect(function () {
        if (value || value === '') {
            setTextArea(value);
            setCharacterCount(value.length);
        }
    }, [value]);
    useEffect(function () {
        var _a, _b, _c, _d;
        if (overFlowRef === null || overFlowRef === void 0 ? void 0 : overFlowRef.current) {
            var isOverflow = ((_a = overFlowRef === null || overFlowRef === void 0 ? void 0 : overFlowRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) < ((_b = overFlowRef === null || overFlowRef === void 0 ? void 0 : overFlowRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth);
            setHelperOverflow(isOverflow);
        }
        if (errorRef === null || errorRef === void 0 ? void 0 : errorRef.current) {
            var isErrorOverFLow = ((_c = errorRef === null || errorRef === void 0 ? void 0 : errorRef.current) === null || _c === void 0 ? void 0 : _c.clientWidth) < ((_d = errorRef === null || errorRef === void 0 ? void 0 : errorRef.current) === null || _d === void 0 ? void 0 : _d.scrollWidth);
            setErrorOverflow(isErrorOverFLow);
        }
    }, [optionalHelperText, error, width]);
    return (React.createElement("div", { className: className },
        label && (React.createElement("div", { className: 'flex items-center' },
            React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none truncate' }, label),
            isRequired && (React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none ml-1 text-error' }, "*")),
            tooltip && (React.createElement(Tooltip, { variant: tooltipVariant, anchor: tooltipAnchor, label: tooltip },
                React.createElement(Info, { className: 'mb-[2px] ml-[5.33px] cursor-pointer', color: color('brand'), size: 16 }))))),
        React.createElement("textarea", __assign({}, baseProps, rest, { ref: resizeRef, value: textArea, disabled: disabled, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, className: clsx('flex items-center w-full mt-[2px] px-3 rounded border pointer-events-auto overflow transition bg-white outline-none  disabled:bg-gray-205 placeholder:font-normal pt-2 placeholder:text-light-text placeholder:text-base placeholder:leading-5', resizeStyle(), widthStyle(), {
                'border-2 border-brand-light': !error && focus,
                'text-dark-text border-gray-204': !disabled,
                'text-disabled-text border-disabled bg-gray-205': disabled,
                'border-2 border-error': error,
                'active:border-2 active:border-brand-light': !error && !disabled,
            }) })),
        React.createElement("div", { className: clsx('flex items-center', widthStyle()), style: {
                width: resize === 'resize-x' || resize === 'resize-y' || resize === 'both' ? widthObs : '',
            } },
            error && !optionalHelperText && (React.createElement("div", { className: clsx('text-sm leading-4 font-bold text-error mt-1 whitespace-nowrap select-none truncate', {
                    'w-full': !maxCharacters,
                    'w-[calc(85%)]': maxCharacters,
                    'w-[calc(80%)]': width === 'xs' || width == 'sm' || Number(widthObs) < 220,
                }) },
                React.createElement("span", { ref: overFlowRef, title: helperOverflow ? String(error) : '', className: clsx({ 'block truncate': !!error }) }, error))),
            optionalHelperText && (React.createElement("div", { className: clsx('inline-block text-sm leading-4 font-normal italic text-light-text mt-1 whitespace-nowrap select-none overflow-x-hidden  truncate', {
                    'w-full': !maxCharacters,
                    'w-[calc(85%)]': maxCharacters,
                    'w-[calc(80%)]': width === 'xs' || width == 'sm' || Number(widthObs) < 220,
                }) },
                React.createElement("span", { ref: overFlowRef, title: helperOverflow ? optionalHelperText : '', className: clsx({ 'block truncate': !!optionalHelperText }) }, optionalHelperText))),
            maxCharacters && (React.createElement("div", { className: clsx('ml-1 min-w-[15%] leading-4 font-normal italic  mt-1 select-none text-right  mx-auto', characterCount > maxCharacters ? 'text-error' : 'text-light-text', { 'flex w-[100%] justify-end': !optionalHelperText && !error }, width === 'xs' || width == 'sm' || Number(widthObs) < 220
                    ? ' text-[11px] leading-snug'
                    : 'text-sm') }, " ".concat(String(characterCount), "/").concat(String(maxCharacters), " ")))),
        error && optionalHelperText ? (React.createElement("div", { className: clsx('flex justify-between items-center', widthStyle()), style: {
                width: resize === 'resize-x' || resize === 'resize-y' || resize === 'both' ? widthObs : '',
            } },
            React.createElement("div", { className: clsx('text-sm leading-4 font-bold text-error mt-1 whitespace-nowrap select-none truncate first-letter:first-linemarker', {
                    'w-full': !maxCharacters,
                    'w-[calc(85%)]': maxCharacters,
                    'w-[calc(80%)]': width === 'xs' || width == 'sm' || Number(widthObs) < 220,
                }) },
                React.createElement("span", { ref: errorRef, title: errorOverflow ? String(error) : '', className: clsx({ 'block truncate': !!error }) }, error)))) : null));
};

export { TextArea as default };
