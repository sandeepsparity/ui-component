import { __assign } from 'tslib';
import React from 'react';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import { color, expandColor } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../tailwind.css.js';

var isDiscreteVariant = function (props) {
    return !!props.step || !!props.steps;
};
var ProgressBar = function (props) {
    var baseProps = useBaseProps(props);
    var _a = props.step, step = _a === void 0 ? 0 : _a, _b = props.steps, steps = _b === void 0 ? 1 : _b;
    var primary = props.color || color('brand-light');
    var secondary = props.color ? expandColor(props.color) : color('blue-305');
    var background = function () {
        if (isDiscreteVariant(props)) {
            var progress = Math.max(0, Math.min(100, Math.trunc((100 * step) / Math.max(1, Math.min(steps, step + 1)))));
            return "linear-gradient(90deg, ".concat(primary, " ").concat(progress, "%, ").concat(secondary, " 0%)");
        }
        return primary;
    };
    var width = function () {
        return isDiscreteVariant(props)
            ? "".concat(Math.max(0, Math.min(100, Math.trunc((100 * (step + 1)) / steps))), "%")
            : "".concat(Math.max(0, Math.min(100, props.progress || 0)), "%");
    };
    return (React.createElement("div", __assign({}, baseProps, { className: clsx('h-2 rounded-lg bg-gray-205 overflow-hidden', props.className), style: { width: props.width ? "".concat(props.width, "px") : '100%' }, "data-testid": 'progress-bar' }),
        React.createElement("div", { role: 'progressbar', className: 'h-2 rounded-l-lg transition-width ease-linear duration-200', style: { background: background(), width: width() } })));
};

export { ProgressBar as default };
