import React from 'react';
import Slug from '../Slug.js';
import StarIcon from '../../../atom/icon/StarIcon/StarIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Developed = function (props) {
    var title = 'Developed';
    var fill = !props.secondary ? color('white') : color('data-purple-70');
    var backgroundColor = !props.secondary ? color('data-purple-70') : '#F2E3FA';
    var borderColor = !props.secondary ? color('data-purple-50') : '#B08FD0';
    var titleColor = !props.secondary ? color('white') : color('data-purple-70');
    var labelColor = !props.secondary ? color('white') : color('data-purple-70');
    return (React.createElement(Slug, { icon: React.createElement(StarIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Developed as default };
