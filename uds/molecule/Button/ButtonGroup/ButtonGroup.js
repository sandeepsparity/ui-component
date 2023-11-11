import { __assign } from 'tslib';
import React, { useEffect } from 'react';
import '../../../foundation/color/index.js';
import '../../../atom/util/dayjs.js';
import { findByType } from '../../../atom/util/react.js';
import Button from '../Button.js';
import Divider from '../../Divider/Divider.js';
import clsx from 'clsx';
import useBaseProps from '../../../atom/hook/useBaseProps.js';
import '../../../tailwind.css.js';

var ButtonGroup = function (props) {
    var baseProps = useBaseProps(props);
    var _a = React.useState(props.value || -1), selection = _a[0], setSelection = _a[1];
    var buttons = findByType(props.children, Button.name);
    var onChange = function (selected, callback) {
        var _a;
        setSelection(selected);
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, selected);
        callback === null || callback === void 0 ? void 0 : callback();
    };
    useEffect(function () {
        if (typeof props.value === 'number' && props.value !== selection) {
            setSelection(props.value);
        }
    }, [props.value]);
    return (React.createElement("div", { className: props.className },
        React.createElement("div", { className: clsx('flex', { 'rounded-lg w-fit border border-solid border-gray-204': props.variant === 'secondary' }) }, React.Children.map(buttons, function (button, idx) {
            var _a, _b, _c, _d, _e, _f, _g;
            return (React.createElement(React.Fragment, null,
                React.createElement("button", __assign({}, baseProps, { name: (_a = button === null || button === void 0 ? void 0 : button.props) === null || _a === void 0 ? void 0 : _a.name, id: button === null || button === void 0 ? void 0 : button.props.id, onClick: function () { var _a, _b; return (((_a = button === null || button === void 0 ? void 0 : button.props) === null || _a === void 0 ? void 0 : _a.disabled) ? {} : onChange(idx, (_b = button === null || button === void 0 ? void 0 : button.props) === null || _b === void 0 ? void 0 : _b.onClick)); }, className: clsx({
                        'border-0 first:rounded-bl last:rounded-br font-semibold text-base non-italic pt-3.5 px-6 pb-2.5': props.variant === 'secondary',
                        'border border-solid border-gray-204 pt-1.5 px-4 pb-0.5 font-extrabold text-sm non-italic': !props.variant || props.variant !== 'secondary',
                        'border-b-4 border-b-brand-light': selection === idx && !((_b = button === null || button === void 0 ? void 0 : button.props) === null || _b === void 0 ? void 0 : _b.disabled),
                        'border-b-4 border-b-transparent': selection !== idx && !((_c = button === null || button === void 0 ? void 0 : button.props) === null || _c === void 0 ? void 0 : _c.disabled),
                        'cursor-default text-disabled-text': (_d = button === null || button === void 0 ? void 0 : button.props) === null || _d === void 0 ? void 0 : _d.disabled,
                        'text-dark-text-201 hover:bg-blue-307 active:bg-blue-305 focus:bg-blue-306': !((_e = button === null || button === void 0 ? void 0 : button.props) === null || _e === void 0 ? void 0 : _e.disabled),
                    }, props.clazz, (_f = button === null || button === void 0 ? void 0 : button.props) === null || _f === void 0 ? void 0 : _f.className) }), (_g = button === null || button === void 0 ? void 0 : button.props) === null || _g === void 0 ? void 0 : _g.children),
                buttons && idx !== buttons.length - 1 && props.variant === 'secondary' && (React.createElement(Divider, { height: 24, color: 'gray-204' }))));
        }))));
};

export { ButtonGroup as default };
