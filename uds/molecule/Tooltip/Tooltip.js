import { __rest, __assign } from 'tslib';
import React, { useRef, useEffect } from 'react';
import Popover$1 from './Popover/Popover.js';
import { createPopper } from '@popperjs/core';
import { isEmptyArray } from '../../atom/util/array.js';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { findByType, excludeByType } from '../../atom/util/react.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import '../../tailwind.css.js';

var Popover = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Tooltip = function (_a) {
    var children = _a.children, zIndex = _a.zIndex, props = __rest(_a, ["children", "zIndex"]);
    var baseProps = useBaseProps(props);
    var _b = React.useState(false), hover = _b[0], setHover = _b[1];
    var container = useRef(null);
    var tooltip = useRef(null);
    var anchor = props.anchor || 'bottom';
    var popover = function () {
        var _popover = findByType(children, Popover.name);
        if (isEmptyArray(_popover)) {
            return React.createElement(Popover$1, __assign({}, props, { anchor: anchor }));
        }
        else {
            var popoverContent = _popover === null || _popover === void 0 ? void 0 : _popover.flatMap(function (node) { var _a; return (_a = node === null || node === void 0 ? void 0 : node.props) === null || _a === void 0 ? void 0 : _a.children; });
            return React.createElement(Popover$1, __assign({}, props, { anchor: anchor, children: popoverContent }));
        }
    };
    var content = function () { return excludeByType(children, Popover.name); };
    useEffect(function () {
        if (hover && container.current && tooltip.current) {
            createPopper(container.current, tooltip.current, {
                placement: anchor,
                modifiers: [{ name: 'flip', enabled: false }],
            });
        }
    }, [hover]);
    return (React.createElement(React.Fragment, null,
        hover && (React.createElement("div", { ref: tooltip, style: { zIndex: zIndex } }, popover())),
        React.createElement("div", __assign({}, baseProps, { ref: container, onMouseOver: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, className: 'truncate' }), content())));
};
var Tooltip$1 = Object.assign(Tooltip, { Popover: Popover });

export { Tooltip$1 as default };
