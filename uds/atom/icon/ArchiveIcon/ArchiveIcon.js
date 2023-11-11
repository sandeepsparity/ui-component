import React, { useState } from 'react';

var ArchiveIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 22;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 22 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("rect", { x: '1', y: '1', width: '20', height: '22', rx: '3', stroke: fill, strokeWidth: '2' }),
        React.createElement("path", { d: 'M5.5 6H10.8333M5.5 10.5H13.5', stroke: fill, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })));
};

export { ArchiveIcon as default };
