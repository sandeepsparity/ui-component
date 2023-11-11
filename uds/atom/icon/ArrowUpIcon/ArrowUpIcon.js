import React, { useState } from 'react';

var ArrowUpIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 14;
    var height = props.height || 20;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 14 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M0 7L1.41 8.41L6 3.83V20H8V3.83L12.59 8.42L14 7L7 0L0 7Z', fill: fill })));
};

export { ArrowUpIcon as default };
