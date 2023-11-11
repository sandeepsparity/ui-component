import React from 'react';
import { ContentProps, HeaderProps, TabProps } from './Tab.types';
import '../../../tailwind.css';
declare const _default: ((props: TabProps) => React.JSX.Element) & {
    Header: (props: HeaderProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Content: (props: ContentProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default _default;
