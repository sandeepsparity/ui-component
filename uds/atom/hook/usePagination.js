import { __spreadArray } from 'tslib';
import { Direction } from '../../molecule/Table/Table.types.js';
import { useState, useEffect } from 'react';

var compare = function (x, y, _a) {
    var hd = _a[0], tl = _a.slice(1);
    if (!hd) {
        return 0;
    }
    var key = hd.key, direction = hd.direction;
    if (typeof key === 'function') {
        return (direction === Direction.ASC ? key(x, y) : key(y, x)) || compare(x, y, tl);
    }
    var xValue = x[key];
    var yValue = y[key];
    if (typeof xValue === 'number' && typeof yValue === 'number') {
        return (direction === Direction.ASC ? xValue - yValue : yValue - xValue) || compare(x, y, tl);
    }
    return ((direction === Direction.ASC
        ? String(xValue).localeCompare(String(yValue))
        : String(yValue).localeCompare(String(xValue))) || compare(x, y, tl));
};
var sort = function (items, sorts) {
    if (sorts === void 0) { sorts = []; }
    return !sorts.length ? items : __spreadArray([], items, true).sort(function (x, y) { return compare(x, y, sorts); });
};
var computePages = function (_size, _count) {
    return Math.trunc(_count / _size) + (_count % _size > 0 ? 1 : 0);
};
var computeStart = function (_page, _size, _pages) {
    return _size * (Math.max(1, Math.min(_page, _pages)) - 1) + 1;
};
var computeEnd = function (_page, _size, _count, _pages, _start) {
    var remainder = (_count === _size ? _size : _count % _size) || _size;
    return _start + (_page >= _pages ? remainder : _size) - 1;
};
var loadSync = function (_page, _size, _sorts, _filters, _items) {
    var page = Math.max(1, Math.min(computePages(_size, _items.length), _page));
    var items = sort(_items, _sorts).slice((page - 1) * _size, (page - 1) * _size + _size);
    var size = _size;
    var count = _items.length;
    var pages = computePages(size, count);
    var start = computeStart(page, size, pages);
    var end = computeEnd(page, size, count, pages, start);
    return { items: items, page: page, size: size, count: count, start: start, end: end, pages: pages };
};
var loadAsync = function (_page, _size, _sorts, _filters, _fetch) {
    var page = Math.max(1, _page);
    var _sort = _sorts.filter(function (_a) {
        var key = _a.key;
        return typeof key === 'string';
    });
    return _fetch({ page: page, size: _size, sort: _sort, filter: _filters })
        .then(function (res) { return ({
        items: sort(res.items, _sorts).slice(0, _size),
        page: page,
        size: _size,
        count: res.count,
        start: computeStart(page, _size, computePages(_size, res.count)),
        end: computeEnd(page, _size, res.count, computePages(_size, res.count), computeStart(page, _size, computePages(_size, res.count))),
        pages: computePages(_size, res.count),
    }); });
};
var usePagination = function (props) {
    var _a;
    var _b = useState([]), items = _b[0], setItems = _b[1];
    var _c = useState(1), page = _c[0], setPage = _c[1];
    var _d = useState(props.pageSize || ((_a = props.pageSizes) === null || _a === void 0 ? void 0 : _a[0]) || 10), size = _d[0], setSize = _d[1];
    var _e = useState(0), count = _e[0], setCount = _e[1];
    var _f = useState(0), start = _f[0], setStart = _f[1];
    var _g = useState(0), end = _g[0], setEnd = _g[1];
    var _h = useState(0), pages = _h[0], setPages = _h[1];
    var bindResult = function (result) {
        setItems(result.items);
        setPage(result.page);
        setSize(result.size);
        setCount(result.count);
        setStart(result.start);
        setEnd(result.end);
        setPages(result.pages);
    };
    var load = function (_page, _size, _sorts, _filters) {
        if (_page === void 0) { _page = page; }
        if (_size === void 0) { _size = size; }
        if (_sorts === void 0) { _sorts = []; }
        if (_filters === void 0) { _filters = []; }
        if (typeof props.items === 'function') {
            loadAsync(_page, _size, _sorts, _filters, props.items).then(bindResult);
        }
        else {
            bindResult(loadSync(_page, _size, _sorts, _filters, props.items));
        }
    };
    useEffect(function () {
        load();
    }, []);
    return { load: load, items: items, page: page, size: size, count: count, start: start, end: end, pages: pages, setPage: setPage, setSize: setSize };
};

export { usePagination as default };
