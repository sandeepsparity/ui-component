import React, { useState } from 'react';

var ReviewIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 20;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H18C19.1 20 20 19.1 20 18V2C20 1.46957 19.7893 0.96086 19.4142 0.585787C19.0391 0.210714 18.5304 0 18 0ZM18 18H2V2H18V18Z', fill: fill }),
        React.createElement("path", { d: 'M10 15C5.64 15 3.22 10.66 3.12 10.48C2.96 10.18 2.96 9.82 3.12 9.52C3.22 9.34 5.64 5 10 5C14.36 5 16.78 9.34 16.88 9.52C17.04 9.82 17.04 10.18 16.88 10.48C16.78 10.66 14.36 15 10 15ZM5.19 10C5.85 10.96 7.56 13 10 13C12.44 13 14.15 10.96 14.81 10C14.15 9.05 12.44 7 10 7C7.56 7 5.85 9.04 5.19 10Z', fill: fill }),
        React.createElement("circle", { cx: '10', cy: '10', r: '2', fill: fill })));
};

export { ReviewIcon as default };
