import { __assign } from 'tslib';
import React, { useState, useEffect } from 'react';
import CloseThinIcon from '../../atom/icon/CloseThinIcon/CloseThinIcon.js';
import clsx from 'clsx';
import Backdrop from '../Backdrop/Backdrop.js';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Modal = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(false), isOpen = _a[0], setOpen = _a[1];
    var style = function () { return (props.variant === 'dark' ? 'bg-brand-dark' : 'bg-gray-207'); };
    var fill = function () { return (props.variant === 'dark' ? '#FFF' : '#000'); };
    var iconSize = !props.iconSmall ? 24.5 : 20;
    var close = function () {
        setOpen(false);
        if (typeof props.onClose === 'function') {
            props.onClose();
        }
    };
    var renderProps = { close: close };
    useEffect(function () {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'visible';
        }
        setOpen(props.isOpen);
    }, [props.isOpen]);
    return (React.createElement(Backdrop, __assign({}, baseProps, { isOpen: isOpen, onClose: props.onClose }),
        React.createElement("div", { className: clsx('relative rounded-2xl', style(), props.className), style: {
                width: props.width,
                minWidth: props.minWidth || 800,
                maxWidth: props.maxWidth || '90vw',
                height: props.height,
                minHeight: props.minHeight || 316,
                maxHeight: props.maxHeight || '90vh',
            }, "data-testid": 'modal-id' }, typeof props.children === 'function' ? (props.children(renderProps)) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'absolute right-0 px-[21.5px] mt-[22px]', "data-testid": 'close-icon-div-id' },
                React.createElement(CloseThinIcon, { className: 'cursor-pointer', onClick: props.onClose, width: iconSize, height: iconSize, fill: fill() })),
            props.children)))));
};

export { Modal as default };
