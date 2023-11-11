import React from 'react';
import Slug from '../Slug.js';
import VisibilityIcon from '../../../atom/icon/VisibilityIcon/VisibilityIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Review = function (props) {
    var title = 'Review';
    var fill = color('brand');
    var backgroundColor = !props.secondary ? color('blue-306') : '#E1EAFD';
    var borderColor = color('data-brand-50');
    var titleColor = !props.secondary ? color('dark-text') : color('brand');
    var labelColor = !props.secondary ? color('dark-text') : color('brand');
    return (React.createElement(Slug, { icon: React.createElement(VisibilityIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Review as default };
