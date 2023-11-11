import React from 'react';
import 'react-dom/client';

var findByType = function (children, type) {
    var _a;
    return (_a = React.Children.map(children, function (child) {
        return React.isValidElement(child) &&
            typeof child.type !== 'string' &&
            child.type.name === type &&
            child;
    })) === null || _a === void 0 ? void 0 : _a.filter(function (child) { return !!child; });
};
var excludeByType = function (children, type) {
    var _a;
    return (_a = React.Children.map(children, function (child) {
        return React.isValidElement(child) &&
            (typeof child.type === 'string' || child.type.name !== type) &&
            child;
    })) === null || _a === void 0 ? void 0 : _a.filter(function (child) { return !!child; });
};
var findChildrenByType = function (children, type) {
    var _a;
    return (_a = findByType(children, type)) === null || _a === void 0 ? void 0 : _a.flatMap(function (_a) {
        var props = _a.props;
        return props.children;
    });
};
var getComponentByType = function (children, props, type) {
    var childrenToArray = React.Children.toArray(children);
    return childrenToArray
        .map(function (child) { return React.isValidElement(child) && React.cloneElement(child, props); })
        .find(function (child) {
        return React.isValidElement(child) && typeof child.type !== 'string' && child.type.name === type;
    });
};
var getChildrenCount = function (children, type) {
    var childrenToArray = React.Children.toArray(children);
    var child = childrenToArray
        .map(function (child) { return React.isValidElement(child) && React.cloneElement(child); })
        .find(function (child) {
        return React.isValidElement(child) && typeof child.type !== 'string' && child.type.name === type;
    });
    if (!child)
        return;
    return Array.isArray(child.props.children) ? child.props.children.length : 1;
};

export { excludeByType, findByType, findChildrenByType, getChildrenCount, getComponentByType };
