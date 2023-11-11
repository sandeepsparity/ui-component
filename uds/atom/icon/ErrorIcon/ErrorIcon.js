import React, { useState } from 'react';

var ErrorIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 24;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    var accent = (hover ? props.accentAlt || props.accent : props.accent) || '#FFF';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M7.0925 0.5H16.4075L23 7.0925V16.4075L16.4075 23H7.0925L0.5 16.4075V7.0925L7.0925 0.5Z', fill: fill }),
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10.95 12.9943C10.95 13.69 11.4516 14.25 12.075 14.25C12.6983 14.25 13.1847 13.69 13.2 13.0113V8.00566C13.2 7.30996 12.6983 6.75 12.075 6.75C11.4516 6.75 10.95 7.30996 10.95 8.00566V12.9943ZM10.95 16.6035C10.95 17.2933 11.5052 17.8485 12.195 17.8485C12.8679 17.8485 13.44 17.2933 13.44 16.6035C13.44 15.9137 12.8847 15.3585 12.195 15.3585H12.1781C11.5052 15.3585 10.95 15.9137 10.95 16.6035Z', fill: accent })));
};

export { ErrorIcon as default };
