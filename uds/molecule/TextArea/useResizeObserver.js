import { useState, useCallback, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

var useResizeObserver = function (ref, callback) {
    var _a = useState(), width = _a[0], setWidth = _a[1];
    var _b = useState(), height = _b[0], setHeight = _b[1];
    var handleResize = useCallback(function (entries) {
        if (!Array.isArray(entries)) {
            return;
        }
        var entry = entries[0];
        setWidth(entry === null || entry === void 0 ? void 0 : entry.borderBoxSize[0].inlineSize);
        setHeight(entry.contentRect.height);
        if (callback) {
            callback(entry.contentRect);
        }
    }, [callback]);
    useLayoutEffect(function () {
        if (!ref.current) {
            return;
        }
        var resizeObs = new ResizeObserver(function (entries) { return handleResize(entries); });
        resizeObs.observe(ref.current);
        return function () {
            resizeObs.disconnect();
        };
    }, [ref]);
    return [width, height];
};

export { useResizeObserver };
