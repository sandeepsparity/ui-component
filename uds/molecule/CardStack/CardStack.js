import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import 'tslib';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { findByType } from '../../atom/util/react.js';
import '../../tailwind.css.js';

var CardStack = function (props) {
    var _a;
    var height = props.height, width = props.width, children = props.children, open = props.open;
    var _b = useState(open), toggleNotifications = _b[0], setToggleNotifications = _b[1];
    useEffect(function () {
        setToggleNotifications(open);
    }, [open]);
    var heightStyle = function () {
        if (typeof height === 'number') {
            return "".concat(height, "px");
        }
        switch (height) {
            case 'sm':
                return '96px';
            case 'md':
                return '128px';
            case 'lg':
                return '160px';
            default:
                return '96px';
        }
    };
    var widthStyle = function () {
        if (typeof width === 'number') {
            return "".concat(width, "px");
        }
        switch (width) {
            case 'sm':
                return '416px';
            case 'md':
                return '624px';
            case 'lg':
                return '932px';
            default:
                return '100%';
        }
    };
    return (React.createElement("div", { className: props.className },
        React.createElement("div", { className: 'w-fit py-3' },
            React.createElement("div", { className: 'relative' }, (_a = findByType(children, 'Card')) === null || _a === void 0 ? void 0 :
                _a.map(function (card, index) {
                    return (React.createElement("div", { onClick: function () { return index === 0 && setToggleNotifications(!toggleNotifications); }, style: { width: widthStyle(), height: heightStyle() }, className: clsx({
                            'bg-white border relative z-10 border-gray-207 border-solid shadow-[0_2px_12px_rgba(3,59,105,0.15)]': !toggleNotifications && index === 0,
                            'border border-transparent': toggleNotifications && index === 0,
                            hidden: index !== 0 && !toggleNotifications,
                            'ml-8': index !== 0,
                        }), key: "notification-".concat(index) }, card));
                }),
                !toggleNotifications && (React.createElement("div", { style: { width: widthStyle(), height: heightStyle() }, className: 'absolute bg-white top-2 left-2 z-0 h-full w-full border border-gray-207 border-solid shadow-[0_2px_12px_rgba(3,59,105,0.15)]' }))))));
};
var Card = function (props) { return React.createElement("div", null, props.children); };
var CardStack$1 = Object.assign(CardStack, { Card: Card });

export { CardStack$1 as default };
