import React, { useState } from 'react';

var InformationIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 24;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    var accent = (hover ? props.accentAlt || props.accent : props.accent) || '#FFF';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("circle", { cx: '12', cy: '12', r: '10.5', fill: fill }),
        React.createElement("path", { d: 'M11 7H13.5V14.0714H11V7ZM13.5 15.8V18H11L11 15.8H13.5Z', fill: accent })));
};

export { InformationIcon as default };
