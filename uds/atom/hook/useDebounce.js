import { useRef } from 'react';

var useDebounce = function (fn, timeout) {
    if (timeout === void 0) { timeout = 500; }
    var timer = useRef();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () { return fn.apply(void 0, args); }, timeout);
        return function () { return clearTimeout(timer.current); };
    };
};

export { useDebounce as default };
