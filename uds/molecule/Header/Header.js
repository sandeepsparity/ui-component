import { __rest, __assign } from 'tslib';
import React from 'react';
import HeaderInternal from './HeaderInternal/HeaderInternal.js';
import HeaderPublic from './HeaderPublic/HeaderPublic.js';

var Header = function (props) {
    var variant = props.variant, rest = __rest(props, ["variant"]);
    switch (variant) {
        case 'internal':
            return React.createElement(HeaderInternal, __assign({}, rest));
        case 'public':
            return React.createElement(HeaderPublic, __assign({ className: props.className }, rest));
        default:
            return React.createElement(HeaderInternal, __assign({}, rest));
    }
};

export { Header as default };
