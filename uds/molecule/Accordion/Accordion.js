import { __rest, __assign } from 'tslib';
import React from 'react';
import AccordionItem from './AccordionItem/AccordionItem.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

var accordionStyles = cva(['py-[1px]'], {
    variants: {
        variant: {
            dark: [
                'bg-brand-dark',
                'bg-gradient-to-b',
                'from-brand-dark',
                'via-brand-dark/70',
                'to-black/30',
                'px-2',
            ],
            light: ['bg-white', 'bg-none', 'border', 'border-[#C8DAEB]', 'rounded', 'px-0'],
        },
    },
    defaultVariants: {
        variant: 'dark',
    },
});
var Accordion = function (props) {
    var variant = props.variant, children = props.children, rest = __rest(props, ["variant", "children"]);
    var baseProps = useBaseProps(props);
    return (React.createElement("div", __assign({}, baseProps, { className: clsx(accordionStyles({ variant: variant }), props.className) }), React.Children.map(children, function (child) { return (React.createElement(AccordionItem, __assign({}, child === null || child === void 0 ? void 0 : child.props, rest, { variant: variant }))); })));
};

export { Accordion as default };
