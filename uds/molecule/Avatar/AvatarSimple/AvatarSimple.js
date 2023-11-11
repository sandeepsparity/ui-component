import { __assign } from 'tslib';
import React from 'react';
import '../../../foundation/color/index.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import { initials } from '../../../atom/util/string.js';
import '../../../tailwind.css.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';
import clsx from 'clsx';

var AvatarSimple = function (props) {
    var baseProps = useBaseProps(props);
    return (React.createElement("div", __assign({}, baseProps, { className: props.className, onClick: props.onClick }),
        React.createElement("div", { className: clsx('rounded-full drop-shadow-lg hover:cursor-pointer border-solid border-2 border-white', {
                'w-8 h-8': props.small,
                'w-10 h-10': !props.small,
            }) },
            props.src && (React.createElement("img", { className: 'w-full h-full rounded-full content-center', src: props.src, alt: 'Avatar' })),
            props.name && (React.createElement("div", { className: clsx('w-full h-full rounded-full bg-gray-203 select-none text-center text-white pt-[2px] font-bold flex items-center justify-center', {
                    'text-sm': props.small,
                    'text-md': !props.small,
                }) }, initials(props.name))))));
};

export { AvatarSimple as default };
