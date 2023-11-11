import React, { useState } from 'react';

var CloseIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 14;
    var height = props.height || 14;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 14 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-label": props.title },
        React.createElement("path", { d: 'M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z', fill: fill })));
};

export { CloseIcon as default };
