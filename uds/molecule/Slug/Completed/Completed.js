import React from 'react';
import Slug from '../Slug.js';
import StarFilledIcon from '../../../atom/icon/StarFilled/StarFilledIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Completed = function (props) {
    var title = 'Completed';
    var fill = color('data-orange');
    var backgroundColor = color('dark-text');
    var borderColor = color('data-light-gray-50');
    var titleColor = color('data-orange');
    var labelColor = color('data-orange-20');
    return (React.createElement(Slug, { icon: React.createElement(StarFilledIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Completed as default };
