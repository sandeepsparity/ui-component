import { __spreadArray } from 'tslib';
import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';
import clsx from 'clsx';
import '../../tailwind.css.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';

var Draggable = function (props) {
    var _a;
    var _b = useState(-1), selectedIdx = _b[0], setSelectedIdx = _b[1];
    var _c = useState(-1), targetIdx = _c[0], setTargetIdx = _c[1];
    var reorder = function () {
        if (selectedIdx < 0 || targetIdx < 0) {
            return;
        }
        var items = __spreadArray([], props.items, true);
        var target = items[targetIdx];
        var selected = items.splice(selectedIdx, 1).shift();
        var idx = items.indexOf(target);
        if (selectedIdx > targetIdx) {
            items.splice(idx, 1, selected, target);
        }
        else if (selectedIdx < targetIdx) {
            items.splice(idx, 1, target, selected);
        }
        props.onChange(items);
    };
    return (React.createElement("div", { className: props.className }, (_a = props.items) === null || _a === void 0 ? void 0 : _a.map(function (item, idx) {
        var _a;
        return React.createElement("div", { key: idx, draggable: idx === selectedIdx, onDragStart: function () { return setSelectedIdx(idx); }, onDragOver: function (event) { event.preventDefault(); setTargetIdx(idx !== selectedIdx ? idx : -1); }, onDragEnd: function () { setSelectedIdx(-1); reorder(); }, className: clsx("flex items-center justify-between border border-transparent", selectedIdx > -1 && idx === targetIdx && { "border-b border-b-gray-203": selectedIdx < targetIdx, "border-t border-t-gray-203": selectedIdx > targetIdx }, props.className) },
            React.createElement(React.Fragment, null, (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, { item: item, idx: idx, handle: React.createElement(GripVertical, { onMouseDown: function () { return setSelectedIdx(idx); }, onMouseUp: function () { return setSelectedIdx(-1); }, size: 16, color: color('gray-203'), className: "cursor-grab active:cursor-grabbing" }) })));
    })));
};

export { Draggable as default };
