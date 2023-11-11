import React, { useState } from 'react';

var CalendarIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 22;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM2 7H18V4H2V7Z', fill: fill })));
};

export { CalendarIcon as default };
