import React, { useState } from 'react';

var RefreshIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 16;
    var height = props.height || 22;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 16 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8 3V0L4 4L8 8V5C11.31 5 14 7.69 14 11C14 12.01 13.75 12.97 13.3 13.8L14.76 15.26C15.54 14.03 16 12.57 16 11C16 6.58 12.42 3 8 3ZM8 17.0002C4.69 17.0002 2 14.3102 2 11.0002C2 9.99023 2.25 9.03023 2.7 8.20023L1.24 6.74023C0.46 7.97023 0 9.43023 0 11.0002C0 15.4202 3.58 19.0002 8 19.0002V22.0002L12 18.0002L8 14.0002V17.0002Z', fill: fill })));
};

export { RefreshIcon as default };
