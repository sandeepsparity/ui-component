import { __rest, __assign } from 'tslib';
import React from 'react';
import Avatar from '../Avatar.js';
import '../../../tailwind.css.js';
import clsx from 'clsx';

var AvatarFull = function (props) {
    var className = props.className, id = props.id, onClick = props.onClick, children = props.children, rest = __rest(props, ["className", "id", "onClick", "children"]);
    return (React.createElement("div", { id: id, onClick: children ? function () { } : onClick, className: clsx('flex items-center', className) },
        React.createElement(Avatar, __assign({}, rest)),
        React.createElement("div", { className: 'flex flex-col ml-2 text-sm whitespace-nowrap text-left' },
            props.name && React.createElement("div", { className: 'font-semibold' }, props.name),
            props.title && React.createElement("div", { className: 'font-light' }, props.title))));
};

export { AvatarFull as default };
