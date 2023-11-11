import { __assign } from 'tslib';
import React from 'react';
import StepperHorizontal from './StepperHorizontal/StepperHorizontal.js';
import StepperVertical from './StepperVertical/StepperVertical.js';
import '../../tailwind.css.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Step = function (props) { return React.createElement("div", null, props.children); };
var Stepper = function (props) {
    var baseProps = useBaseProps(props);
    return !props.children ? (React.createElement(StepperHorizontal, __assign({}, baseProps, { step: props.step, steps: props.steps, className: props.className }))) : (React.createElement(StepperVertical, __assign({}, baseProps, { step: props.step, skippable: props.skippable, onChange: props.onChange, children: props.children, className: props.className })));
};
var Stepper$1 = Object.assign(Stepper, { Step: Step });

export { Stepper$1 as default };
