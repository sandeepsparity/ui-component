import React, { useState } from 'react';

var CircleCloseIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 24;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("circle", { cx: '12', cy: '12', r: '11', stroke: fill, strokeWidth: '2' }),
        React.createElement("path", { d: 'M7.5 7.5L16.5 16.5', stroke: fill, strokeWidth: '2' }),
        React.createElement("path", { d: 'M7.5 16.5L16.5 7.5', stroke: fill, strokeWidth: '2' })));
};

export { CircleCloseIcon as default };
