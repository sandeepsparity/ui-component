import React from 'react';
import useHAF from '../../hook/useHAF.js';
import '../../../tailwind.css.js';

var Label = function (props) {
    var _a = useHAF(), ref = _a.ref, overflowX = _a.overflowX;
    var title = overflowX ? props.label : undefined;
    return React.createElement("span", { ref: ref, title: title, className: props.className }, props.label);
};

export { Label as default };
