import React, { useState } from 'react';
import { clsx } from 'clsx';

var LoaderIcon = function (props) {
    var _a = useState(false); _a[0]; var setHover = _a[1];
    var width = props.width || 25;
    var height = props.height || 24;
    return (React.createElement("svg", { className: clsx(props.className, 'animate-spin'), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M24.5039 12C24.5039 18.6274 19.1313 24 12.5039 24C5.87649 24 0.503906 18.6274 0.503906 12C0.503906 5.37258 5.87649 0 12.5039 0C19.1313 0 24.5039 5.37258 24.5039 12ZM2.90391 12C2.90391 17.3019 7.20197 21.6 12.5039 21.6C17.8058 21.6 22.1039 17.3019 22.1039 12C22.1039 6.69807 17.8058 2.4 12.5039 2.4C7.20197 2.4 2.90391 6.69807 2.90391 12Z', fill: '#C7DAEB' }),
        React.createElement("path", { d: 'M24.5039 12C24.5039 13.5759 24.1935 15.1363 23.5905 16.5922C22.9874 18.0481 22.1035 19.371 20.9892 20.4853C19.8749 21.5996 18.552 22.4835 17.0961 23.0866C15.6402 23.6896 14.0798 24 12.5039 24L12.5039 21.6C13.7646 21.6 15.0129 21.3517 16.1777 20.8692C17.3424 20.3868 18.4007 19.6797 19.2921 18.7882C20.1836 17.8968 20.8907 16.8385 21.3731 15.6738C21.8556 14.509 22.1039 13.2607 22.1039 12H24.5039Z', fill: '#3997EF' })));
};

export { LoaderIcon as default };
