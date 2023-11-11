import { __assign } from 'tslib';
import React from 'react';
import { Check, Eye, Pencil } from 'lucide-react';
import { Transition } from '@headlessui/react';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import { findByType } from '../../../atom/util/react.js';
import Divider from '../../Divider/Divider.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var StepperVertical = function (props) {
    var _a, _b;
    var baseProps = useBaseProps(props);
    var step = props.step || 0;
    var count = ((_a = findByType(props.children, 'Step')) === null || _a === void 0 ? void 0 : _a.length) || 0;
    var onClick = function (stepClicked) {
        if (props.onChange && (stepClicked < step || props.skippable && stepClicked > step)) {
            props.onChange(stepClicked);
        }
    };
    var label = function (tag) {
        switch (tag) {
            case 'edit': return (React.createElement("div", { className: 'flex items-center ml-4' },
                React.createElement(Pencil, { size: 16, strokeWidth: 2, color: color('brand') }),
                React.createElement("span", { className: 'ml-3 font-semibold text-brand select-none' }, "Edit")));
            case 'view': return (React.createElement("div", { className: 'flex items-center ml-4' },
                React.createElement(Eye, { size: 16, strokeWidth: 2, color: color('brand') }),
                React.createElement("span", { className: 'ml-3 font-semibold text-brand select-none' }, "View")));
            default: return tag;
        }
    };
    var renderIcon = function (idx, tag) {
        if (idx === step || idx > step && !props.skippable) {
            return null;
        }
        return label(tag || idx < step && !props.skippable && 'edit');
    };
    return (React.createElement("div", __assign({}, baseProps, { className: clsx('flex flex-col items-start justify-between', props.className) }), (_b = findByType(props.children, 'Step')) === null || _b === void 0 ? void 0 : _b.map(function (child, idx) {
        var _a, _b, _c, _d, _e;
        return (React.createElement("div", { id: child.props.id, "data-testid": child.props.id, className: clsx('min-w-full', { 'hover:cursor-pointer': idx < step || props.skippable && idx > step }), key: idx, onClick: function () { return onClick(idx); } },
            React.createElement("div", { className: 'flex items-center' },
                React.createElement("div", { className: clsx('flex items-center justify-center w-6 h-6 rounded-full', {
                        'border-2 border-brand-light': step === idx,
                        'bg-brand-light': step > idx,
                        'border-2 border-gray-neutral-200': step < idx,
                    }) },
                    idx < step && React.createElement(Check, { size: 16, color: color('white') }),
                    idx >= step && (React.createElement("span", { className: clsx('text-[14px] font-extrabold select-none', {
                            'text-brand-light': step === idx,
                            'text-gray-neutral-300': step !== idx,
                        }) }, 1 + idx))),
                React.createElement("div", { className: 'flex items-center justify-between w-full' },
                    React.createElement("div", { className: 'flex items-center' },
                        React.createElement("span", { className: clsx('ml-4 select-none whitespace-nowrap', {
                                'font-bold': step >= idx,
                                'text-brand-light': step === idx,
                                'text-light-text': step !== idx,
                            }) }, ((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.label) || "Step ".concat(1 + idx)),
                        ((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.sublabel) && (React.createElement(React.Fragment, null,
                            React.createElement(Divider, { className: 'ml-4', color: color('gray-204'), width: 1, height: 24 }),
                            React.createElement("span", { className: 'ml-4 text-[14px] text-light-text select-none whitespace-nowrap' }, ((_c = child === null || child === void 0 ? void 0 : child.props) === null || _c === void 0 ? void 0 : _c.sublabel) || "Step ".concat(1 + idx))))),
                    renderIcon(idx, child.props.tag),
                    idx === step && ((_d = child === null || child === void 0 ? void 0 : child.props) === null || _d === void 0 ? void 0 : _d.required) && (React.createElement("div", null,
                        React.createElement("span", { className: 'text-sm italic text-error' }, "*"),
                        React.createElement("span", { className: 'text-sm italic' }, "required fields"))))),
            React.createElement("div", { className: clsx('flex ml-[10.5px] min-h-[28px]', {
                    'border-l-[3px]': count > 1 && 1 + idx !== count,
                    'border-l-brand-light': idx < step,
                    'border-l-blue-305': idx === step,
                    'border-l-gray-neutral-200': idx > step,
                }) },
                React.createElement("div", { className: clsx('ml-[26px] w-full h-full border-gray-204 transition-border duration-200', {
                        'mt-[14px] border-t': idx !== step && 1 + idx !== count,
                        'mb-[14px] border-b': idx === step && 1 + idx !== count,
                    }) },
                    React.createElement(Transition, { show: idx === step, enter: 'transition-height overflow-hidden ease-in-out duration-500', enterFrom: 'max-h-0 opacity-0', enterTo: 'opacity-100', leave: 'transition-height overflow-hidden ease-in-out duration-500', leaveFrom: 'opacity-100', leaveTo: 'max-h-0 opacity-0' }, (_e = child === null || child === void 0 ? void 0 : child.props) === null || _e === void 0 ? void 0 : _e.children)))));
    })));
};

export { StepperVertical as default };
