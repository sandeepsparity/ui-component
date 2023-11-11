import { __assign } from 'tslib';
import { useState, useMemo } from 'react';
import { toMap } from '../util/reducer.js';

var useSelection = function (_key) {
    var _a = useState({}), _selection = _a[0], _setSelection = _a[1];
    var keyOf = function (item) {
        var key = typeof _key === 'function' ? _key(item) : item[_key];
        return typeof key === 'number' ? key : String(key);
    };
    var selected = useMemo(function () { return Object.values(_selection); }, [_selection]);
    var select = function (item) {
        var items = Array.isArray(item) ? item : [item];
        _setSelection(__assign(__assign({}, _selection), items.reduce(toMap(keyOf), {})));
    };
    var deselect = function (item) {
        var selection = __assign({}, _selection);
        var items = Array.isArray(item) ? item : [item];
        items.forEach(function (t) { return (delete selection[keyOf(t)]); });
        _setSelection(selection);
    };
    var isSelected = function (item) {
        var items = Array.isArray(item) ? item : [item];
        return items.map(function (t) { return !!_selection[keyOf(t)]; }).reduce(function (x, y) { return x && y; }, true);
    };
    var clear = function () {
        _setSelection({});
    };
    return {
        selected: selected,
        select: select,
        deselect: deselect,
        isSelected: isSelected,
        clear: clear
    };
};

export { useSelection as default };
