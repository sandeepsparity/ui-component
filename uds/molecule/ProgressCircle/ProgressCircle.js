import React from 'react';
import '../../tailwind.css.js';
import 'tslib';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';

var ProgressCircle = function (props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.circleWidth, circleWidth = _b === void 0 ? 40 : _b, _c = props.progressPercentage, progressPercentage = _c === void 0 ? 0 : _c, _d = props.strokeWidth, strokeWidth = _d === void 0 ? 5 : _d, _e = props.secondaryColor, secondaryColor = _e === void 0 ? color('blue-brand-100') : _e, _f = props.primaryColor, primaryColor = _f === void 0 ? color('blue-brand-400') : _f, _g = props.textSize, textSize = _g === void 0 ? 12 : _g, _h = props.hidePercentage, hidePercentage = _h === void 0 ? false : _h, _j = props.textColor, textColor = _j === void 0 ? color('light-text') : _j;
    var progress = progressPercentage > 100 ? 100 : progressPercentage;
    var radius = (circleWidth - strokeWidth * 2) / 2;
    var dashArray = radius * Math.PI * 2;
    var dashOffset = dashArray - (dashArray * progress) / 100;
    return (React.createElement("div", { className: className, "data-testid": 'progress-circle' },
        React.createElement("svg", { width: circleWidth, height: circleWidth, viewBox: "0 0 ".concat(circleWidth, " ").concat(circleWidth) },
            React.createElement("circle", { cx: circleWidth / 2, cy: circleWidth / 2, strokeWidth: "".concat(strokeWidth, "px"), r: radius, "data-testid": 'secondary-circle', className: 'fill-none', style: { stroke: secondaryColor } }),
            React.createElement("circle", { cx: circleWidth / 2, cy: circleWidth / 2, strokeWidth: "".concat(strokeWidth, "px"), r: radius, "data-testid": 'primary-circle', className: 'fill-none', style: { strokeDasharray: dashArray, strokeDashoffset: dashOffset, stroke: primaryColor }, transform: "rotate(-90 ".concat(circleWidth / 2, " ").concat(circleWidth / 2, ")") }),
            !hidePercentage && (React.createElement("text", { x: '50%', y: '50%', dy: '0.3em', textAnchor: 'middle', "data-testid": 'text-component', className: 'font-normal', style: { color: textColor, fontSize: textSize } },
                progressPercentage,
                "%")))));
};

export { ProgressCircle as default };
