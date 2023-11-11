import React from 'react';
import Slug from '../Slug.js';
import RefreshIcon from '../../../atom/icon/RefreshIcon/RefreshIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var ReadyForHandoff = function (props) {
    var title = 'Ready for Handoff';
    var fill = !props.secondary ? color('dark-text') : color('light-text');
    var backgroundColor = !props.secondary ? color('data-orange') : color('white');
    var borderColor = !props.secondary ? color('data-brown-50') : '#BCBCBC';
    var titleColor = !props.secondary ? color('dark-text') : color('light-text');
    var labelColor = color('dark-text');
    return (React.createElement(Slug, { icon: React.createElement(RefreshIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { ReadyForHandoff as default };
