import { __assign } from 'tslib';
import React, { useState, useRef, useEffect } from 'react';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import { X, AlertCircle, AlertTriangle, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../tailwind.css.js';

var DEFAULT_TIMEOUT_SECONDS = 5;
var Alert = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(props.isOpen), isAlertOpen = _a[0], setAlertOpen = _a[1];
    var timer = useRef();
    var style = function () {
        switch (props.variant) {
            case 'informational':
                return 'bg-blue-brand-100 text-blue-brand-500 border-blue-304';
            case 'warning':
                return 'bg-honey-50 text-orange-700 border-honey-300';
            case 'error':
                return 'bg-red-50 text-compliant-red border-red-300';
            default:
                return 'bg-green-50 text-compliant-green border-green-500';
        }
    };
    var width = function () {
        switch (props.size) {
            case 'small':
                return 'w-[282px]';
            case 'medium':
                return 'w-[682px]';
            case 'large':
            default:
                return 'w-[928px]';
        }
    };
    var fill = function () {
        switch (props.variant) {
            case 'informational':
                return color('blue-brand-500');
            case 'warning':
                return color('orange-700');
            case 'error':
                return color('compliant-red');
            default:
                return color('compliant-green');
        }
    };
    var handleClose = function () {
        var _a;
        setAlertOpen(false);
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    var renderSymbol = function () {
        if (props.variant === 'informational') {
            return (React.createElement(AlertCircle, { size: 24, fill: color('blue-brand-500'), stroke: color('blue-brand-100'), className: 'min-w-[24px]' }));
        }
        else if (props.variant === 'warning') {
            return (React.createElement(AlertTriangle, { size: 24, fill: color('orange-700'), stroke: color('honey-50'), className: 'min-w-[24px]' }));
        }
        else if (props.variant === 'error') {
            return (React.createElement(AlertOctagon, { size: 24, fill: color('compliant-red'), stroke: color('red-50'), className: 'min-w-[24px]' }));
        }
        else {
            return (React.createElement(CheckCircle2, { size: 24, fill: color('compliant-green'), stroke: color('green-50'), className: 'min-w-[24px]' }));
        }
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (props.autoClose && isAlertOpen) {
            timer.current = setTimeout(function () {
                setAlertOpen(false);
                if (props.onClose) {
                    props.onClose();
                }
            }, (props.timeout || DEFAULT_TIMEOUT_SECONDS) * 1000);
        }
        return function () { return clearTimeout(timer.current); };
    }, [props.autoClose, props.timeout, isAlertOpen, props.onClose]);
    useEffect(function () {
        if (props.isOpen !== isAlertOpen) {
            setAlertOpen(props.isOpen);
        }
    }, [props.isOpen]);
    return !isAlertOpen ? null : (React.createElement("div", __assign({ role: 'alert' }, baseProps, { className: clsx('flex items-start justify-between rounded-lg p-4 border min-h-fit cursor-default', style(), width(), { 'absolute mx-auto left-0 right-0': props.sticky }, props.className), style: {
            zIndex: props.zIndex || 30,
            top: typeof props.top === 'number' ? "".concat(props.top, "px") : '76px',
        } }),
        renderSymbol(),
        React.createElement("div", { className: 'w-[calc(100%-80px)] mx-4' }, props.children &&
            (React.isValidElement(props.children) ? (props.children) : (React.createElement("div", { className: 'text-left font-bold leading-6 block break-words' }, props.children)))),
        props.dismissible && (React.createElement(X, { role: 'button', onClick: handleClose, size: 24, strokeWidth: 1.5, fill: fill(), className: 'cursor-pointer min-w-[24px]' }))));
};

export { Alert as default };
