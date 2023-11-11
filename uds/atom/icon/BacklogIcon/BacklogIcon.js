import React, { useState } from 'react';

var BacklogIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 22;
    var height = props.height || 23;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 22 23', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M5 1.5H3.5C2.84 1.5 2.2 1.76 1.73 2.23C1.26 2.7 1 3.34 1 4V19C1 19.66 1.26 20.3 1.73 20.77C2.2 21.24 2.83 21.5 3.5 21.5H18.5C19.16 21.5 19.8 21.24 20.27 20.77C20.74 20.3 21 19.66 21 19V4C21 3.34 20.74 2.7 20.27 2.23C19.8 1.76 19.16 1.5 18.5 1.5H17', stroke: fill, strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
        React.createElement("path", { d: 'M1 13H5.59C5.86 13 6.11 13.11 6.3 13.29L8.71 15.7C8.89 15.89 9.15 16 9.41 16H12.58C12.85 16 13.1 15.89 13.29 15.71L15.7 13.3C15.89 13.11 16.14 13.01 16.41 13.01H21', stroke: fill, strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
        React.createElement("path", { d: 'M11 1V11V1Z', stroke: fill, strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
        React.createElement("path", { d: 'M11 11L14 8L11 11Z', stroke: fill, strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
        React.createElement("path", { d: 'M11 11L8 8L11 11Z', stroke: fill, strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' })));
};

export { BacklogIcon as default };
