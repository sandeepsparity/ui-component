import { __assign } from 'tslib';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import useBaseProps from '../../atom/hook/useBaseProps.js';

var Image = function (props) {
    var baseProps = useBaseProps(props);
    var _a = useState(false), selected = _a[0], setSelected = _a[1];
    useEffect(function () {
        if (props.selectable && !!props.isSelected !== selected) {
            setSelected(!!props.isSelected);
        }
    }, [props.isSelected]);
    var onClick = function () {
        if (props.selectable) {
            setSelected(typeof props.isSelected === 'boolean' ? props.isSelected : !selected);
            if (props.onClick && typeof props.onClick == 'function') {
                props.onClick(!selected);
            }
        }
    };
    var height = function () {
        switch (props.size) {
            case 'xl':
                return 'h-64';
            case 'lg':
                return 'h-[220px]';
            case 'md':
                return 'h-[102px]';
            case 'sm':
                return 'h-14';
            case 'xs':
                return 'h-8';
            default:
                return '';
        }
    };
    var width = function () {
        switch (props.size) {
            case 'xl':
                return 'w-64';
            case 'lg':
                return 'w-[220px]';
            case 'md':
                return 'w-[102px]';
            case 'sm':
                return 'w-14';
            case 'xs':
                return 'w-8';
            default:
                return '';
        }
    };
    var border = function () {
        if (props.selectable && selected) {
            return 'border-brand';
        }
        return 'border-gray-204';
    };
    var borderRadius = function () {
        if (props.variant === 'circle') {
            return 'rounded-full';
        }
        return 'rounded';
    };
    var iconDiameter = function (diameter) {
        if (typeof diameter === 'number') {
            return "".concat(diameter, "px");
        }
        switch (props.size) {
            case 'xl':
                return '30px';
            case 'lg':
                return '24px';
            case 'md':
                return '18px';
            case 'sm':
                return '14px';
            case 'xs':
                return '12px';
            default:
                return '14px';
        }
    };
    var marginLeftIcon = function (iconDimension) {
        if (typeof iconDimension === 'number') {
            return "ml-[-".concat(iconDimension + 5, "px]");
        }
        switch (props.size) {
            case 'xl':
                return 'ml-[-35px]';
            case 'lg':
                return 'ml-[-29px]';
            case 'md':
                return 'ml-[-23px]';
            case 'sm':
                return 'ml-[-19px]';
            case 'xs':
                return 'ml-[-17px]';
            default:
                return 'ml-[-19px]';
        }
    };
    var styledMarginLeftIcon = function () {
        if (typeof props.iconDiameter === 'number') {
            return "-".concat(props.iconDiameter + 6, "px");
        }
    };
    return (React.createElement("div", { className: clsx('flex overflow-hidden w-fit', border(), borderRadius(), props.className, {
            'border-2': !props.hideBorder,
        }), style: __assign({ backgroundImage: props.backgroundImage, borderImage: props.borderImage }, (props.hideBorder ? {} : { borderWidth: props.borderWidth })), "data-testid": 'image-container' },
        React.createElement("img", __assign({}, baseProps, { src: props.src, alt: props.alt, className: clsx('object-contain', height(), width(), {
                'opacity-[0.2]': props.faded,
                'cursor-pointer': props.selectable,
            }), onClick: onClick, style: { height: props.height, width: props.width } })),
        props.selectable && props.showSelectIcon && props.variant !== 'circle' && (React.createElement("div", { className: clsx('cursor-pointer mt-[5px]', marginLeftIcon(props.iconDiameter)), style: {
                marginLeft: styledMarginLeftIcon(),
            }, "data-testid": 'image-select-icon' }, selected ? (React.createElement(CheckCircle2, { fill: color('compliant-green'), stroke: 'white', strokeWidth: '2', height: iconDiameter(props.iconDiameter), width: iconDiameter(props.iconDiameter), onClick: onClick })) : (React.createElement(Circle, { stroke: color('gray-204'), strokeWidth: '2', height: iconDiameter(props.iconDiameter), width: iconDiameter(props.iconDiameter), onClick: onClick }))))));
};

export { Image as default };
