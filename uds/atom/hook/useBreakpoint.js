import { useState, useEffect } from 'react';

var XS = 0;
var SM = 640;
var SS = 720;
var MD = 768;
var LG = 1024;
var XL = 1280;
var XXL = 1536;
var getBreakpoint = function (width) {
    if (width < SM) {
        return 'xs';
    }
    else if (width < SS) {
        return 'sm';
    }
    else if (width < MD) {
        return 'ss';
    }
    else if (width < LG) {
        return 'md';
    }
    else if (width < XL) {
        return 'lg';
    }
    else if (width < XXL) {
        return 'xl';
    }
    else {
        return '2xl';
    }
};
var useBreakpoint = function () {
    var _a = useState(null), div = _a[0], ref = _a[1];
    var _b = useState(0), width = _b[0], setWidth = _b[1];
    var _c = useState(0), height = _c[0], setHeight = _c[1];
    var breakpoint = getBreakpoint(width);
    var resize = function () {
        setWidth(!div ? window.innerWidth : div.clientWidth);
        setHeight(!div ? window.innerHeight : div.clientHeight);
    };
    useEffect(function () {
        resize();
        window.addEventListener('resize', resize);
        return function () { return window.removeEventListener('resize', resize); };
    }, [resize]);
    return {
        ref: ref,
        width: width,
        height: height,
        breakpoint: breakpoint,
        xs: width >= XS,
        sm: width >= SM,
        ss: width >= SS,
        md: width >= MD,
        lg: width >= LG,
        xl: width >= XL,
        '2xl': width >= XXL,
    };
};

export { useBreakpoint as default };
