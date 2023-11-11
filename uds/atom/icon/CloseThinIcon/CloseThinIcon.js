import React, { useState } from 'react';

var CloseThinIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 27;
    var height = props.height || 27;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 27 27', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M25.5 25.5L1 1M1 25.5L25.5 1L1 25.5Z', stroke: fill, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })));
};

export { CloseThinIcon as default };
