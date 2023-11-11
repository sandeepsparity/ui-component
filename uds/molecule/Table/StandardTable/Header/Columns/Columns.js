import React from 'react';
import { ChevronDown, Pin } from 'lucide-react';
import Popover from '../../../../Popover/Popover.js';
import 'tslib';
import { color } from '../../../../../atom/util/colors.js';
import '../../../../../atom/util/dayjs.js';
import 'react-dom/client';
import Draggable from '../../../../Draggable/Draggable.js';
import Label from '../../../../../atom/component/Label/Label.js';
import Toggle from '../../../../Toggle/Toggle.js';
import clsx from 'clsx';
import '../../../../../tailwind.css.js';

var Columns = function (props) {
    var _a;
    var reorder = function (items) {
        var _a;
        if (props.reorder) {
            var columns = ((_a = props.columns) === null || _a === void 0 ? void 0 : _a.map(function (column) { return column.hideFromMenu ? column : items.shift(); })) || [];
            props.reorder(columns);
        }
    };
    return (React.createElement(Popover, { className: props.className },
        React.createElement(Popover.Anchor, null,
            React.createElement("div", { className: 'flex items-center w-fit h-[40px] px-[2px] rounded-lg border-4 border-transparent hover:border-blue-306' },
                React.createElement("span", { className: 'font-semibold text-brand leading-6' }, props.label || 'Columns'),
                React.createElement(ChevronDown, { color: color('brand'), className: clsx('transition duration-200', { 'rotate-180': false }) }))),
        React.createElement(Popover.Content, null,
            React.createElement("div", { className: "absolute top-2 right-[calc(100%_-_100px)] min-w-[246px] h-fit py-2 bg-white border border-gray-204 rounded-lg drop-shadow-md" },
                React.createElement(Draggable, { items: ((_a = props.columns) === null || _a === void 0 ? void 0 : _a.filter(function (col) { return !col.hideFromMenu; })) || [], onChange: reorder, className: "w-full min-h-[48px] px-2" }, function (_a) {
                    var column = _a.item, handle = _a.handle;
                    console.log('column', column);
                    return React.createElement("div", { className: "flex items-center justify-between w-full" },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement(Toggle, { checked: !column.hidden, onChange: function (visible) { var _a; return (_a = props.update) === null || _a === void 0 ? void 0 : _a.call(props, { id: column.id, hidden: !visible }); } }),
                            React.createElement(Label, { label: typeof column.label === 'string' ? column.label : String(column.id), className: clsx("mx-[6px] font-medium leading-5 select-none whitespace-nowrap", { "max-w-[200px] truncate": props.truncate }) })),
                        React.createElement("div", { className: 'flex items-center' },
                            React.createElement(Pin, { onClick: function () { var _a; return (_a = props.update) === null || _a === void 0 ? void 0 : _a.call(props, { id: column.id, pinned: !column.pinned }); }, width: 20, height: 20, strokeWidth: 1.5, className: 'min-w-[20px] my-auto mr-[8px] cursor-pointer overflow-hidden rotate-45', color: color('gray-203'), fill: column.pinned ? color('gray-203') : color('transparent') }),
                            handle));
                })))));
};

export { Columns as default };
