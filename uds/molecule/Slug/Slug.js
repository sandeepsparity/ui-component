import React from 'react';
import 'tslib';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import { ellipsify } from '../../atom/util/string.js';
import clsx from 'clsx';
import '../../tailwind.css.js';

var Slug = function (props) {
    var backgroundColor = props.backgroundColor || color('transparent');
    var borderColor = props.borderColor || color('black');
    var titleColor = props.titleColor || color('black');
    var labelColor = props.labelColor || color('black');
    return (React.createElement("div", { className: clsx('flex h-12 w-[376px] border-2 border-solid rounded-lg', props.className), style: { backgroundColor: backgroundColor, borderColor: borderColor } },
        props.icon && React.createElement("div", { className: 'my-auto ml-4' }, props.icon),
        props.title && (React.createElement("span", { className: 'my-auto font-bold ml-3', style: { color: titleColor } }, ellipsify(18, props.title))),
        props.label && (React.createElement("span", { className: 'my-auto ml-auto mr-4', style: { color: labelColor } }, ellipsify(22, props.label)))));
};

export { Slug as default };
