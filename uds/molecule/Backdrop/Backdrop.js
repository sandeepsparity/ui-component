import { __assign } from 'tslib';
import React from 'react';
import { Portal } from 'react-portal';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Backdrop = function (props) {
    var baseProps = useBaseProps(props);
    var onClick = function (event) {
        if (props.onClose && event.target === event.currentTarget) {
            event.preventDefault();
            props.onClose();
        }
    };
    return (React.createElement(React.Fragment, null, props.isOpen && (React.createElement(Portal, null,
        React.createElement("div", __assign({ "aria-label": 'backdrop-dialog', onClick: onClick, className: clsx('fixed flex justify-center items-center w-screen h-screen left-0 top-0 z-[999] bg-blue-308 backdrop-blur-sm', props.className) }, baseProps), props.children)))));
};

export { Backdrop as default };
