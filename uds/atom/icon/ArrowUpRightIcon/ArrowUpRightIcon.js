import React, { useState } from 'react';

var ArrowUpRightIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 15;
    var height = props.height || 15;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 15 15', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z', fill: fill })));
};

export { ArrowUpRightIcon as default };
