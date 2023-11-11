var isColumn = function (column) { return !!column.value; };
var isColumnGroup = function (column) { return !!column.columns; };
var columnDepth = function (columns) {
    if (!Array.isArray(columns)) {
        return columnDepth([columns]);
    }
    return columns.map(function (column) { return isColumn(column) ? 0 : 1 + columnDepth(column.columns); })
        .reduce(function (x, y) { return Math.max(x, y); }, 0);
};
var columnSpan = function (columns) {
    if (!Array.isArray(columns)) {
        return columnSpan([columns]);
    }
    return columns.map(function (column) { return isColumn(column) ? 1 : columnSpan(column.columns); })
        .reduce(function (x, y) { return x + y; });
};
var columnsByDepth = function (columns, depth) {
    if (depth === void 0) { depth = 0; }
    return columns.flatMap(function (col) {
        var colDepth = columnDepth(col);
        if (colDepth < depth) {
            return [[undefined, columnSpan(col)]];
        }
        else if (colDepth === depth) {
            return [[col, columnSpan(col)]];
        }
        return columnsByDepth((col.columns), depth);
    });
};

export { columnDepth, columnSpan, columnsByDepth, isColumn, isColumnGroup };
