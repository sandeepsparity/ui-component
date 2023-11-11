import React from 'react';
import '../../tailwind.css.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

var SkeletonLoader = function (props) {
    var className = props.className, count = props.count, height = props.height, circle = props.circle, wrapper = props.wrapper, skeletonTheme = props.skeletonTheme, baseColor = props.baseColor, highlightColor = props.highlightColor, width = props.width, borderRadius = props.borderRadius, inline = props.inline, duration = props.duration, direction = props.direction, enableAnimation = props.enableAnimation;
    return skeletonTheme ? (React.createElement(SkeletonTheme, { baseColor: baseColor, highlightColor: highlightColor, width: width, borderRadius: borderRadius, inline: inline, duration: duration, direction: direction, enableAnimation: enableAnimation },
        React.createElement(Skeleton, { count: count, height: height, circle: circle, wrapper: wrapper, className: className, containerTestId: 'skeletonLoader' }))) : (React.createElement(Skeleton, { count: props.count, height: props.height, circle: props.circle, wrapper: props.wrapper, className: props.className, containerTestId: 'skeletonLoader' }));
};

export { SkeletonLoader as default };
