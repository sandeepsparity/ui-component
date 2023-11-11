var ellipsify = function (length, str) {
    if (!str || !length) {
        return '';
    }
    return str.length <= length ? str : "".concat(str.slice(0, Math.max(length - 3, 0)), "...");
};
var initials = function (name) {
    var _a, _b, _c;
    if (!name) {
        return '';
    }
    var _d = ((_a = name === null || name === void 0 ? void 0 : name.replace(/\s+/g, ' ')) === null || _a === void 0 ? void 0 : _a.split(' ')) || [], first = _d[0], last = _d[1];
    return "".concat(((_b = first === null || first === void 0 ? void 0 : first.charAt(0)) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || '').concat(((_c = last === null || last === void 0 ? void 0 : last.charAt(0)) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || '');
};

export { ellipsify, initials };
