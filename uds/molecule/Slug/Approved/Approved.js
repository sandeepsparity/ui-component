import React from 'react';
import Slug from '../Slug.js';
import CheckmarkIcon from '../../../atom/icon/CheckmarkIcon/CheckmarkIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Approved = function (props) {
    var title = 'Approved';
    var fill = !props.secondary ? color('data-green') : color('success');
    var backgroundColor = !props.secondary ? color('data-green-20') : '#EAF3E6';
    var borderColor = color('data-green-50');
    var titleColor = !props.secondary ? color('dark-text') : color('success');
    var labelColor = !props.secondary ? color('dark-text') : color('success');
    return (React.createElement(Slug, { icon: React.createElement(CheckmarkIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Approved as default };
