import { __assign } from 'tslib';
import React from 'react';
import { Menu } from '@headlessui/react';
import { isEmptyArray } from '../../atom/util/array.js';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { findChildrenByType, findByType } from '../../atom/util/react.js';
import useBaseProps from '../../atom/hook/useBaseProps.js';
import clsx from 'clsx';
import '../../tailwind.css.js';

var Anchor = function (props) { return React.createElement("div", null, props.children); };
var Item = function (props) { return React.createElement("div", null, props.children); };
var Footer = function (props) { return React.createElement("div", null, props.children); };
var Dropdown = function (props) {
    var _a;
    var baseProps = useBaseProps(props);
    var footer = findChildrenByType(props.children, 'Footer');
    return (React.createElement(Menu, __assign({}, baseProps, { as: 'div' }),
        React.createElement(Menu.Button, { disabled: props.disabled }, findChildrenByType(props.children, 'Anchor')),
        React.createElement(Menu.Items, { className: 'relative', style: { zIndex: props.zIndex || 10 } },
            React.createElement("div", { className: clsx('w-fit h-fit bg-white border border-gray-204 rounded-lg drop-shadow-md absolute', props.className) },
                React.createElement("div", { "data-testid": 'dropdownItem-wrapper', className: 'p-2 overflow-y-auto', style: {
                        width: 'fit-content',
                        minWidth: props.width || '375px',
                        maxHeight: props.height || '320px',
                    } }, (_a = findByType(props.children, 'Item')) === null || _a === void 0 ? void 0 : _a.map(function (item, idx) { return (React.createElement(Menu.Item, { key: idx, disabled: item.props.disabled },
                    React.createElement("div", { onClick: item.props.onClick, className: 'w-full h-fit px-2 py-[10px] rounded-lg hover:bg-blue-306 whitespace-nowrap select-none truncate' }, item.props.children))); })),
                !isEmptyArray(footer) && (React.createElement("div", { className: 'w-full py-3 px-2 bg-gray-207 rounded-b-lg border-t border-t-gray-204' }, footer))))));
};
var Dropdown$1 = Object.assign(Dropdown, { Anchor: Anchor, Item: Item, Footer: Footer });

export { Dropdown$1 as default };
