import { __assign } from 'tslib';
import React from 'react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useHAF from '../../atom/hook/useHAF.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Tag = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useHAF(), ref = _a.ref, hover = _a.hover;
    var backgroundColor = function () {
        if (props.disabled) {
            return color('gray-cool-100');
        }
        switch (props.preset) {
            case 'yellow':
                return color('honey-100');
            case 'green':
                return color('green-100');
            case 'blue':
                return color('blue-307');
            case 'purple':
                return color('purple-100');
            case 'gray':
                return color('gray-205');
            case 'red':
                return color('red-100');
            case 'white':
                return color('gray-cool-50');
        }
        if (hover && props.backgroundColorAlt) {
            return props.backgroundColorAlt;
        }
        return props.backgroundColor || color('gray-cool-50');
    };
    var borderColor = function () {
        if (props.disabled) {
            return color('gray-cool-200');
        }
        switch (props.preset) {
            case 'yellow':
                return color('honey-200');
            case 'green':
                return color('green-200');
            case 'blue':
                return color('gray-204');
            case 'purple':
                return color('purple-300');
            case 'gray':
                return color('gray-neutral-200');
            case 'red':
                return color('red-300');
            case 'white':
                return color('gray-cool-200');
        }
        if (hover && props.borderColorAlt) {
            return props.borderColorAlt;
        }
        return props.borderColor || color('gray-cool-300');
    };
    var textColor = function () {
        if (props.disabled) {
            return color('disabled-text');
        }
        switch (props.preset) {
            case 'yellow':
                return color('compliant-orange');
            case 'green':
                return color('green-700');
            case 'blue':
                return color('brand-medium');
            case 'purple':
                return color('purple-900');
            case 'gray':
                return color('dark-text-201');
            case 'red':
                return color('compliant-red');
            case 'white':
                return color('brand-dark');
        }
        if (hover && props.textColorAlt) {
            return props.textColorAlt;
        }
        return props.textColor || props.borderColor || color('brand-dark');
    };
    var borderRadius = function () {
        return typeof props.borderRadius === 'number' ? "".concat(props.borderRadius, "px") : '16px';
    };
    var onClick = function (ev) {
        ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        if (!props.disabled && props.onClick) {
            props.onClick(ev);
        }
    };
    return (React.createElement("div", __assign({}, baseProps, { ref: ref, onClick: onClick, className: clsx('w-fit border select-none', {
            'flex items-center justify-center h-6': !props.children,
            'cursor-pointer': props.onClick && !props.disabled,
        }, props.className), "data-testid": 'tag-id', style: {
            background: backgroundColor(),
            borderColor: borderColor(),
            borderRadius: borderRadius(),
        } }), props.children || (React.createElement("span", { className: 'mx-2 mt-[1px] text-[13px]', style: { color: textColor() } }, props.label))));
};

export { Tag as default };
