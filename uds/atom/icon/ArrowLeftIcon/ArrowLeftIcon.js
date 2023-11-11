import React, { useState } from 'react';

var ArrowLeftIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 14;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7 14L8.41 12.59L3.83 8H20V6H3.83L8.42 1.41L7 0L0 7L7 14Z', fill: fill })));
};

export { ArrowLeftIcon as default };
