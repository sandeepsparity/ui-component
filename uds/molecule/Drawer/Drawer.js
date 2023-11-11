import { __assign } from 'tslib';
import React, { forwardRef, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import CloseIcon from '../../atom/icon/CloseIcon/CloseIcon.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import useHAF from '../../atom/hook/useHAF.js';

var Drawer = forwardRef(function (props, ref) {
    var baseProps = useBaseProps(props);
    var dialogRef = useHAF(ref).ref;
    return (React.createElement(Transition.Root, { show: props.isOpen, as: Fragment },
        React.createElement(Dialog, __assign({ ref: dialogRef, initialFocus: dialogRef, as: 'div', className: 'relative z-10', onClose: props.setOpen }, baseProps),
            !props.hideBackdrop && (React.createElement(Transition.Child, { as: Fragment, enter: 'ease-in-out duration-500', enterFrom: 'opacity-0', enterTo: 'opacity-100', leave: 'ease-in-out duration-500', leaveFrom: 'opacity-100', leaveTo: 'opacity-0' },
                React.createElement("div", { className: 'fixed inset-0 bg-blue-308 bg-opacity-75 transition-opacity' }))),
            React.createElement("div", { className: 'fixed inset-0 overflow-hidden' },
                React.createElement("div", { className: 'absolute inset-0 overflow-hidden' },
                    React.createElement("div", { "data-testid": 'dialogPanel-wrapper', className: clsx('pointer-events-none fixed flex', {
                            'inset-y-0 max-w-full left-0 pr-10': props.anchor === 'left',
                            'inset-y-0 max-w-full right-0 pl-10': props.anchor === 'right',
                            'inset-x-0 max-h-full top-0 pb-10': props.anchor === 'top',
                            'inset-x-0 max-h-full bottom-0 pt-10': props.anchor === 'bottom',
                        }) },
                        React.createElement(Transition.Child, { as: Fragment, enter: 'transform transition ease-in-out duration-500', enterFrom: clsx({
                                '-translate-x-full': props.anchor === 'left',
                                'translate-x-full': props.anchor === 'right',
                                '-translate-y-full': props.anchor === 'top',
                                'translate-y-full': props.anchor === 'bottom',
                            }), enterTo: clsx({
                                'translate-x-0': props.anchor === 'left' || props.anchor === 'right',
                                'translate-y-0': props.anchor === 'top' || props.anchor === 'bottom',
                            }), leave: 'transform transition ease-in-out duration-500', leaveFrom: clsx({
                                'translate-x-0': props.anchor === 'left' || props.anchor === 'right',
                                'translate-y-0': props.anchor === 'top' || props.anchor === 'bottom',
                            }), leaveTo: clsx({
                                '-translate-x-full': props.anchor === 'left',
                                'translate-x-full': props.anchor === 'right',
                                '-translate-y-full': props.anchor === 'top',
                                'translate-y-full': props.anchor === 'bottom',
                            }) },
                            React.createElement(Dialog.Panel, { className: 'pointer-events-auto w-full h-full' },
                                React.createElement("div", { "data-testid": 'dialogContent-wrapper', className: clsx('flex flex-col bg-gray-208', {
                                        'border-t': props.anchor === 'bottom',
                                        'border-r': !props.anchor || props.anchor === 'left',
                                        'border-b': props.anchor === 'top',
                                        'border-l': props.anchor === 'right',
                                        'border-gray-204': props.hideBackdrop && !props.hideBorder,
                                        'border-blue-308 border-opacity-75': !props.hideBackdrop || props.hideBorder,
                                    }), style: {
                                        width: props.anchor === 'left' || props.anchor === 'right'
                                            ? props.width || '476px'
                                            : '100vw',
                                        height: props.anchor === 'top' || props.anchor === 'bottom'
                                            ? props.height || '244px'
                                            : '100vh',
                                    } },
                                    props.customHeader || (React.createElement("div", { className: 'flex h-16 items-center justify-between pl-6 pr-7 border-solid border-b border-gray-204' },
                                        React.createElement("span", null, props.header),
                                        React.createElement(CloseIcon, { title: 'close-icon', className: 'cursor-pointer', onClick: function () { return props.setOpen(false); } }))),
                                    React.createElement("div", { "data-testid": 'children-wrapper', className: clsx('relative flex-1 overflow-y-scroll', {
                                            'pt-6 pl-6 pr-4': !props.noPadding,
                                        }) }, props.children))))))))));
});

export { Drawer as default };
