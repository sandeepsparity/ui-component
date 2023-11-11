import React, { useState } from 'react';
import Cell from './Cell/Cell.js';
import clsx from 'clsx';
import '../../../../tailwind.css.js';

var Row = function (props) {
    var _a = useState(typeof props.autoExpand === 'function' ? props.autoExpand(props.item) : !!props.autoExpand), expanded = _a[0], setExpanded = _a[1];
    var dividersH = props.dividers === true || props.dividers === 'horizontal';
    var dividersV = props.dividers === true || props.dividers === 'vertical';
    var toggle = props.expansion ? function () { return setExpanded(!expanded); } : undefined;
    var collapse = function () { return setExpanded(false); };
    return (React.createElement(React.Fragment, null,
        React.createElement("tr", { className: clsx("h-12 max-h-12 bg-white hover:bg-data-brand-4", { "border-b border-b-data-light-gray-12": dividersH }, props.className) }, props.columns.map(function (column, idx) { return React.createElement(Cell, { key: "row-".concat(idx), item: props.item, column: column, expanded: expanded, toggle: toggle, loading: props.loading, className: clsx("h-[inherit] p-0", { "last:border-r-0 border-r border-r-data-light-gray-12": dividersV }) }); })),
        !props.loading && expanded && props.expansion && React.createElement("tr", null,
            React.createElement("td", { colSpan: props.columns.length }, props.expansion(props.item, collapse)))));
};

export { Row as default };
