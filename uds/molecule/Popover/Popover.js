import { __assign } from 'tslib';
import React, { useState } from 'react';
import { Popover as Popover$2 } from '@headlessui/react';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { findChildrenByType } from '../../atom/util/react.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import clsx from 'clsx';
import '../../tailwind.css.js';

var Anchor = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Content = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Popover = function (props) {
    var _a;
    var baseProps = useBaseProps(props);
    var _b = useState(!!props.open), isOpen = _b[0], setOpen = _b[1];
    var close = function () { return setOpen(false); };
    var renderProps = { close: close };
    var content = (_a = findChildrenByType(props.children, 'Content')) === null || _a === void 0 ? void 0 : _a.map(function (child, idx) {
        return React.cloneElement(typeof child === 'function' ? child(renderProps) : child, { key: idx });
    });
    return (React.createElement(Popover$2, __assign({}, baseProps, { className: "relative" }),
        React.createElement(Popover$2.Button, { disabled: props.disabled, onClick: function () { return setOpen(!isOpen); }, className: "outline-0" }, findChildrenByType(props.children, "Anchor")),
        isOpen &&
            React.createElement(Popover$2.Panel, { static: true, className: clsx("absolute w-fit", props.className), style: { zIndex: props.zIndex || 10 } }, content)));
};
/** @deprecated - Use Popper component instead. */
var Popover$1 = Object.assign(Popover, { Anchor: Anchor, Content: Content });

export { Popover$1 as default };
