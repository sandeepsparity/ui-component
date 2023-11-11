import React, { ReactNode } from 'react';
export declare const findByType: (children: ReactNode, type: string) => (React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>)[] | undefined;
export declare const excludeByType: (children: ReactNode, type: string) => (React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>)[] | undefined;
export declare const findChildrenByType: (children: ReactNode, type: string) => any[] | undefined;
export declare const nodeToElement: (children: ReactNode) => HTMLElement;
export declare const getComponentByType: (children: ReactNode, props: any, type: string) => false | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | undefined;
export declare const getChildrenCount: (children: ReactNode, type: string) => number | undefined;
