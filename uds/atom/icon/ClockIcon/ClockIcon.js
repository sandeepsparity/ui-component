import React, { useState } from 'react';

var ClockIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 16;
    var height = props.height || 16;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-label": props.title },
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M1.99834 8C1.99834 4.68537 4.68537 1.99834 8 1.99834C11.3146 1.99834 14.0017 4.68537 14.0017 8C14.0017 11.3146 11.3146 14.0017 8 14.0017C4.68537 14.0017 1.99834 11.3146 1.99834 8ZM8 0.668335C3.95083 0.668335 0.668335 3.95083 0.668335 8C0.668335 12.0492 3.95083 15.3317 8 15.3317C12.0492 15.3317 15.3317 12.0492 15.3317 8C15.3317 3.95083 12.0492 0.668335 8 0.668335ZM8.66499 4.00001C8.66499 3.63274 8.36726 3.33501 7.99999 3.33501C7.63272 3.33501 7.33499 3.63274 7.33499 4.00001V8.00001C7.33499 8.25189 7.4773 8.48216 7.70259 8.5948L10.3693 9.92813C10.6978 10.0924 11.0972 9.95923 11.2615 9.63074C11.4257 9.30224 11.2926 8.90279 10.9641 8.73855L8.66499 7.58901V4.00001Z', fill: fill })));
};

export { ClockIcon as default };
