import { __assign } from 'tslib';
import React from 'react';
import ListItem from './ListItem/ListItem.js';
import '../../tailwind.css.js';
import clsx from 'clsx';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var List = function (props) {
    var baseProps = useBaseProps(props);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx('py-[1px] px-2 bg-brand-dark bg-gradient-to-b from-brand-dark via-brand-dark/70 to-black/30', props.className) }), React.Children.map(props.children, function (child) { return (React.createElement(ListItem, __assign({}, child === null || child === void 0 ? void 0 : child.props))); })));
};

export { List as default };
