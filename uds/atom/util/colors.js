import colors from '../../foundation/color/index.js';

var color = function (key) {
    return (colors === null || colors === void 0 ? void 0 : colors[key]) || '#000000';
};
var expandColor = function (color) {
    if (color === void 0) { color = ""; }
    var regex = /^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i;
    if (!regex.test(color)) {
        return '';
    }
    else if (color.length === 7) {
        return color;
    }
    return "#".concat(color.slice(1).split('').map(function (hex) { return hex.repeat(2); }));
};

export { color, expandColor };
