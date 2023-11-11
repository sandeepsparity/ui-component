import { __assign } from 'tslib';
import React from 'react';
import StandardTable from './StandardTable/StandardTable.js';
import '../../tailwind.css.js';

var Header = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Footer = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Empty = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Table = function (props) {
    switch (props.variant) {
        default:
            return React.createElement(StandardTable, __assign({}, props));
    }
};
var Table$1 = Object.assign(Table, { Header: Header, Footer: Footer, Empty: Empty });

export { Empty, Footer, Header, Table$1 as default };
