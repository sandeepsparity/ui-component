import React from 'react';
import { useResizeDetector } from 'react-resize-detector';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var Slider = function (props) {
    var _a = useResizeDetector(), customHeight = _a.height, ref = _a.ref;
    var height = props.isOpen ? customHeight || '100%' : 0;
    return (React.createElement("div", { className: clsx('transition-height ease-in-out', props.className), style: { height: height, transitionDuration: "".concat(props.duration || 200, "ms") } },
        React.createElement("div", { ref: ref }, props.children)));
};

export { Slider as default };
