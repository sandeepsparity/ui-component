import { __assign, __spreadArray } from 'tslib';
import { useState, useMemo, useEffect } from 'react';
import { toMap } from '../util/reducer.js';

var _toMenuItems = function (menu, depth, parent) {
    if (depth === void 0) { depth = 0; }
    return menu.map(function (m) {
        var menuItem = {};
        if (!m.menu) {
            menuItem.type = 'MenuButton';
            menuItem.id = m.id;
            menuItem.depth = depth;
            menuItem.parent = parent;
            menuItem.icon = m.icon;
            menuItem.label = m.label;
            menuItem.favorite = m.favorite || false;
            menuItem.default = (m.default && depth > 1) || false;
            menuItem.onClick = m.onClick;
        }
        else {
            menuItem.type = 'MenuList';
            menuItem.id = m.id;
            menuItem.depth = depth;
            menuItem.parent = parent;
            menuItem.icon = m.icon;
            menuItem.label = m.label;
            menuItem.isSubMenu = depth % 2 === 1;
            menuItem.menu = _toMenuItems(m.menu, depth + 1, menuItem);
        }
        return menuItem;
    });
};
var _toMenuMap = function (menu) {
    if (menu === void 0) { menu = []; }
    var flatten = function (menu) { return menu.flatMap(function (item) { return !item.menu ? [item] : __spreadArray([item], flatten(item.menu), true); }); };
    return flatten(menu).reduce(toMap('id'), {});
};
var _findMenuItem = function (id, menuItems) {
    if (!id || !menuItems) {
        return undefined;
    }
    for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {
        var menuItem = menuItems_1[_i];
        if (menuItem.id === id) {
            return menuItem;
        }
        else if (menuItem.type === 'MenuList') {
            var result = _findMenuItem(id, menuItem.menu);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
};
var _findFavorites = function (menuItems) {
    if (menuItems === void 0) { menuItems = []; }
    return menuItems.flatMap(function (menuItem) {
        switch (menuItem.type) {
            case 'MenuButton':
                return menuItem.favorite ? [menuItem] : [];
            case 'MenuList':
                return _findFavorites(menuItem.menu);
        }
    });
};
var _filterMenuItems = function (menuItems, query, maxDepth, depth) {
    if (menuItems === void 0) { menuItems = []; }
    if (maxDepth === void 0) { maxDepth = 1; }
    if (depth === void 0) { depth = 0; }
    if (!query) {
        return menuItems;
    }
    if (depth > maxDepth) {
        return [];
    }
    return menuItems.flatMap(function (menuItem) {
        var _a, _b;
        if ((_b = (_a = menuItem.label) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(query)) {
            return [menuItem];
        }
        else if (menuItem.type === 'MenuList') {
            var filteredMenu = _filterMenuItems(menuItem.menu, query, maxDepth, depth + 1);
            if (filteredMenu.length) {
                return [__assign(__assign({}, menuItem), { menu: filteredMenu })];
            }
        }
        return [];
    });
};
var useMenu = function (_menu) {
    var _a = useState(_toMenuMap(_menu)), map = _a[0], setMap = _a[1];
    var _b = useState(_toMenuItems(_menu)), menu = _b[0], setMenu = _b[1];
    var _c = useState(''), selectedID = _c[0], setSelectedID = _c[1];
    var _d = useState(''), query = _d[0], setQuery = _d[1];
    var filteredMenuItems = useMemo(function () {
        return _filterMenuItems(menu, query);
    }, [menu, query]);
    var filteredFavorites = useMemo(function () {
        return _filterMenuItems(_findFavorites(menu), query);
    }, [menu, query]);
    var selected = useMemo(function () {
        return _findMenuItem(selectedID, menu);
    }, [menu, selectedID]);
    var findMenuItem = function (id) {
        return _findMenuItem(id, menu);
    };
    var lookupMenu = function (id) {
        return !id ? undefined : map[id];
    };
    useEffect(function () {
        setMap(_toMenuMap(_menu));
        setMenu(_toMenuItems(_menu));
    }, [_menu]);
    return {
        menu: filteredMenuItems,
        favorites: filteredFavorites,
        find: findMenuItem,
        lookup: lookupMenu,
        select: setSelectedID,
        selected: selected,
        query: query,
        setQuery: setQuery,
    };
};

export { useMenu as default };
