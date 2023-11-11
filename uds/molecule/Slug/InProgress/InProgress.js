import React from 'react';
import Slug from '../Slug.js';
import EditIcon from '../../../atom/icon/EditIcon/EditIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var InProgress = function (props) {
    var title = !props.secondary ? 'In Progress' : 'Work in Progress';
    var fill = !props.secondary ? color('compliant-red') : color('data-cinnamon');
    var backgroundColor = !props.secondary ? color('data-orange-30') : '#FFF6D7';
    var borderColor = !props.secondary ? color('data-brown-50') : '#F1C34D';
    var titleColor = !props.secondary ? color('dark-text') : color('data-cinnamon');
    var labelColor = !props.secondary ? color('compliant-brown') : color('data-cinnamon');
    return (React.createElement(Slug, { icon: React.createElement(EditIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { InProgress as default };
