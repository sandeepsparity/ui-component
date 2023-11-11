import { __assign } from 'tslib';
import React, { useState } from 'react';
import ClockIcon from '../../atom/icon/ClockIcon/ClockIcon.js';
import '../../tailwind.css.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import useCountdown from '../../atom/hook/useCountdown.js';
import clsx from 'clsx';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Timer = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var time = useCountdown(props.timeout).time;
    var fill = hover ? color('brand-medium') : color('brand');
    return !time ? null : (React.createElement("div", __assign({ "data-testid": 'timer' }, baseProps, { className: clsx('flex items-center justify-between px-1 w-fit h-7 rounded-[8px]', { 'bg-blue-306': hover }, props.className), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }),
        React.createElement(ClockIcon, { title: 'clock-icon', fill: fill }),
        React.createElement("span", { className: clsx('ml-2 font-semibold whitespace-nowrap select-none', {
                'text-brand-medium': hover,
                'text-brand': !hover,
            }) }, time)));
};

export { Timer as default };
