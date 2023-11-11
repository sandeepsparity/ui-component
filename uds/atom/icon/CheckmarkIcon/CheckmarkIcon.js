import React, { useState } from 'react';

var CheckmarkIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 18;
    var height = props.height || 14;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 18 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M5.9999 11.2L1.7999 7L0.399902 8.4L5.9999 14L17.9999 2L16.5999 0.599998L5.9999 11.2Z', fill: fill })));
};

export { CheckmarkIcon as default };
