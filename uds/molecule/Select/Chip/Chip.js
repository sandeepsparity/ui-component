import React from 'react';
import { X } from 'lucide-react';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import Label from '../../../atom/component/Label/Label.js';
import Tag from '../../Tag/Tag.js';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var Chip = function (props) {
    return (React.createElement(Tag, { disabled: props.disabled, className: clsx('h-fit my-[2px] mr-1 rounded-md truncate', { 'cursor-pointer': !props.disabled }), backgroundColor: color('blue-305'), borderColor: color('blue-305'), backgroundColorAlt: color('blue-304'), borderColorAlt: color('blue-304'), onClick: props.onClick },
        React.createElement("div", { className: 'flex items-center justify-between mx-2' },
            React.createElement(Label, { label: props.label, className: clsx('mt-[2px] text-[13px] font-bold truncate', {
                    'text-dark-text': !props.disabled,
                    'text-disabled-text': props.disabled,
                }) }),
            React.createElement(X, { className: 'ml-1 min-w-[16px]', size: 16, strokeWidth: 1.5, color: props.disabled ? color('disabled-text') : color('dark-text') }))));
};

export { Chip as default };
