import React, { useEffect } from 'react';
import Header$1 from './Header/Header.js';
import Footer$1 from './Footer/Footer.js';
import { Header, Footer, Empty } from '../Table.js';
import { ChevronRight } from 'lucide-react';
import { partition, isEmptyArray } from '../../../atom/util/array.js';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import { findByType, findChildrenByType } from '../../../atom/util/react.js';
import { columnDepth } from '../../../atom/util/table.js';
import BaseTable from '../BaseTable/BaseTable.js';
import Checkbox from '../../Checkbox/Checkbox.js';
import usePagination from '../../../atom/hook/usePagination.js';
import useSelection from '../../../atom/hook/useSelection.js';
import useTable from '../../../atom/hook/useTable.js';
import clsx from 'clsx';
import '../../../tailwind.css.js';

var StandardTable = function (props) {
    var table = useTable(props);
    var pagination = usePagination(props);
    var _a = useSelection(props.itemKey), selected = _a.selected, select = _a.select, deselect = _a.deselect, isSelected = _a.isSelected, clear = _a.clear;
    var header = findByType(props.children, Header.name);
    var footer = findChildrenByType(props.children, Footer.name);
    var empty = findChildrenByType(props.children, Empty.name);
    var size = props.backfill ? pagination.size : undefined;
    var depth = columnDepth(table.columns);
    var items = function () { return (Array.isArray(props.items) ? props.items : pagination.items); };
    var visibleItems = function () {
        return (!!props.noPagination || !!props.noFooter) && Array.isArray(props.items)
            ? table.sort(props.items)
            : pagination.items;
    };
    var onHeaderCheckboxChange = function (_a) {
        var checked = _a.target.checked;
        if (checked) {
            select(Array.isArray(props.items) ? props.items : pagination.items);
        }
        else {
            clear();
        }
    };
    var onRowCheckboxChange = function (item, _a) {
        var checked = _a.target.checked;
        if (checked) {
            select(item);
        }
        else {
            deselect(item);
        }
    };
    var isPinnedView = function () {
        return !table.columns.every(function (col) { return col.pinned; }) && !table.columns.every(function (col) { return !col.pinned; }) && visibleItems().length > 0;
    };
    var checkbox = {
        id: "checkbox-".concat(table.tableID),
        label: (React.createElement(Checkbox, { dense: true, checked: isSelected(items()), indeterminate: items().some(isSelected), onChange: onHeaderCheckboxChange })),
        value: function (item) { return (React.createElement(Checkbox, { dense: true, checked: isSelected(item), onChange: function (e) { return onRowCheckboxChange(item, e); } })); },
        align: 'center',
        width: '48px',
        minWidth: '48px',
        maxWidth: '48px',
        hidden: !props.select && !props.checkboxes,
        pinned: isPinnedView(),
        rank: -1,
    };
    var chevron = {
        id: "chevron-".concat(table.tableID),
        label: null,
        value: function (item, toggle, expanded) {
            return (React.createElement("div", { className: 'flex items-center justify-center min-w-8 min-h-8 cursor-pointer', onClick: toggle },
                React.createElement(ChevronRight, { size: 32, strokeWidth: 1, color: color('dark-text'), className: clsx('transition duration-200', { 'rotate-90': expanded }) })));
        },
        align: 'center',
        width: '48px',
        minWidth: '48px',
        maxWidth: '48px',
        hidden: !props.expansion || !props.chevrons || isPinnedView(),
        rank: -1,
    };
    var columns = function () {
        var cols = table.columns.filter(function (col) { return !col.hidden; });
        if (props.select || props.checkboxes) {
            cols.unshift(checkbox);
        }
        if (props.expansion && props.chevrons && !isPinnedView()) {
            cols.unshift(chevron);
        }
        return cols;
    };
    var partitionedColumns = function () {
        return partition(columns(), function (col) { return !!col.pinned; });
    };
    var tableHeader = function () {
        if (props.noHeader) {
            return null;
        }
        var actions = props.select || props.checkboxes ? props.actions : [];
        var child = React.Children.toArray(header)[0];
        var children = React.isValidElement(child) && typeof child.props.children === 'function' ? child.props.children : child;
        return (React.createElement(Header$1, { selected: selected, clear: clear, actions: actions, columns: table.columns, reorder: table.reorder, update: table.update, options: props.options, children: children, className: 'w-full' }));
    };
    var tableFooter = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!!props.noPagination || !!props.noFooter) {
            return !isEmptyArray(footer) ? footer : null;
        }
        return (React.createElement(Footer$1, { jumper: props.jumper, label: (_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.label, showButtons: (_e = (_d = (_c = props.options) === null || _c === void 0 ? void 0 : _c.footer) === null || _d === void 0 ? void 0 : _d.pagination) === null || _e === void 0 ? void 0 : _e.showButtons, showIconButtons: (_h = (_g = (_f = props.options) === null || _f === void 0 ? void 0 : _f.footer) === null || _g === void 0 ? void 0 : _g.pagination) === null || _h === void 0 ? void 0 : _h.showIconButtons, pagination: pagination, pageSizes: props.pageSizes, className: 'w-full px-3' }));
    };
    useEffect(function () {
        pagination.load(pagination.page, pagination.size, table.sorts, []);
    }, [pagination.page, pagination.size, table.sorts, props.items]);
    useEffect(function () {
        if (props.onChange) {
            props.onChange(selected, clear);
        }
    }, [selected]);
    return (React.createElement("div", { className: props.className },
        tableHeader(),
        isPinnedView() ? (React.createElement("div", { className: 'w-full flex' },
            React.createElement("div", { className: 'w-fit flex mb-[15px]' },
                React.createElement(BaseTable, { id: "".concat(props.id, "-pinned"), itemKey: props.itemKey, items: visibleItems(), columns: partitionedColumns()[0], toggleSort: table.toggleSort, dividers: props.dividers, loading: props.loading, size: size, depth: depth, empty: empty, className: 'w-full' }),
                React.createElement("div", { className: 'relative w-2 opacity-[0.15] -mr-2', style: {
                        background: 'linear-gradient(90deg, #0D2D49 -8.33%, rgba(13, 45, 73, 0) 77.78%)',
                    } })),
            React.createElement("div", { className: 'w-full overflow-x-auto' },
                React.createElement(BaseTable, { id: "".concat(props.id, "-unpinned"), itemKey: props.itemKey, items: visibleItems(), columns: partitionedColumns()[1], toggleSort: table.toggleSort, dividers: props.dividers, loading: props.loading, size: size, depth: depth, empty: empty, className: 'w-full' })))) : (React.createElement("div", { className: clsx('w-full', { 'overflow-x-auto': props.overflow }) },
            React.createElement(BaseTable, { id: props.id, itemKey: props.itemKey, items: visibleItems(), columns: columns(), expansion: props.expansion, autoExpand: props.autoExpand, toggleSort: table.toggleSort, dividers: props.dividers, loading: props.loading, size: size, empty: empty, className: 'w-full' }))),
        tableFooter()));
};

export { StandardTable as default };
