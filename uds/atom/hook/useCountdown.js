import { useState, useRef, useEffect } from 'react';

var useCountdown = function (date) {
    var getRemaining = function () {
        return !date ? 0 : Math.max((date.getTime() || 0) - new Date().getTime(), 0);
    };
    var _a = useState(getRemaining()), remaining = _a[0], setRemaining = _a[1];
    var timer = useRef();
    var hours = Math.floor(remaining / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    var hour = "".concat(hours);
    var minute = "0".concat(minutes).slice(-2);
    var second = "0".concat(seconds).slice(-2);
    var time = remaining ? "".concat(hour, ":").concat(minute, ":").concat(second) : '';
    useEffect(function () {
        if (timer.current) {
            clearInterval(timer.current);
        }
        timer.current = setInterval(function () { return setRemaining(getRemaining()); }, 1000);
        return function () { return clearInterval(timer.current); };
    }, [date]);
    return { time: time, remaining: remaining };
};

export { useCountdown as default };
