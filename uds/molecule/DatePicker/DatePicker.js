import { __assign } from 'tslib';
import React, { useRef, useState, useEffect } from 'react';
import CalendarIcon from '../../atom/icon/CalendarIcon/CalendarIcon.js';
import Litepicker from 'litepicker';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import '../../tailwind.css.js';
import timeline from './plugin/timeline.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var DatePicker = function (props) {
    var baseProps = useBaseProps(props);
    var ref = useRef(null);
    var targetRef = useRef(null);
    var litepicker = useRef();
    var _a = useState(''), date = _a[0], setDate = _a[1];
    var format = props.dateFormat || 'D MMM, YYYY';
    var iconPos = props.iconPosition || 'left';
    var onSelected = function (startDate, endDate) {
        var _a;
        var dates = [startDate, endDate].filter(function (dt) { return !!dt; });
        setDate(dates.map(function (dt) { return dayjs(dt).format(format); }).join(' - '));
        if (props.onChange &&
            (dates.length !== ((_a = props.value) === null || _a === void 0 ? void 0 : _a.length) ||
                !dates.every(function (dateItem) { var _a; return (_a = props.value) === null || _a === void 0 ? void 0 : _a.includes(dateItem); }))) {
            props.onChange(dates);
        }
    };
    var handleSelection = function (startDate, endDate) {
        onSelected(startDate === null || startDate === void 0 ? void 0 : startDate.toJSDate(), endDate === null || endDate === void 0 ? void 0 : endDate.toJSDate());
    };
    var setup = function (picker) {
        if (!props.timeline) {
            picker.on('selected', handleSelection);
        }
    };
    var checkMinYear = function () {
        if (!props.minDate) {
            return props.minYear || 1990;
        }
        else {
            return new Date(props.minDate).getFullYear();
        }
    };
    var checkMaxYear = function () {
        if (props.maxDate) {
            return new Date(props.maxDate).getFullYear();
        }
        else {
            return null;
        }
    };
    var mount = function () {
        if (ref.current != null) {
            var plugins = [];
            if (props.timeline) {
                Litepicker.add('timeline', timeline({ onSelected: onSelected, timeline: props.timeline }));
                plugins.push('timeline');
            }
            litepicker.current = new Litepicker(__assign({ element: ref.current, parentEl: targetRef.current, autoApply: !props.range && !props.timeline, numberOfColumns: !props.range && !props.timeline ? 1 : 2, numberOfMonths: !props.range && !props.timeline ? 1 : 2, showWeekNumbers: true, singleMode: !props.range && !props.timeline, showTooltip: false, highlightedDays: props.highlightedDays || [], minDate: props.minDate ? props.minDate : undefined, maxDate: props.maxDate ? props.maxDate : undefined, dropdowns: {
                    minYear: checkMinYear(),
                    maxYear: checkMaxYear(),
                    months: true,
                    years: true,
                }, plugins: plugins, format: format, setup: setup }, props.configuration));
            if (props.value && Array.isArray(props.value)) {
                var _a = props.value, start = _a[0], end = _a[1];
                onSelected(start, end);
            }
        }
        return unmount;
    };
    var unmount = function () {
        var _a;
        if (litepicker.current) {
            (_a = litepicker.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
    };
    useEffect(mount, [props.range, props.timeline, props.value]);
    return (React.createElement("div", { ref: targetRef, className: 'relative' },
        React.createElement("button", __assign({}, baseProps, { name: props.name, disabled: props.disabled, ref: ref, className: clsx('flex items-center h-[40px] min-w-[268px] w-fit px-4 border border-gray-204 focus:outline focus:outline-gray-204 rounded-lg enabled:hover:bg-blue-307 select-none cursor-pointer', {
                'justify-between': iconPos === 'right',
                'bg-gray-205 cursor-not-allowed': props.disabled,
            }, props.className) }),
            iconPos === 'left' && (React.createElement(CalendarIcon, { className: 'mr-2 pointer-events-none', width: 14, fill: color(props.disabled ? 'disabled-text' : 'light-text') })),
            React.createElement("span", { className: clsx('pointer-events-none', { 'text-disabled-text': props.disabled }) }, date || props.placeholder),
            iconPos === 'right' && (React.createElement(CalendarIcon, { className: 'ml-2 pointer-events-none', width: 14, fill: color('light-text') })))));
};

export { DatePicker as default };
