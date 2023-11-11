import React, { useState } from 'react';

var StarIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 24;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M12 1.96501L14.9521 8.25387L15.1413 8.65675L15.5812 8.72436L22.268 9.75211L17.4026 14.7353L17.108 15.0369L17.1759 15.453L18.315 22.437L12.4041 19.1683L12 18.9449L11.5959 19.1683L5.68497 22.437L6.82411 15.453L6.89198 15.0369L6.59745 14.7353L1.73196 9.75211L8.41885 8.72436L8.85874 8.65675L9.04786 8.25387L12 1.96501Z', stroke: fill, strokeWidth: '1.67', strokeLinecap: 'round' })));
};

export { StarIcon as default };
