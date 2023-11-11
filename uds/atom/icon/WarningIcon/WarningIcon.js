import React, { useState } from 'react';

var WarningIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 24;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    var accent = (hover ? props.accentAlt || props.accent : props.accent) || '#FFF';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M0.940166 23.998C4.62581 23.9988 8.31186 23.9984 11.9975 23.9984C14.4273 23.9984 16.857 23.9988 19.2868 23.9988C20.5567 23.9988 21.8267 24.0024 23.0967 23.9971C23.8253 23.9944 24.2204 23.267 23.8713 22.589C23.7387 22.3312 23.6107 22.0712 23.4806 21.8121C22.3615 19.5847 21.2427 17.3569 20.1235 15.13C18.8999 12.6956 17.6755 10.2616 16.4519 7.82723C15.235 5.40563 14.0193 2.9836 12.8011 0.562888C12.7493 0.46048 12.6872 0.358514 12.6109 0.276852C12.193 -0.170741 11.5183 -0.0630362 11.2283 0.509035C10.3113 2.31839 9.40248 4.13216 8.49163 5.9446C7.21006 8.49509 5.92933 11.046 4.64817 13.5969C3.13631 16.6074 1.6232 19.6169 0.113817 22.6291C0.0566555 22.7426 0.0135777 22.875 0.00363663 23.0021C-0.0423407 23.5822 0.351987 23.998 0.940166 23.998Z', fill: fill }),
        React.createElement("path", { d: 'M13 16H11V9H13V16Z', fill: accent }),
        React.createElement("path", { d: 'M13 19.995C12.625 19.995 12.2602 19.995 11.8955 19.995C11.6406 19.995 11.3857 19.9943 11.1308 19.9953C11.0586 19.9956 10.9997 19.9933 11 19.8943C11.002 19.267 11.001 18.6393 11.001 18H12.9997V19.9946L13 19.995Z', fill: accent })));
};

export { WarningIcon as default };
