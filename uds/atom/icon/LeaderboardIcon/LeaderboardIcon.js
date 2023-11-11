import React, { useState } from 'react';

var LeaderboardIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 18;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M14 8V0H6V6H0V18H20V8H14ZM8 2H12V16H8V2ZM2 8H6V16H2V8ZM18 16H14V10H18V16Z', fill: fill })));
};

export { LeaderboardIcon as default };
