import { __assign } from 'tslib';
import React, { useState, useMemo, useEffect } from 'react';
import { Pin, MoreHorizontal, LayoutGrid, Star, Search, XCircle, ChevronLeft } from 'lucide-react';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';
import AlbertsonsLogo from '../../atom/logo/AlbertsonsLogo/AlbertsonsLogo.js';
import Divider from '../Divider/Divider.js';
import SidebarItem from './SidebarItem/SidebarItem.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import useMenu from '../../atom/hook/useMenu.js';
import clsx from 'clsx';
import '../../tailwind.css.js';

var Sidebar = function (props) {
    var Tab;
    (function (Tab) {
        Tab[Tab["Apps"] = 0] = "Apps";
        Tab[Tab["Favorites"] = 1] = "Favorites";
        Tab[Tab["SubMenu"] = 2] = "SubMenu";
    })(Tab || (Tab = {}));
    var baseProps = useBaseProps(props);
    var _a = useMenu(props.menu || []), menu = _a.menu, favorites = _a.favorites, find = _a.find, lookup = _a.lookup, select = _a.select, selected = _a.selected, query = _a.query, setQuery = _a.setQuery;
    var _b = useState(), subMenu = _b[0], _setSubMenu = _b[1];
    var _c = useState(false), isExpanded = _c[0], setExpanded = _c[1];
    var _d = useState(false), isPinned = _d[0], setPinned = _d[1];
    var _e = useState(Tab.Apps), tab = _e[0], setTab = _e[1];
    var selectedIDs = useMemo(function () {
        var ids = new Set();
        var menuItem = selected;
        while (menuItem) {
            ids.add(menuItem.id);
            menuItem = menuItem.parent;
        }
        return ids;
    }, [selected]);
    var menuItems = useMemo(function () {
        var items = [];
        switch (tab) {
            case Tab.Apps:
                items.push.apply(items, menu);
                break;
            case Tab.Favorites:
                items.push.apply(items, favorites);
                break;
            case Tab.SubMenu:
                items.push.apply(items, ((subMenu === null || subMenu === void 0 ? void 0 : subMenu.menu) || []));
                break;
        }
        return items;
    }, [menu, favorites, subMenu, tab]);
    var toMenuNodes = function (items) {
        if (items === void 0) { items = []; }
        return !items.length
            ? undefined
            : items.map(function (item) { return (React.createElement(SidebarItem, { key: "".concat(tab, "-").concat(item.id), menuItem: item, selected: selectedIDs.has(item.id), visible: open, open: !!query || selectedIDs.has(item.id), onClick: function () { return onSelect(item); }, children: item.type === 'MenuList' ? toMenuNodes(item.menu) : undefined })); });
    };
    var parentSubMenu = function (_menuItem) {
        if (_menuItem === void 0) { _menuItem = selected; }
        var menuItem = _menuItem === null || _menuItem === void 0 ? void 0 : _menuItem.parent;
        while (menuItem) {
            if (menuItem.type === 'MenuList' && menuItem.isSubMenu) {
                return menuItem;
            }
            menuItem = menuItem.parent;
        }
        return undefined;
    };
    var setSubMenu = function (menuList) {
        _setSubMenu(menuList);
        setTab(!!menuList && menuList.isSubMenu ? Tab.SubMenu : Tab.Apps);
    };
    var open = useMemo(function () { return isExpanded || isPinned; }, [isExpanded, isPinned]);
    var onChange = function (expanded) {
        var _a;
        setExpanded(expanded);
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, expanded || isPinned);
    };
    var onPin = function (pinned) {
        var _a;
        setPinned(pinned);
        (_a = props.onPin) === null || _a === void 0 ? void 0 : _a.call(props, pinned);
    };
    var onInput = function (event) {
        var _a, _b;
        setQuery(((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '');
    };
    var isChildOf = function (menuItem, menuList) {
        var _a;
        if (!menuItem || !menuList) {
            return false;
        }
        else if (((_a = menuItem.parent) === null || _a === void 0 ? void 0 : _a.id) === menuList.id) {
            return true;
        }
        else {
            return isChildOf(menuItem.parent, menuList);
        }
    };
    var findDefaultMenuButton = function (menuList) {
        if (!menuList.menu) {
            return undefined;
        }
        for (var _i = 0, _a = menuList.menu; _i < _a.length; _i++) {
            var menuItem = _a[_i];
            if (menuItem.type === 'MenuButton' && menuItem.default) {
                return menuItem;
            }
            else if (menuItem.type === 'MenuList' && menuItem.menu) {
                for (var _b = 0, _c = menuItem.menu; _b < _c.length; _b++) {
                    var submenuItem = _c[_b];
                    if (submenuItem.type === 'MenuButton' && submenuItem.default) {
                        return submenuItem;
                    }
                }
            }
        }
        return undefined;
    };
    var onSelect = function (menuItem) {
        var _a, _b;
        if (menuItem.type === 'MenuButton') {
            select(menuItem.id);
            (_a = menuItem.onClick) === null || _a === void 0 ? void 0 : _a.call(menuItem);
        }
        else if (menuItem.type === 'MenuList' && menuItem.isSubMenu) {
            setSubMenu(menuItem);
            if (!isChildOf(selected, menuItem)) {
                var defaultMenuButton = findDefaultMenuButton(menuItem);
                if (defaultMenuButton) {
                    onSelect(defaultMenuButton);
                }
            }
        }
        (_b = props.onSelect) === null || _b === void 0 ? void 0 : _b.call(props, lookup(menuItem.id));
    };
    useEffect(function () {
        if (!open) {
            setSubMenu(parentSubMenu(selected));
        }
    }, [open]);
    useEffect(function () {
        onPin(!!props.pinned);
    }, [props.pinned]);
    useEffect(function () {
        var _a;
        var menuItem = find(typeof props.selected === 'string' ? props.selected : ((_a = props.selected) === null || _a === void 0 ? void 0 : _a.id) || '');
        if (menuItem && menuItem.id !== (selected === null || selected === void 0 ? void 0 : selected.id)) {
            onSelect(menuItem);
        }
    }, [props.selected, menu]);
    useEffect(function () {
        setSubMenu(parentSubMenu(selected));
    }, [selected]);
    return (React.createElement("aside", __assign({}, baseProps, { onMouseEnter: function () { return onChange(true); }, onMouseLeave: function () { return onChange(false); }, className: clsx('flex flex-col h-screen transition-width overflow-hidden ease-in-out bg-brand-dark bg-gradient-to-b from-brand-dark via-brand-dark/70 to-black/30', {
            'w-[320px]': open,
            'w-[64px]': !open,
            'min-w-[320px]': isPinned,
            'min-w-[64px]': !isPinned,
        }, props.className), style: {
            transitionDuration: props.transitionDuration || '300ms',
        } }),
        React.createElement("div", { className: 'flex justify-between w-full min-h-[64px] bg-brand-dark' },
            React.createElement(AlbertsonsLogo, { className: 'my-auto ml-[8.75px] min-w-[48px] min-h-[28px]', width: 48, height: 28 }),
            open && (React.createElement(React.Fragment, null,
                React.createElement("span", { className: 'text-xs font-semibold whitespace-nowrap my-auto w-fit h-6 mt-6 leading-6 tracking-[1.25px] text-gray-206 uppercase overflow-hidden' }, props.title),
                React.createElement(Pin, { onClick: function () { return onPin(!isPinned); }, width: 24, height: 24, strokeWidth: 1.5, className: 'min-w-[24px] my-auto mr-[13px] cursor-pointer overflow-hidden rotate-45', color: color(isPinned ? 'brand-light' : 'gray-203'), fill: isPinned ? color('brand-light') : color('transparent'), id: 'pin-icon' })))),
        React.createElement("div", { className: 'flex items-center justify-center w-full min-h-[52px] bg-blue-309 border-t border-b border-brand' }, !open ? (React.createElement(MoreHorizontal, { id: 'ellipsis-icon', className: 'min-w-[24px] ml-[2px]', size: 24, color: color('white') })) : (React.createElement("div", { className: 'flex items-center justify-between min-w-[320px] h-full' },
            React.createElement("div", { onClick: function () { return setTab(Tab.Apps); }, className: 'flex items-center justify-center w-[calc(50%-1px)] h-full cursor-pointer whitespace-nowrap select-none hover:bg-blue-301' },
                React.createElement("div", { className: clsx('flex items-center justify-center w-fit h-full border-b-[3px] pt-1', {
                        'border-brand-light': tab === Tab.Apps,
                        'border-transparent': tab !== Tab.Apps,
                    }) },
                    React.createElement(LayoutGrid, { className: 'min-w-[18px]', size: 18, strokeWidth: 1.5, color: color('white'), id: 'apps-icon' }),
                    React.createElement("span", { className: 'ml-3 font-semibold leading-6 text-white whitespace-nowrap select-none truncate' }, "Apps"))),
            React.createElement(Divider, { height: 24, color: color('light-text') }),
            React.createElement("div", { onClick: function () { return setTab(Tab.Favorites); }, className: 'flex items-center justify-center w-1/2 h-full cursor-pointer whitespace-nowrap select-none hover:bg-blue-301' },
                React.createElement("div", { className: clsx('flex items-center justify-center w-fit h-full border-b-[3px] pt-1', {
                        'border-brand-light': tab === Tab.Favorites,
                        'border-transparent': tab !== Tab.Favorites,
                    }) },
                    React.createElement(Star, { className: 'min-w-[18px]', size: 18, strokeWidth: 1.5, color: color('white'), id: 'favorite-icon' }),
                    React.createElement("span", { className: 'ml-3 font-semibold leading-6 text-white whitespace-nowrap select-none truncate' }, "Favorites")))))),
        (tab === Tab.Apps || tab === Tab.Favorites) && (React.createElement("div", { className: 'flex items-start justify-center w-full min-h-[68px] bg-brand-dark' },
            React.createElement("div", { className: 'flex items-center w-full h-[36px] mt-[24px] rounded-[22px] border-[1.5px] border-gray-203 overflow-hidden mx-2' },
                React.createElement(Search, { id: 'search-icon', className: 'min-w-[18px] w-[18px] ml-[15px]', size: 18, strokeWidth: 1.5, color: color('white') }),
                React.createElement("input", { disabled: !open, placeholder: open ? 'Search' : '', value: open ? query : '', onChange: onInput, className: 'w-full h-[36px] ml-[19px] border-0 outline-0 bg-transparent placeholder:font-light placeholder:text-sm placeholder:text-disabled-text text-gray-206' }),
                !!query && open && (React.createElement(XCircle, { onClick: function () { return setQuery(''); }, className: 'min-w-[18px] w-[18px] ml-1 mr-[10.5px] rounded-full cursor-pointer hover:stroke-gray-203', size: 18, strokeWidth: 1.5, color: color('white'), id: 'clear-icon' }))))),
        tab === Tab.SubMenu && (React.createElement("div", { onClick: function () { return setSubMenu(parentSubMenu(subMenu)); }, className: 'w-full min-h-[65px] px-3 cursor-pointer hover:bg-blue-301' },
            React.createElement("div", { className: 'flex items-center justify-between w-full h-full overflow-hidden border-b-[1.5px] border-b-brand-medium whitespace-nowrap select-none' },
                React.createElement("div", { className: 'flex items-center' },
                    React.createElement(ChevronLeft, { className: 'min-w-[20px] w-[20px] ml-[10.5px]', size: 20, strokeWidth: 1.5, color: color('blue-306'), id: 'left-chev-icon' }),
                    React.createElement("span", { className: 'text-lg font-extrabold text-white tracking-wide ml-5 whitespace-nowrap select-none' }, subMenu === null || subMenu === void 0 ? void 0 : subMenu.label))))),
        React.createElement("div", { className: 'h-full overflow-y-scroll overflow-x-hidden no-scrollbar' }, toMenuNodes(menuItems))));
};

export { Sidebar as default };
