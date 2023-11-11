import { __rest, __assign } from 'tslib';
import React, { useEffect } from 'react';
import useHAF from '../../atom/hook/useHAF.js';
import { Check, Minus } from 'lucide-react';
import clsx from 'clsx';
import '../../tailwind.css.js';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Checkbox = function (props) {
    var baseProps = useBaseProps(props);
    var checked = props.checked, className = props.className, disabled = props.disabled, dense = props.dense, label = props.label, children = props.children, onChange = props.onChange, error = props.error, indeterminate = props.indeterminate, rest = __rest(props, ["checked", "className", "disabled", "dense", "label", "children", "onChange", "error", "indeterminate"]);
    var _a = React.useState(!!checked), selected = _a[0], setSelected = _a[1];
    var _b = useHAF(), hover = _b.hover, ref = _b.ref, focus = _b.focus;
    var size = function () { return (dense ? 'w-4 h-4' : 'w-5 h-5'); };
    var background = function () {
        if (disabled) {
            return 'bg-gray-cool-100';
        }
        else if (selected || indeterminate) {
            return 'bg-brand';
        }
        else {
            return 'bg-white';
        }
    };
    var border = function () {
        if (disabled) {
            return clsx('border-[1.5px] border-disabled rounded-sm');
        }
        else if (error) {
            return 'border-[1.5px] border-error rounded-sm';
        }
        else if (focus) {
            return clsx('border-gray-204 rounded-sm', dense ? 'border-[3px]' : 'border-4');
        }
        return clsx('border-[1.5px] rounded-sm', selected ? 'border-brand' : 'border-light-text');
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
    useEffect(function () {
        if (!!checked !== selected) {
            setSelected(!!checked);
        }
    }, [checked, indeterminate]);
    var fill = function () {
        if (disabled) {
            return color('disabled');
        }
        else if (selected || indeterminate) {
            return color('white');
        }
        else {
            return color('gray-203');
        }
    };
    return (React.createElement("div", { className: className, "data-testid": 'checkbox-id' },
        React.createElement("label", { className: clsx('flex items-center w-fit', { 'cursor-pointer': !disabled }) },
            React.createElement("input", __assign({}, rest, baseProps, { type: 'checkbox', checked: selected, disabled: disabled, onChange: handleChange, className: 'hidden' })),
            React.createElement("div", { ref: ref, tabIndex: 0, className: clsx('flex items-center justify-center', size(), background(), border()) }, (selected || indeterminate || (hover && !disabled)) && (React.createElement(React.Fragment, null,
                (selected || (hover && !indeterminate)) && (React.createElement(Check, { size: dense ? 12 : 14, strokeWidth: 4, color: fill() })),
                !selected && indeterminate && (React.createElement(Minus, { size: dense ? 12 : 14, strokeWidth: 4, color: fill() }))))),
            (children || label) && (React.createElement("div", { className: 'ml-2' }, children ||
                (label && (React.createElement("div", { className: clsx('align-middle select-none whitespace-nowrap truncate', {
                        'text-sm leading-[18px] max-h-4': dense,
                        'leading-5 max-h-5': !dense,
                        'text-dark-text': !disabled,
                        'text-disabled-text': disabled,
                    }) }, label)))))),
        error && (React.createElement("div", { className: 'text-sm leading-4 font-bold text-error mt-1 whitespace-nowrap select-none truncate' }, error))));
};

export { Checkbox as default };
