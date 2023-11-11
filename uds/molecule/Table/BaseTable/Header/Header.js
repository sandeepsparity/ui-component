import React from 'react';
import { columnsByDepth } from '../../../../atom/util/table.js';
import Cell from './Cell/Cell.js';
import clsx from 'clsx';
import '../../../../tailwind.css.js';

var Header = function (props) {
    var depth = props.depth || 0;
    var dividersH = props.dividers === true || props.dividers === 'horizontal' || depth > 0;
    var dividersV = props.dividers === true || props.dividers === 'vertical' || depth > 0;
    return (React.createElement(React.Fragment, null,
        React.createElement("tr", { className: clsx("h-12 bg-gray-206", props.className) }, columnsByDepth(props.columns, depth).map(function (_a, idx) {
            var column = _a[0], span = _a[1];
            return (React.createElement(Cell, { key: "header-".concat(idx), column: column, toggleSort: props.toggleSort, span: span, className: clsx("h-[inherit] p-0", { "first:border-l-0 last:border-r-0 border-l border-r border-l-gray-204 border-r-gray-204": dividersV, "border-b border-b-gray-204": dividersH && column }) }));
        })),
        depth > 0 && React.createElement(Header, { columns: props.columns, toggleSort: props.toggleSort, dividers: true, depth: depth - 1, className: props.className })));
};

export { Header as default };
