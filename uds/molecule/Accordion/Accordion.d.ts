import React from 'react';
import { AccordionProps } from './Accordion.types';
import { VariantProps } from 'class-variance-authority';
declare const accordionStyles: (props?: ({
    variant?: "dark" | "light" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const Accordion: (props: AccordionProps & VariantProps<typeof accordionStyles>) => React.JSX.Element;
export default Accordion;
