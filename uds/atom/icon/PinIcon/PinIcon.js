import React, { useState } from 'react';

var PinIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 20;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-label": props === null || props === void 0 ? void 0 : props.title },
        React.createElement("path", { d: 'M10.8282 0.686035L19.3142 9.17204L17.8992 10.586L17.1922 9.87903L12.9502 14.121L12.2432 17.657L10.8282 19.071L6.58617 14.828L1.63617 19.778L0.222168 18.364L5.17217 13.414L0.929168 9.17204L2.34317 7.75704L5.88017 7.05004L10.1222 2.80804L9.41517 2.10104L10.8292 0.686035H10.8282ZM11.5362 4.22204L6.86517 8.89204L4.04317 9.45704L10.5432 15.957L11.1072 13.135L15.7782 8.46504L11.5362 4.22204Z', fill: fill })));
};

export { PinIcon as default };
