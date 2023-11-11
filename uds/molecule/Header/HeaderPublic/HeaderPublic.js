import { __assign } from 'tslib';
import React from 'react';
import '../../../tailwind.css.js';
import AlbertsonsFullLogo from '../../../atom/logo/AlbertsonsFullLogo/AlbertsonsFullLogo.js';
import clsx from 'clsx';
import useBaseProps from '../../../atom/hook/useBaseProps.js';

var HeaderPublic = function (props) {
    var baseProps = useBaseProps(props);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx('flex items-center justify-between px-7 w-full h-[76px] bg-gray-207 drop-shadow-md', props.className), "data-testid": 'Header-public' }),
        React.createElement(AlbertsonsFullLogo, { className: 'my-auto col-span-2' }),
        React.createElement("div", { className: 'flex items-center w-fit h-full' }, props.children)));
};

export { HeaderPublic as default };
