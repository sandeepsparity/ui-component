import React from 'react';
import { MainProps, HeaderProps, ContentProps } from './Main.types';
import '../../tailwind.css';
declare const _default: ((props: MainProps) => React.JSX.Element) & {
    Header: (props: HeaderProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Content: (props: ContentProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default _default;
