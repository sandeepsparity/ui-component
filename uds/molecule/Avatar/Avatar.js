import { __rest, __assign } from 'tslib';
import React from 'react';
import AvatarStatus from './AvatarStatus/AvatarStatus.js';
import AvatarSimple from './AvatarSimple/AvatarSimple.js';
import AvatarFull from './AvatarFull/AvatarFull.js';
import Popover from '../Popover/Popover.js';

var Avatar = function (props) {
    var status = props.status, src = props.src, name = props.name, full = props.full, rest = __rest(props, ["status", "src", "name", "full"]);
    var withPopover = function (WrappedComponent) {
        if (props.children) {
            return (React.createElement(Popover, null,
                React.createElement(Popover.Anchor, null, WrappedComponent),
                React.createElement(Popover.Content, null, function (renderProps) {
                    return typeof props.children === 'function' ? props.children(renderProps) : props.children;
                })));
        }
        else {
            return WrappedComponent;
        }
    };
    if (full && name) {
        return withPopover(React.createElement(AvatarFull, __assign({ status: status, src: src, name: name }, rest)));
    }
    else if (src && (!status || status === 'none')) {
        return withPopover(React.createElement(AvatarSimple, __assign({ src: src }, rest)));
    }
    else if (name && (!status || status === 'none')) {
        return withPopover(React.createElement(AvatarSimple, __assign({ name: name }, rest)));
    }
    else if (src && status) {
        return withPopover(React.createElement(AvatarStatus, __assign({ status: status, src: src }, rest)));
    }
    else if (name && status) {
        return withPopover(React.createElement(AvatarStatus, __assign({ status: status, name: name }, rest)));
    }
    else {
        return null;
    }
};

export { Avatar as default };
