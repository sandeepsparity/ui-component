import React from 'react';
import Slug from '../Slug.js';
import BacklogIcon from '../../../atom/icon/BacklogIcon/BacklogIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Backlog = function (props) {
    var title = 'Backlog';
    var fill = color('compliant-red');
    var backgroundColor = '#FCE8E9';
    var borderColor = '#F0A7AB';
    var titleColor = color('compliant-red');
    var labelColor = color('compliant-red');
    return (React.createElement(Slug, { icon: React.createElement(BacklogIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Backlog as default };
