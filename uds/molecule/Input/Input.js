import { __rest, __assign } from 'tslib';
import React from 'react';
import { Info, EyeOff, Eye } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import SearchIcon from '../../atom/icon/SearchIcon/SearchIcon.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import Tooltip from '../Tooltip/Tooltip.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Input = function (props) {
    var baseProps = useBaseProps(props);
    var value = props.value, className = props.className, label = props.label, height = props.height, width = props.width, type = props.type, prefixElement = props.prefixElement, suffixElement = props.suffixElement, disabled = props.disabled; props.onChange; var onFocus = props.onFocus, onBlur = props.onBlur, error = props.error, isRequired = props.isRequired, tooltip = props.tooltip, tooltipVariant = props.tooltipVariant, tooltipAnchor = props.tooltipAnchor, right = props.right, optionalHelperText = props.optionalHelperText, maxCharacters = props.maxCharacters, rest = __rest(props, ["value", "className", "label", "height", "width", "type", "prefixElement", "suffixElement", "disabled", "onChange", "onFocus", "onBlur", "error", "isRequired", "tooltip", "tooltipVariant", "tooltipAnchor", "right", "optionalHelperText", "maxCharacters"]);
    var _a = React.useState(false), focus = _a[0], setFocus = _a[1];
    var _b = React.useState('password'), passwordType = _b[0], setPasswordType = _b[1];
    var heightStyle = function () {
        if (typeof height === 'number') {
            return "".concat(height, "px");
        }
        switch (height) {
            case 'sm':
                return '32px';
            case 'md':
                return '40px';
            case 'lg':
                return '48px';
            default:
                return '40px';
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
    var border = function () {
        return clsx({
            'border-2 border-error': error,
            'border-2 border-brand-light': !error && focus,
            'border text-dark-text border-gray-204': !disabled,
            'border text-disabled-text border-disabled bg-gray-205': disabled,
        });
    };
    var padding = function () { return (!disabled && (!error || focus) ? 'px-[11px]' : 'px-3'); };
    var inputType = function () {
        if (type === 'search') {
            return 'text';
        }
        else {
            return type || 'text';
        }
    };
    var suffix = function () {
        if (type === 'search') {
            return React.createElement(SearchIcon, { fill: color('light-text'), className: 'cursor-pointer' });
        }
        else if (type === 'password') {
            return passwordType === 'password' ? (React.createElement(EyeOff, { className: 'cursor-pointer', onClick: function () { return setPasswordType('text'); }, color: color('light-text'), size: 23, strokeWidth: 1.2 })) : (React.createElement(Eye, { className: 'cursor-pointer', onClick: function () { return setPasswordType('password'); }, color: color('light-text'), size: 23, strokeWidth: 1.2 }));
        }
        else {
            return suffixElement;
        }
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
    return (React.createElement("div", { className: className, style: { width: widthStyle() } },
        label && (React.createElement("div", { className: 'flex items-center' },
            React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none truncate' }, label),
            isRequired && (React.createElement("span", { className: 'text-sm font-bold whitespace-nowrap select-none ml-1 text-error' }, "*")),
            tooltip && (React.createElement(Tooltip, { variant: tooltipVariant, anchor: tooltipAnchor, label: tooltip },
                React.createElement(Info, { className: 'mb-[2px] ml-[5.33px] cursor-pointer', color: color('brand'), size: 16, "data-testid": 'info-icon' }))))),
        React.createElement("div", { style: { height: heightStyle() }, className: clsx('flex items-center w-full mt-[2px] rounded', prefixElement || suffixElement ? "".concat(border(), ", ").concat(padding()) : '', disabled ? 'bg-gray-205 cursor-not-allowed' : '') },
            prefixElement && React.createElement("span", { className: 'mr-2' }, prefixElement),
            React.createElement("input", __assign({}, rest, baseProps, { value: value, disabled: disabled, type: type === 'password' ? passwordType : inputType(), onChange: props.onChange, onFocus: handleFocus, onBlur: handleBlur, className: clsx('w-full h-full pointer-events-auto  outline-none disabled:cursor-not-allowed disabled:bg-gray-205 placeholder:font-normal placeholder:text-light-text placeholder:text-base placeholder:leading-5 rounded', {
                    'text-dark-text': !disabled,
                    'text-disabled-text': disabled,
                    'text-right': right,
                }, !prefixElement && !suffixElement ? "".concat(border(), ", ").concat(padding()) : '') })),
            suffix() && React.createElement("span", { className: 'ml-2' }, suffix())),
        React.createElement("div", { className: clsx('flex justify-between items-center w-full') },
            error && !optionalHelperText && (React.createElement("div", { className: 'w-full text-sm leading-4 font-bold text-error mt-1 whitespace-nowrap select-none truncate' }, error)),
            optionalHelperText && (React.createElement("div", { className: 'text-sm leading-4 font-normal italic text-light-text mt-1 whitespace-nowrap select-none truncate' }, optionalHelperText)),
            maxCharacters && typeof value === 'string' && (React.createElement("div", { className: clsx('flex-1 text-sm leading-4 font-normal italic mt-1 text-right  mx-auto', {
                    'text-error': (value === null || value === void 0 ? void 0 : value.length) > maxCharacters,
                    'text-light-text': !((value === null || value === void 0 ? void 0 : value.length) > maxCharacters),
                }) }, " ".concat(String(value === null || value === void 0 ? void 0 : value.length), "/").concat(String(maxCharacters), " ")))),
        error && optionalHelperText && (React.createElement("div", { className: 'text-sm leading-4 font-bold text-error mt-1 whitespace-nowrap select-none truncate' }, error))));
};

export { Input as default };
