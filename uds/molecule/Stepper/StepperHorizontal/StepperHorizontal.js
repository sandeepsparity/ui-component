import { __assign } from 'tslib';
import React from 'react';
import { Check } from 'lucide-react';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import clsx from 'clsx';
import '../../../tailwind.css.js';
import useBaseProps from '../../../atom/hook/useBaseProps.js';

var StepperHorizontal = function (props) {
    var _a;
    var baseProps = useBaseProps(props);
    var step = props.step || 0;
    return (React.createElement("div", __assign({ className: clsx('flex items-center justify-between', props.className) }, baseProps), (_a = props.steps) === null || _a === void 0 ? void 0 : _a.map(function (label, idx) { return (React.createElement(React.Fragment, { key: idx },
        idx > 0 && (React.createElement("div", { className: clsx('relative w-full h-[3px] -top-[10.5px]', {
                'bg-blue-305': step >= idx,
                'bg-gray-neutral-200': step < idx,
            }) })),
        React.createElement("div", { className: 'flex flex-col items-center justify-center w-6' },
            React.createElement("div", { className: clsx('flex items-center justify-center w-6 h-6 rounded-full', {
                    'border-2 border-brand-light': step === idx,
                    'bg-brand-light': step > idx,
                    'border-2 border-gray-neutral-200': step < idx,
                }) },
                step > idx && React.createElement(Check, { size: 16, color: color('white') }),
                step <= idx && (React.createElement("span", { className: clsx('text-[14px] font-extrabold select-none', {
                        'text-brand-light': step === idx,
                        'text-gray-neutral-300': step !== idx,
                    }) }, 1 + idx))),
            React.createElement("span", { className: clsx('mt-1 text-[12px] text-light-text select-none whitespace-nowrap', {
                    'font-extrabold': step === idx,
                }) }, label || "Step ".concat(1 + idx))))); })));
};

export { StepperHorizontal as default };
