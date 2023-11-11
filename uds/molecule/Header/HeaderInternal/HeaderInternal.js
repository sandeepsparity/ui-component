import { __assign } from 'tslib';
import React from 'react';
import AlbertsonsLogo from '../../../atom/logo/AlbertsonsLogo/AlbertsonsLogo.js';
import Divider from '../../Divider/Divider.js';
import clsx from 'clsx';
import useBreakpoint from '../../../atom/hook/useBreakpoint.js';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import '../../../tailwind.css.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';

var HeaderInternal = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useBreakpoint(), ref = _a.ref, md = _a.md;
    return (React.createElement("div", __assign({ ref: ref }, baseProps, { className: clsx('flex items-center justify-between px-7 w-full h-[65px] max-h-[65px] bg-gray-207 drop-shadow-sm', props.className), "data-testid": 'Header-Internal' }),
        React.createElement("div", { className: 'flex items-center w-fit' },
            props.logo && React.createElement(AlbertsonsLogo, { className: 'mr-[14px]', width: 48, height: 28 }),
            props.title && (React.createElement("div", { className: 'flex flex-col' },
                React.createElement("span", { className: 'text-dark-text text-xs whitespace-nowrap font-extrabold tracking-[1.25px] uppercase select-none' }, props.title),
                !md && (React.createElement("span", { className: 'text-dark-text text-xs whitespace-nowrap font-bold select-none' }, props.subtitle)))),
            md && props.title && props.subtitle && (React.createElement(Divider, { className: 'mx-4 border-dashed', height: 34, color: color('blue-304') })),
            md && props.subtitle && (React.createElement("span", { className: 'text-dark-text text-sm whitespace-nowrap font-normal select-none' }, props.subtitle))),
        React.createElement("div", { className: 'flex items-center w-fit h-full' }, props.children)));
};

export { HeaderInternal as default };
