import React from 'react';
import Slug from '../Slug.js';
import ArchiveIcon from '../../../atom/icon/ArchiveIcon/ArchiveIcon.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var Archive = function (props) {
    var title = 'Archive';
    var fill = !props.secondary ? color('compliant-brown') : color('compliant-text');
    var backgroundColor = !props.secondary ? color('data-cinnamon-30') : '#ECECEC';
    var borderColor = !props.secondary ? color('data-brown') : '#BCBCBC';
    var titleColor = !props.secondary ? color('dark-text') : color('compliant-text');
    var labelColor = !props.secondary ? color('dark-text') : color('compliant-text');
    return (React.createElement(Slug, { icon: React.createElement(ArchiveIcon, { fill: fill }), title: title, label: props.label, backgroundColor: backgroundColor, borderColor: borderColor, titleColor: titleColor, labelColor: labelColor, className: props.className }));
};

export { Archive as default };
