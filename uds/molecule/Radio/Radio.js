import { __rest, __assign } from 'tslib';
import React, { useEffect } from 'react';
import RadioGroup from './RadioGroup/RadioGroup.js';
import useHAF from '../../atom/hook/useHAF.js';
import clsx from 'clsx';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Radio = function (props) {
    var baseProps = useBaseProps(props);
    var checked = props.checked, className = props.className, children = props.children, label = props.label, dense = props.dense, disabled = props.disabled, onChange = props.onChange, error = props.error, rest = __rest(props, ["checked", "className", "children", "label", "dense", "disabled", "onChange", "error"]);
    var _a = React.useState(!!checked), selected = _a[0], setSelected = _a[1];
    var _b = useHAF(), hover = _b.hover, ref = _b.ref, focus = _b.focus;
    var size = function () { return (dense ? 'w-4 h-4' : 'w-5 h-5'); };
    var background = function () { return (disabled ? 'bg-gray-cool-100' : 'bg-white'); };
    var border = function () {
        if (disabled) {
            return clsx('border-[1.5px] border-disabled rounded-full');
        }
        else if (error) {
            return 'border-[1.5px] border-error rounded-full';
        }
        else if (focus) {
            return clsx('border-gray-204 rounded-full', dense ? 'border-[3px]' : 'border-4');
        }
        return clsx('border-[1.5px] rounded-full', selected ? 'border-brand' : 'border-light-text');
    };
    var handleChange = function (event) {
        var checkedValue = event.target.checked;
        if (!disabled) {
            setSelected(checkedValue);
            if (onChange && checkedValue !== checked) {
                onChange(event);
            }
        }
    };
    var fill = function () {
        if (disabled) {
            return 'after:bg-disabled';
        }
        else if (selected) {
            return 'after:bg-brand';
        }
        else {
            return 'after:bg-gray-203';
        }
    };
    var radioAfterClasses = function () {
        if ((hover && !props.disabled) || selected) {
            return clsx("after:content[''] after:rounded-full", fill(), props.dense ? 'after:w-2 after:h-2' : 'after:w-[10px] after:h-[10px]');
        }
        return '';
    };
    useEffect(function () {
        if (!!checked !== selected) {
            setSelected(!!checked);
        }
    }, [checked]);
    return (React.createElement("div", { className: className },
        React.createElement("label", { ref: ref, tabIndex: 0, className: clsx('space-x-2 inline-flex', { 'cursor-pointer': !disabled }) },
            React.createElement("input", __assign({}, rest, baseProps, { type: 'radio', checked: selected, disabled: disabled, onChange: handleChange, className: 'invisible' })),
            React.createElement("span", { "data-testid": 'radio-check', className: clsx('flex items-center justify-center', size(), background(), border(), radioAfterClasses()) }),
            (children || label) && (React.createElement("div", { className: 'ml-2' }, children || (React.createElement("div", { className: clsx('align-middle select-none whitespace-nowrap truncate', {
                    'text-sm leading-[18px] max-h-4': dense,
                    'leading-5 max-h-5': !dense,
                    'text-dark-text': !disabled,
                    'text-disabled-text': disabled,
                }) }, label)))))));
};
var Radio$1 = Object.assign(Radio, { Group: RadioGroup });

export { Radio$1 as default };
