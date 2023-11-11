import React from 'react';
import clsx from 'clsx';
import '../../tailwind.css.js';
import colors from '../../foundation/color/colors.json.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import TimelineItem from './TimelineItem/TimelineItem.js';

var Timeline = function (props) {
    var showSkeleton = function () {
        return (React.createElement("div", { className: 'timeline-skeleton py-2 px-1' }, (function () {
            var entriesToShow = 5;
            var elements = [];
            for (var i = 0; i < entriesToShow; i++) {
                elements.push(React.createElement("div", { key: i, className: 'flex mb-2 mx-6' },
                    React.createElement("div", { className: 'flex flex-col items-center w-8 animate-pulse', key: i },
                        React.createElement("div", { className: 'w-8 h-8 rounded-full bg-gray-cool-200' }),
                        React.createElement("div", { className: 'w-0.5 h-8 mt-2 flex-grow bg-[#CFE0ED]' })),
                    React.createElement("div", { className: clsx('w-full ml-4 pt-2', i != entriesToShow - 1 ? 'border-b' : '') },
                        React.createElement(SkeletonTheme, { baseColor: colors['gray-cool-200'], highlightColor: colors['gray-cool-100'] },
                            React.createElement(Skeleton, { count: 2 })))));
            }
            return elements;
        })()));
    };
    var showContent = function (c) {
        return (React.createElement("div", { className: 'mx-6' },
            React.createElement("div", { className: clsx(props.loading ? 'opacity-30' : '') }, c)));
    };
    return (React.createElement("div", { className: clsx('pt-1 pb-8', props.className) }, props.loading ? showSkeleton() : showContent(props.children)));
};
var Timeline$1 = Object.assign(Timeline, { Item: TimelineItem });

export { Timeline$1 as default };
