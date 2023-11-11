import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import AnchorLink from '../../AnchorLink/AnchorLink.js';
import '../../../tailwind.css.js';
import dayjs from 'dayjs';

var Range;
(function (Range) {
    Range[Range["WEEK"] = 0] = "WEEK";
    Range[Range["PERIOD"] = 1] = "PERIOD";
    Range[Range["QUARTER"] = 2] = "QUARTER";
    Range[Range["CUSTOM"] = 3] = "CUSTOM";
})(Range || (Range = {}));
var Container = function (props) {
    var _a = useState(Range.CUSTOM), range = _a[0], setRange = _a[1];
    var _b = useState(null), selectedWeek = _b[0], setSelectedWeek = _b[1];
    var _c = useState(null), selectedPeriod = _c[0], setSelectedPeriod = _c[1];
    var _d = useState(null), selectedQuarter = _d[0], setSelectedQuarter = _d[1];
    var week = function () {
        var _a, _b;
        var label = function (_a) {
            var startDate = _a.startDate, endDate = _a.endDate, number = _a.number;
            var start = dayjs(new Date(startDate)).format('dddd MMMM DD, YYYY');
            var end = dayjs(new Date(endDate)).format('dddd MMMM DD, YYYY');
            return "Week ".concat(number, " (").concat(start, " - ").concat(end, ")");
        };
        return (React.createElement("div", { className: 'w-[576px] h-[220.25px] overflow-y-auto' }, (_b = (_a = props.timeline) === null || _a === void 0 ? void 0 : _a.week) === null || _b === void 0 ? void 0 : _b.map(function (interval, key) { return (React.createElement("div", { key: key },
            React.createElement("div", { className: 'text-lg font-medium text-blue-302 pl-3 pt-4 border-l-4 border-gray-204 select-none' }, interval.year),
            interval.timelinesSummary.map(function (intervalRange) { return (React.createElement(AnchorLink, { hideIcon: true, key: "".concat(intervalRange.startDate, "-").concat(intervalRange.endDate), selected: (selectedWeek === null || selectedWeek === void 0 ? void 0 : selectedWeek.number) === intervalRange.number, label: label(intervalRange), onClick: function () { return setSelectedWeek(intervalRange); } })); }))); })));
    };
    var period = function () {
        var _a, _b;
        var label = function (_a) {
            var startDate = _a.startDate, endDate = _a.endDate, number = _a.number;
            var start = dayjs(new Date(startDate)).format('dddd MMMM DD, YYYY');
            var end = dayjs(new Date(endDate)).format('dddd MMMM DD, YYYY');
            return "Period ".concat(number, " (").concat(start, " - ").concat(end, ")");
        };
        return (React.createElement("div", { className: 'w-[576px] h-[220.25px] overflow-y-auto' }, (_b = (_a = props.timeline) === null || _a === void 0 ? void 0 : _a.period) === null || _b === void 0 ? void 0 : _b.map(function (interval, key) { return (React.createElement("div", { key: key },
            React.createElement("div", { className: 'text-lg font-medium text-blue-302 pl-3 pt-4 border-l-4 border-gray-204 select-none' }, interval.year),
            interval.timelinesSummary.map(function (intervalRange) { return (React.createElement(AnchorLink, { hideIcon: true, key: "".concat(intervalRange.startDate, "-").concat(intervalRange.endDate), selected: (selectedPeriod === null || selectedPeriod === void 0 ? void 0 : selectedPeriod.number) === intervalRange.number, label: label(intervalRange), onClick: function () { return setSelectedPeriod(intervalRange); } })); }))); })));
    };
    var quarter = function () {
        var _a, _b;
        var label = function (_a) {
            var startDate = _a.startDate, endDate = _a.endDate, number = _a.number;
            var start = dayjs(new Date(startDate)).format('dddd MMMM DD, YYYY');
            var end = dayjs(new Date(endDate)).format('dddd MMMM DD, YYYY');
            return "Quarter ".concat(number, " (").concat(start, " - ").concat(end, ")");
        };
        return (React.createElement("div", { className: 'w-[576px] h-[220.25px] overflow-y-auto' }, (_b = (_a = props.timeline) === null || _a === void 0 ? void 0 : _a.quarter) === null || _b === void 0 ? void 0 : _b.map(function (interval, key) { return (React.createElement("div", { key: key },
            React.createElement("div", { className: 'text-lg font-medium text-blue-302 pl-3 pt-4 border-l-4 border-gray-204 select-none' }, interval.year),
            interval.timelinesSummary.map(function (intervalRange) { return (React.createElement(AnchorLink, { hideIcon: true, key: "".concat(intervalRange.startDate, "-").concat(intervalRange.endDate), selected: (selectedQuarter === null || selectedQuarter === void 0 ? void 0 : selectedQuarter.number) === intervalRange.number, label: label(intervalRange), onClick: function () { return setSelectedQuarter(intervalRange); } })); }))); })));
    };
    var custom = function () {
        return (React.createElement("div", null,
            React.createElement("div", { ref: function (ref) { return ref === null || ref === void 0 ? void 0 : ref.appendChild(props.main); } })));
    };
    var render = function () {
        switch (range) {
            case Range.WEEK:
                return week();
            case Range.PERIOD:
                return period();
            case Range.QUARTER:
                return quarter();
            case Range.CUSTOM:
                return custom();
        }
    };
    var buttonApply = function (startDate, endDate) {
        var _a;
        if (range === Range.CUSTOM) {
            (_a = props.onSelected) === null || _a === void 0 ? void 0 : _a.call(props, startDate === null || startDate === void 0 ? void 0 : startDate.toJSDate(), endDate === null || endDate === void 0 ? void 0 : endDate.toJSDate());
        }
        else if (range === Range.WEEK && selectedWeek) {
            props.onSelected(new Date(selectedWeek.startDate), new Date(selectedWeek.endDate));
        }
        else if (range === Range.PERIOD && selectedPeriod) {
            props.onSelected(new Date(selectedPeriod.startDate), new Date(selectedPeriod.endDate));
        }
        else if (range === Range.QUARTER && selectedQuarter) {
            props.onSelected(new Date(selectedQuarter.startDate), new Date(selectedQuarter.endDate));
        }
    };
    useEffect(function () {
        props.picker.removeAllListeners('button:apply');
        props.picker.once('button:apply', buttonApply);
        return function () {
            props.picker.removeAllListeners('button:apply');
        };
    }, [range, selectedWeek, selectedPeriod, selectedQuarter]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'flex' },
            React.createElement("div", { className: 'border-r border-gray-204 w-[120px]' },
                React.createElement(AnchorLink, { onClick: function () { return setRange(Range.WEEK); }, selected: range === Range.WEEK, hideIcon: true, label: 'Week', className: 'h-[55px]' }),
                React.createElement(AnchorLink, { onClick: function () { return setRange(Range.PERIOD); }, selected: range === Range.PERIOD, hideIcon: true, label: 'Period', className: 'h-[55px]' }),
                React.createElement(AnchorLink, { onClick: function () { return setRange(Range.QUARTER); }, selected: range === Range.QUARTER, hideIcon: true, label: 'Quarter', className: 'h-[55px]' }),
                React.createElement(AnchorLink, { onClick: function () { return setRange(Range.CUSTOM); }, selected: range === Range.CUSTOM, hideIcon: true, label: 'Custom Date', className: 'h-[55px]' })),
            render()),
        React.createElement("div", null,
            React.createElement("div", { ref: function (ref) { return ref === null || ref === void 0 ? void 0 : ref.appendChild(props.footer); } }))));
};
var extractChildren = function (litepicker) {
    var children = [];
    while (litepicker.firstChild) {
        children.push(litepicker.removeChild(litepicker.firstChild));
    }
    var main = children[0], footer = children[1];
    return [main, footer];
};
var mount = function (picker, litepicker, props) {
    var _a = extractChildren(litepicker), main = _a[0], footer = _a[1];
    var div = document.createElement('div');
    var root = createRoot(div);
    root.render(React.createElement(Container, { picker: picker, main: main, footer: footer, timeline: props.timeline, onSelected: props.onSelected }));
    litepicker.append(div);
};
var timeline = (function (props) { return ({
    init: function (picker) {
        picker.on('render', function (litepicker) {
            mount(picker, litepicker, props);
        });
    },
}); });

export { timeline as default };
