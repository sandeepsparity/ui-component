import { ReactElement } from 'react';
import { AccordionItemProps } from './AccordionItem/AccordionItem.types';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface AccordionProps extends BaseProps {
    children?: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
    className?: string;
    variant?: 'dark' | 'light';
    collapseIcon?: ReactElement;
    expandIcon?: ReactElement;
    iconRotatable?: boolean;
    icon?: ReactElement;
}
