import React, { useState } from 'react';

var ChevronDownIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 12;
    var height = props.height || 8;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 12 8', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-label": props.title },
        React.createElement("path", { d: 'M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z', fill: fill })));
};

export { ChevronDownIcon as default };
