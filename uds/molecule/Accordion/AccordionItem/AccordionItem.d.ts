import React from 'react';
import { AccordionItemProps, ContentProps, HeaderProps } from './AccordionItem.types';
import { VariantProps } from 'class-variance-authority';
declare const _default: (({ variant, iconRotatable, className, ...props }: AccordionItemProps & Omit<VariantProps<(props?: ({
    variant?: "dark" | "light" | null | undefined;
    disabled?: boolean | null | undefined;
    selected?: boolean | null | undefined;
    isOpen?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string>, "isOpen">) => React.JSX.Element) & {
    Header: (props: HeaderProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Content: (props: ContentProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default _default;
