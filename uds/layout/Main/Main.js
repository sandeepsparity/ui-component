import React, { useState } from 'react';
import Sidebar from '../../molecule/Sidebar/Sidebar.js';
import Header$1 from '../../molecule/Header/Header.js';
import Footer from '../../molecule/Footer/Footer.js';
import 'tslib';
import '../../foundation/color/index.js';
import '../../atom/util/dayjs.js';
import { findChildrenByType } from '../../atom/util/react.js';
import clsx from 'clsx';
import '../../tailwind.css.js';

var Header = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Content = function (props) { return React.createElement(React.Fragment, null, props.children); };
var Main = function (props) {
    var transitionDuration = '300ms';
    var _a = useState(false), sidebarPinned = _a[0], setSidebarPinned = _a[1];
    var header = findChildrenByType(props.children, Header.name);
    var content = findChildrenByType(props.children, Content.name);
    var onPin = function (pinned) {
        var _a;
        setSidebarPinned(pinned);
        (_a = props.onPin) === null || _a === void 0 ? void 0 : _a.call(props, pinned);
    };
    return (React.createElement("div", { className: 'flex w-screen h-screen overflow-hidden bg-gray-206' },
        React.createElement("div", { className: clsx('z-10 transition-[width] ease-in-out', {
                'w-[320px]': sidebarPinned,
                'w-[64px]': !sidebarPinned,
            }), style: { transitionDuration: props.transitionDuration || transitionDuration } },
            React.createElement(Sidebar, { title: props.heading, menu: props.menu || [], selected: props.selected, pinned: props.pinned, onPin: onPin, onChange: props.onChange, onSelect: props.onSelect, transitionDuration: props.transitionDuration || transitionDuration })),
        React.createElement("div", { className: clsx('w-full h-full transition-[max-width] ease-in-out', {
                'max-w-[calc(100%-64px)]': !sidebarPinned,
                'max-w-[calc(100%-320px)]': sidebarPinned,
            }), style: { transitionDuration: props.transitionDuration || transitionDuration } },
            React.createElement(Header$1, { title: props.title, subtitle: props.subtitle }, header),
            props.stickyFooter ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'w-full h-[calc(100%-65px-52px)] overflow-hidden' },
                    React.createElement("div", { className: clsx('flex flex-col w-full h-full overflow-auto', {
                            'no-scrollbar': !props.scrollbar,
                        }) },
                        React.createElement("div", { className: 'flex-1' }, content))),
                React.createElement(Footer, { timeout: props.timeout }))) : (React.createElement("div", { className: 'w-full h-[calc(100%-65px)] overflow-hidden' },
                React.createElement("div", { className: clsx('flex flex-col w-full h-full overflow-auto', {
                        'no-scrollbar': !props.scrollbar,
                    }) },
                    React.createElement("div", { className: 'flex-1' }, content),
                    React.createElement(Footer, { timeout: props.timeout, links: props.links, className: 'min-h-[52px]' })))))));
};
var Main$1 = Object.assign(Main, { Header: Header, Content: Content });

export { Main$1 as default };
