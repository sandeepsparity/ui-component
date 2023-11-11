import React, { useState } from 'react';

var SuccessIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 24;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    var accent = (hover ? props.accentAlt || props.accent : props.accent) || '#FFF';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("circle", { cx: '12', cy: '12', r: '10.5', fill: fill }),
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M19 8.38739L17.6323 7L9.56615 15.2252L6.36769 11.966L5 13.3534L9.56615 18L19 8.38739Z', fill: accent })));
};

export { SuccessIcon as default };
