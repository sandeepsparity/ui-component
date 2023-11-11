import React from 'react';
import Slug from '../Slug.js';
import CircleCloseIcon from '../../../atom/icon/CircleCloseIcon/CircleCloseIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Remove = function (props) {
    var title = 'Remove';
    var fill = color('white');
    var backgroundColor = color('error');
    var borderColor = color('data-magenta-70');
    var titleColor = color('white');
    var labelColor = color('white');
    return (React.createElement(Slug, { icon: React.createElement(CircleCloseIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Remove as default };
