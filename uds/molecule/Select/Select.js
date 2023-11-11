import { __assign } from 'tslib';
import React, { forwardRef, useMemo } from 'react';
import MultiSelect from './MultiSelect/MultiSelect.js';
import SingleSelect from './SingleSelect/SingleSelect.js';
import { sha1 } from '../../atom/util/hash.js';
import '../../tailwind.css.js';

var Option = function (_) { return React.createElement(React.Fragment, null); };
var Select = forwardRef(function (props, ref) {
    var _a;
    var keyOf = function (item) {
        if (typeof props.itemKey === 'function') {
            return String(props.itemKey(item));
        }
        else if (props.itemKey) {
            return String(item[props.itemKey]);
        }
        return sha1({ item: item });
    };
    var labelOf = function (item) {
        if (typeof props.itemText === 'function') {
            return String(props.itemText(item));
        }
        else if (props.itemText) {
            return String(item[props.itemText]);
        }
        return String(item);
    };
    var toIndexedOption = function (item, idx) {
        var key = keyOf(item);
        var label = labelOf(item);
        return { item: item, idx: idx, key: key, label: label };
    };
    var items = useMemo(function () {
        if (props.items) {
            return props.items.map(toIndexedOption);
        }
        else if (props.children) {
            return React.Children.map(props.children, function (_a, idx) {
                var props = _a.props;
                return (__assign(__assign({}, props), toIndexedOption(props.item, idx)));
            });
        }
        return [];
    }, [props.items, props.children]);
    return props.multiple ?
        React.createElement(MultiSelect, { id: props.id, ref: ref, actions: props.actions, checkboxes: props.checkboxes, disabled: props.disabled, error: props.error, footer: props.footer, items: items, menuHeight: props.menuHeight, menuWidth: props.menuWidth, name: props.name, nestedTags: props.nestedTags, noTags: props.noTags, onChange: props.onChange, onClick: props.onClick, onSearch: props.onSearch, placeholder: props.placeholder, search: props.search, selectAllOption: props.selectAllOption, value: (_a = props.value) === null || _a === void 0 ? void 0 : _a.map(function (val) { return toIndexedOption(val); }), variant: props.variant, wrap: props.wrap, zIndex: props.zIndex, className: props.className }) :
        React.createElement(SingleSelect, { id: props.id, ref: ref, actions: props.actions, disabled: props.disabled, error: props.error, footer: props.footer, items: items, menuHeight: props.menuHeight, menuWidth: props.menuWidth, name: props.name, onChange: props.onChange, onClick: props.onClick, onSearch: props.onSearch, placeholder: props.placeholder, search: props.search, size: props.size, value: props.value ? toIndexedOption(props.value) : undefined, variant: props.variant, wrap: props.wrap, zIndex: props.zIndex, className: props.className });
});

export { Option, Select as default };
