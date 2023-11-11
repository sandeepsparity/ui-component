import React, { ReactElement } from 'react';
import { TableProps } from './Table.types';
import { EmptyProps, FooterProps, HeaderProps } from './StandardTable/StandardTable.types';
import '../../tailwind.css';
export declare const Header: (props: HeaderProps) => ReactElement;
export declare const Footer: (props: FooterProps) => ReactElement;
export declare const Empty: (props: EmptyProps) => ReactElement;
declare const _default: (<T>(props: TableProps<T>) => React.JSX.Element) & {
    Header: (props: HeaderProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Footer: (props: FooterProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Empty: (props: EmptyProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default _default;
