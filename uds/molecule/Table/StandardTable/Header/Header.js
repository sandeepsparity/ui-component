import React from 'react';
import Columns from './Columns/Columns.js';
import Actions from './Actions/Actions.js';
import clsx from 'clsx';
import '../../../../tailwind.css.js';

var Header = function (props) {
    var _a, _b, _c, _d;
    var columns = React.createElement(Columns, { columns: props.columns, reorder: props.reorder, update: props.update, truncate: (_c = (_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.heading) === null || _b === void 0 ? void 0 : _b.columns) === null || _c === void 0 ? void 0 : _c.truncate });
    var actions = React.createElement(Actions, { actions: props.actions, selected: props.selected, clear: props.clear });
    var renderProps = { columns: columns, actions: actions };
    return typeof props.children === 'function' ? props.children(renderProps) : (React.createElement("div", { className: clsx("h-[52px]", props.className) },
        React.createElement("div", { className: "flex items-center justify-between w-full h-full" },
            React.createElement("div", { className: "flex items-center w-full h-full" }, props.children),
            React.createElement("div", { className: "flex items-center" },
                !!((_d = props.actions) === null || _d === void 0 ? void 0 : _d.length) && actions,
                columns))));
};

export { Header as default };
