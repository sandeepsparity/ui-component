import { __assign } from 'tslib';
import React, { useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import '../../tailwind.css.js';

var Popper = function (props) {
    var popper = useRef(null);
    var instance = useRef();
    var onBlur = function (ev) {
        var _a, _b, _c;
        if (!((_a = popper.current) === null || _a === void 0 ? void 0 : _a.contains(ev.relatedTarget))) {
            (_b = popper.current) === null || _b === void 0 ? void 0 : _b.focus();
            (_c = props.onBlur) === null || _c === void 0 ? void 0 : _c.call(props, ev);
        }
    };
    useEffect(function () {
        var _a;
        if (props.open && ((_a = props.anchor) === null || _a === void 0 ? void 0 : _a.current) && popper.current) {
            var options = __assign({ placement: 'bottom-start', modifiers: [], strategy: 'absolute', onFirstUpdate: function () { return ({}); } }, props.options);
            instance.current = createPopper(props.anchor.current, popper.current, options);
        }
    });
    useEffect(function () {
        var _a, _b;
        if (props.open) {
            (_a = instance.current) === null || _a === void 0 ? void 0 : _a.forceUpdate();
            (_b = popper.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [props.open]);
    return !props.open ? null : (React.createElement("div", { "data-testid": 'popper', tabIndex: -1, ref: popper, onBlur: onBlur, style: { zIndex: props.zIndex || 10 }, className: 'absolute w-fit h-fit outline-none' }, props.children));
};

export { Popper as default };
