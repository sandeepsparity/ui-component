import React from 'react';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var Fader = function (props) {
    var opacity = props.isOpen ? 'opacity-100' : 'opacity-0';
    return (React.createElement("div", { className: clsx('transition-opacity ease-in-out', opacity, props.className), style: { transitionDuration: "".concat(props.duration || 200, "ms") } }, props.children));
};

export { Fader as default };
