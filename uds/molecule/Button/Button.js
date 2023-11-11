import { __assign } from 'tslib';
import React, { useState, useRef, useEffect } from 'react';
import ButtonGroup from './ButtonGroup/ButtonGroup.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import useHAF from '../../atom/hook/useHAF.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Button = function (props) {
    var _a, _b, _c;
    var baseProps = useBaseProps(props);
    var _d = useHAF(), ref = _d.ref, hover = _d.hover, active = _d.active, focus = _d.focus;
    var _e = useState(0), progress = _e[0], setProgress = _e[1];
    var _f = useState(false), transitioning = _f[0], setTransitioning = _f[1];
    var interval = useRef();
    var timeout = useRef();
    var type = props.type || 'submit';
    var renderProps = { hover: hover, active: active, focus: focus };
    var children = typeof props.children === 'function' ? props.children(renderProps) : props.children;
    var width = function () {
        if (props.width) {
            return "".concat(props.width, "px");
        }
        else if (props.fixed) {
            return 'w-[240px]';
        }
        else if (props.icon) {
            switch (props.size) {
                case 'lg':
                    return 'w-12';
                case 'md':
                    return 'w-10 ';
                case 'sm':
                    return 'w-8 ';
                case 'xs':
                    return 'w-7';
                default:
                    return 'w-10 ';
            }
        }
        return 'w-full ';
    };
    var height = function () {
        switch (props.size) {
            case 'lg':
                return 'h-12';
            case 'md':
                return 'h-10';
            case 'sm':
                return 'h-8 ';
            case 'xs':
                return 'h-7 ';
            default:
                return 'h-10 ';
        }
    };
    var text = function () {
        switch (props.variant) {
            case 'primary':
                return 'text-white font-semibold select-none';
            case 'secondary':
                return 'text-brand hover:text-brand-medium active:text-blue-301 focus:text-brand disabled:text-disabled font-semibold select-none';
            case 'tertiary':
                return 'text-brand hover:text-brand-medium active:text-blue-301 focus:text-brand disabled:text-disabled font-semibold select-none';
            default:
                return 'text-white font-semibold select-none';
        }
    };
    var background = function () {
        switch (props.variant) {
            case 'primary':
                return 'bg-brand hover:bg-brand-medium active:bg-blue-301 focus:bg-brand disabled:bg-disabled';
            case 'secondary':
                return 'bg-white hover:bg-blue-307 active:bg-blue-305 focus:bg-white disabled:bg-white';
            case 'tertiary':
                return 'bg-white hover:bg-blue-307 active:bg-blue-305 focus:bg-white disabled:bg-white';
            default:
                return 'bg-brand hover:bg-brand-medium active:bg-blue-301 focus:bg-brand disabled:bg-disabled';
        }
    };
    var gradient = function () {
        return !props.reset && progress >= 100 ? color('disabled') : "linear-gradient(90deg, ".concat(color('blue-304'), " ").concat(progress, "%, white 0%)");
    };
    var border = function () {
        switch (props.variant) {
            case 'secondary':
                return 'border-2 border-brand hover:border-brand-medium active:border-blue-301 focus:border-brand hover:focus:border-brand-medium disabled:border-disabled';
            case 'tertiary':
                return 'border-2 border-white hover:border-blue-307 active:border-white focus:border-white disabled:border-white';
            default:
                return 'border-2 border-brand hover:border-brand-medium active:border-blue-301 focus:border-white disabled:border-disabled';
        }
    };
    var outline = function () {
        return 'focus:outline focus:outline-4 focus:outline-gray-204';
    };
    var doAnimation = function () {
        if (!transitioning) {
            reset();
            setTransitioning(true);
            interval.current = setInterval(function () { return setProgress(function (p) {
                if (p < 100) {
                    return p + 2;
                }
                else {
                    clearInterval(interval.current);
                    if (!!props.reset || props.reset === 0) {
                        var delay = typeof props.reset === 'number' ? Math.max(0, props.reset) : 300;
                        timeout.current = setTimeout(function () {
                            setTransitioning(false);
                            setProgress(0);
                        }, delay);
                    }
                    return p;
                }
            }); }, 10);
        }
    };
    var onClick = function () {
        var _a;
        if (!props.animated || !transitioning) {
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        if (props.animated) {
            doAnimation();
        }
    };
    var reset = function () {
        clearInterval(interval.current);
        clearInterval(timeout.current);
        setTransitioning(false);
        setProgress(0);
    };
    useEffect(function () {
        if (!props.animated || !!props.reset || props.reset === 0) {
            reset();
        }
    }, [props.animated, props.reset]);
    return (React.createElement("button", __assign({}, baseProps, { ref: ref, type: type, name: props.name, onClick: onClick, disabled: props.disabled || (!props.reset && progress >= 100), className: clsx('flex items-center justify-center relative rounded-lg', width(), height(), text(), (_a = {},
            _a[background()] = !props.animated || !transitioning,
            _a[border()] = !props.animated || !transitioning,
            _a[outline()] = !props.animated || !transitioning,
            _a['cursor-default'] = props.disabled || transitioning,
            _a), props.className), style: { width: clsx((_b = {}, _b[width()] = props.width, _b)), background: clsx((_c = {}, _c[gradient()] = props.animated && transitioning, _c)) } }), children));
};
var Button$1 = Object.assign(Button, { Group: ButtonGroup });

export { Button$1 as default };
