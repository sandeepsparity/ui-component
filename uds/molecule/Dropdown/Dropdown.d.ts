import React from 'react';
import { AnchorProps, ItemProps, FooterProps, DropdownProps } from './Dropdown.types';
import '../../tailwind.css';
declare const _default: ((props: DropdownProps) => React.JSX.Element) & {
    Anchor: (props: AnchorProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Item: (props: ItemProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Footer: (props: FooterProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default _default;
