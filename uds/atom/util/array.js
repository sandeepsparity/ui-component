import { __spreadArray } from 'tslib';

var isEmptyArray = function (obj) {
    return Array.isArray(obj) && obj.length < 1;
};
var intersperse = function (x, xs) {
    if (xs === void 0) { xs = []; }
    return xs.reduce(function (acc, curr, idx) { return (1 + idx === xs.length ? __spreadArray(__spreadArray([], acc, true), [curr], false) : __spreadArray(__spreadArray([], acc, true), [curr, x], false)); }, []);
};
var partition = function (xs, predicate) {
    return xs.reduce(function (acc, curr) {
        if (predicate(curr)) {
            acc[0].push(curr);
        }
        else {
            acc[1].push(curr);
        }
        return acc;
    }, [[], []]);
};
var range = function (end, startAt) {
    if (startAt === void 0) { startAt = 0; }
    return Array.from({ length: end }, function (_, i) { return i; }).filter(function (i) { return i >= startAt; });
};
var unique = function (items, key) {
    var uniqueIds = [];
    return items.filter(function (element) {
        var isDuplicate = uniqueIds.includes(
        // @ts-ignore
        key && typeof element !== 'string' ? element[key] : element);
        if (!isDuplicate) {
            // @ts-ignore
            uniqueIds.push(key && typeof element !== 'string' ? element[key] : element);
            return true;
        }
        return false;
    });
};

export { intersperse, isEmptyArray, partition, range, unique };
