import { __assign } from 'tslib';
import React from 'react';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Divider = function (props) {
    var baseProps = useBaseProps(props);
    var width = '0px';
    var border = '0 1 0 0';
    var marginTop = 'auto';
    var marginBottom = 'auto';
    var borderColor = props.color || '#000';
    var borderRightWidth = props.width ? "".concat(props.width, "px") : '1px';
    var height = props.height ? "".concat(props.height, "px") : '60%';
    return (React.createElement("hr", __assign({}, baseProps, { className: props.className, style: { width: width, border: border, marginTop: marginTop, marginBottom: marginBottom, borderColor: borderColor, borderRightWidth: borderRightWidth, height: height } })));
};

export { Divider as default };
