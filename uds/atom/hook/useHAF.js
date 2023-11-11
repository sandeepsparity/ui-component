import { useRef, useState, useEffect } from 'react';

var useHAF = function (forwardedRef) {
    var _a, _b, _c, _d, _e;
    var ref = useRef(null);
    var _f = useState(false), hover = _f[0], setHover = _f[1];
    var _g = useState(false), active = _g[0], setActive = _g[1];
    var _h = useState(false), focus = _h[0], setFocus = _h[1];
    var _j = useState(0), width = _j[0], setWidth = _j[1];
    var _k = useState(false), overflowX = _k[0], setOverflowX = _k[1];
    var _l = useState(false), overflowY = _l[0], setOverflowY = _l[1];
    useEffect(function () {
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
            ref.current.addEventListener('mouseenter', function () { return setHover(true); });
            ref.current.addEventListener('mouseleave', function () { return setHover(false); });
            ref.current.addEventListener('mousedown', function () { return setActive(true); });
            ref.current.addEventListener('mouseup', function () { return setActive(false); });
            ref.current.addEventListener('focus', function () { return setFocus(true); });
            ref.current.addEventListener('blur', function () { return setFocus(false); });
            if (typeof forwardedRef === 'function') {
                forwardedRef(ref.current);
            }
            else if (!!forwardedRef) {
                forwardedRef.current = ref.current;
            }
        }
    }, [ref === null || ref === void 0 ? void 0 : ref.current]);
    useEffect(function () {
        var _a;
        if ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) {
            setWidth(ref.current.offsetWidth);
        }
    }, [(_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth]);
    useEffect(function () {
        var _a, _b;
        if ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth, (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.scrollWidth) {
            setOverflowX(ref.current.clientWidth < ref.current.scrollWidth);
        }
    }, [(_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.clientWidth, (_c = ref === null || ref === void 0 ? void 0 : ref.current) === null || _c === void 0 ? void 0 : _c.scrollWidth]);
    useEffect(function () {
        var _a, _b;
        if (((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.clientHeight) && ((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.scrollHeight)) {
            setOverflowY(ref.current.clientHeight < ref.current.scrollHeight);
        }
    }, [((_d = ref === null || ref === void 0 ? void 0 : ref.current) === null || _d === void 0 ? void 0 : _d.clientHeight) && ((_e = ref === null || ref === void 0 ? void 0 : ref.current) === null || _e === void 0 ? void 0 : _e.scrollHeight)]);
    return { ref: ref, hover: hover, active: active, focus: focus, width: width, overflowX: overflowX, overflowY: overflowY };
};

export { useHAF as default };
