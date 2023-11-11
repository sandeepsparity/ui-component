import React, { useState } from 'react';

var PinFilledIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 20;
    var height = props.height || 20;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', "aria-label": props === null || props === void 0 ? void 0 : props.title },
        React.createElement("path", { d: 'M 10.8282,0.686035 c 2.828667,2.8286683 5.657333,5.6573367 8.486,8.486005 -0.471667,0.47132 -0.943333,0.94264 -1.415,1.41396 -0.235667,-0.235657 -0.471333,-0.471313 -0.707,-0.70697 -1.414,1.41399 -2.828,2.82798 -4.242,4.24197 -0.235667,1.178667 -0.471333,2.357333 -0.707,3.536 -0.471667,0.471333 -0.943333,0.942667 -1.415,1.414 -1.41401,-1.414333 -2.82802,-2.828667 -4.24203,-4.243 -1.65,1.65 -3.3,3.3 -4.95,4.95 C 1.164836,19.306667 0.693502,18.835333 0.222168,18.364 1.8721687,16.714 3.5221693,15.064 5.17217,13.414 3.757836,12.000013 2.343502,10.586027 0.929168,9.17204 1.4234772,8.7067907 1.8770343,8.1654177 2.3961228,7.7464554 3.5574719,7.5143169 4.7188209,7.2821785 5.88017,7.05004 7.29418,5.63604 8.70819,4.22204 10.1222,2.80804 9.8865233,2.5723733 9.6508467,2.3367067 9.41517,2.10104 9.8856148,1.6296082 10.360599,1.1562876 10.8282,0.686035 Z', fill: fill })));
};

export { PinFilledIcon as default };
