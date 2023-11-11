import React, { useState } from 'react';

var EllipseIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 20;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#FFF';
    var accent = (hover ? props.accentAlt || props.accent : props.accent) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("circle", { cx: '10', cy: '10', r: '9', fill: fill, stroke: accent, strokeWidth: '2' })));
};

export { EllipseIcon as default };
