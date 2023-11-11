import { __spreadArray, __assign } from 'tslib';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Direction } from '../../molecule/Table/Table.types.js';
import { toMap } from '../util/reducer.js';
import { v4 } from 'uuid';
import { isColumnGroup } from '../util/table.js';

var isTableColumnGroup = function (column) {
    return !!column.columns;
};
var useTable = function (props) {
    var tableID = useRef(v4()).current;
    var _a = useState([]), _columns = _a[0], _setColumns = _a[1];
    var columns = function () { return __spreadArray([], _columns, true).sort(function (colA, colB) { return Number(!colA.pinned) - Number(!colB.pinned); }); };
    var flatColumns = function (columns) { return columns
        .flatMap(function (column) { return !isColumnGroup(column) ? [column] : flatColumns(column.columns); }); };
    var rankedColumns = function () { return flatColumns(_columns)
        .filter(function (col) { return !!col.sortable && !!col.direction && col.rank > 0; })
        .sort(function (colA, colB) { return colA.rank - colB.rank; }); };
    var findColumn = function (id) {
        var _findColumn = function (_id, _cols) {
            if (_cols === void 0) { _cols = []; }
            for (var _i = 0, _cols_1 = _cols; _i < _cols_1.length; _i++) {
                var _column = _cols_1[_i];
                if (_column.id === _id) {
                    return _column;
                }
                else if (isColumnGroup(_column)) {
                    var _result = _findColumn(id, _column.columns);
                    if (_result) {
                        return _result;
                    }
                }
            }
            return undefined;
        };
        return _findColumn(id, _columns);
    };
    var update = function (column) {
        var _update = function (_column, columns) {
            var cols = __spreadArray([], columns, true);
            for (var idx in cols) {
                if (cols[idx].id === _column.id) {
                    cols[idx] = __assign(__assign({}, cols[idx]), _column);
                    break;
                }
                if (isColumnGroup(cols[idx])) {
                    cols[idx] = __assign(__assign({}, cols[idx]), { columns: _update(_column, cols[idx].columns) });
                }
            }
            return cols;
        };
        _setColumns(_update(column, _columns));
    };
    var walk = function (fn) {
        var _apply = function (apply, columns) {
            var cols = __spreadArray([], columns, true);
            for (var idx in cols) {
                if (isColumnGroup(cols[idx])) {
                    cols[idx] = __assign(__assign({}, apply(__assign({}, cols[idx]))), { columns: _apply(apply, cols[idx].columns) });
                }
                else {
                    cols[idx] = __assign({}, apply(__assign({}, cols[idx])));
                }
            }
            return cols;
        };
        return _apply(fn, _columns);
    };
    var nextRank = function (column) { return 1 + flatColumns(_columns)
        .filter(function (col) { return col.id !== column.id; })
        .map(function (col) { return col.rank; })
        .reduce(function (rankA, rankB) { return Math.max(rankA, rankB); }, 0); };
    var nextDirection = function (direction) {
        switch (direction) {
            case Direction.ASC: return Direction.DESC;
            case Direction.DESC: return undefined;
            default: return Direction.ASC;
        }
    };
    var toggleSort = function (column) {
        if (isTableColumnGroup(column)) {
            return;
        }
        else if (props.singleSort) {
            _setColumns(walk(function (col) { return isTableColumnGroup(col) ? col : __assign(__assign({}, col), { direction: col.id === column.id ? nextDirection(col.direction) : undefined, rank: col.id === column.id ? 1 : 0 }); }));
        }
        else {
            var direction = findColumn(column.id).direction;
            if (!direction) {
                update(__assign(__assign({}, column), { direction: Direction.ASC, rank: nextRank(column) }));
            }
            else if (direction === Direction.ASC) {
                update(__assign(__assign({}, column), { direction: Direction.DESC, rank: nextRank(column) }));
            }
            else if (direction === Direction.DESC) {
                update(__assign(__assign({}, column), { direction: undefined, rank: 0 }));
            }
        }
    };
    var sorts = function () { return useMemo(function () { return rankedColumns()
        .filter(function (col) { return !isTableColumnGroup(col) && typeof col.value === 'string' || typeof col.sortable === 'function'; })
        .map(function (col) { return (typeof col.value === 'string' ?
        { key: col.value, direction: col.direction } :
        { key: col.sortable, direction: col.direction }); }); }, [_columns]); };
    var compare = function (x, y, _a) {
        var hd = _a[0], tl = _a.slice(1);
        if (!hd) {
            return 0;
        }
        if (isTableColumnGroup(hd)) {
            return compare(x, y, hd.columns) || compare(x, y, tl);
        }
        var value = hd.value, direction = hd.direction, sortable = hd.sortable;
        if (typeof sortable === 'function') {
            return (direction === Direction.ASC ? sortable(x, y) : sortable(y, x)) || compare(x, y, tl);
        }
        var xValue = typeof value === 'function' ? value(x) : x[value];
        var yValue = typeof value === 'function' ? value(y) : y[value];
        if (typeof xValue === 'number' && typeof yValue === 'number') {
            return (direction === Direction.ASC ? xValue - yValue : yValue - xValue) || compare(x, y, tl);
        }
        return ((direction === Direction.ASC
            ? String(xValue).localeCompare(String(yValue))
            : String(yValue).localeCompare(String(xValue))) || compare(x, y, tl));
    };
    var sort = function (items) { return __spreadArray([], items, true).sort(function (x, y) { return compare(x, y, rankedColumns()); }); };
    var reorder = function (cols) {
        var columns = _columns.reduce(toMap('id'), {});
        var reordered = [];
        for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
            var id = cols_1[_i].id;
            if (id in columns) {
                reordered.push(columns[id]);
            }
        }
        _setColumns(reordered);
    };
    var toColumn = function (column) { return isTableColumnGroup(column) ? __assign(__assign({}, column), { columns: column.columns.map(toColumn) }) : __assign(__assign({}, column), { rank: 0 }); };
    useEffect(function () {
        _setColumns(props.columns.map(toColumn));
    }, [props.columns]);
    return {
        tableID: tableID,
        columns: columns(),
        sorts: sorts(),
        sort: sort,
        toggleSort: toggleSort,
        reorder: reorder,
        update: update
    };
};

export { useTable as default };
