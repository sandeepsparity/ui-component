import React, { useState } from 'react';

var ContentPasteGoIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 21;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M2 2H4H16H18V10H20V2C20 0.9 19.1 0 18 0C12.625 0 7.08277 0 2 0C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H7V18H2V2Z', fill: fill }),
        React.createElement("path", { d: 'M15.01 11L13.59 12.41L16.17 14.99H10V16.99H16.17L13.59 19.58L15.01 20.99L20 15.99L15.01 11Z', fill: fill })));
};

export { ContentPasteGoIcon as default };
