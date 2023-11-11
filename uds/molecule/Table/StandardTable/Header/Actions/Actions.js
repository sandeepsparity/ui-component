import React from 'react';
import { ChevronDown } from 'lucide-react';
import Dropdown from '../../../../Dropdown/Dropdown.js';
import 'tslib';
import { color } from '../../../../../atom/util/colors.js';
import '../../../../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../../../../tailwind.css.js';

var Actions = function (props) {
    var _a, _b, _c, _d, _e, _f;
    return (React.createElement(Dropdown, { disabled: !((_a = props.selected) === null || _a === void 0 ? void 0 : _a.length), className: clsx("top-2 right-0", props.className) },
        React.createElement(Dropdown.Anchor, null,
            React.createElement("div", { className: clsx("flex items-center w-full h-[40px] px-[2px] rounded-lg border-4 border-transparent", { "hover:border-blue-306": !!((_b = props.selected) === null || _b === void 0 ? void 0 : _b.length) }) },
                React.createElement("span", { className: clsx("font-semibold leading-6", { "text-brand": (_c = props.selected) === null || _c === void 0 ? void 0 : _c.length, "text-disabled-text": !((_d = props.selected) === null || _d === void 0 ? void 0 : _d.length) }) }, props.label || "Actions"),
                React.createElement(ChevronDown, { color: color(((_e = props.selected) === null || _e === void 0 ? void 0 : _e.length) ? 'brand' : 'disabled-text'), className: clsx("transition duration-200", { "rotate-180": false }) }))), (_f = props.actions) === null || _f === void 0 ? void 0 :
        _f.map(function (action, idx) {
            return React.createElement(Dropdown.Item, { key: idx, onClick: function () { var _a; action.onClick(props.selected || []); (_a = props.clear) === null || _a === void 0 ? void 0 : _a.call(props); } }, action.label);
        })));
};

export { Actions as default };
