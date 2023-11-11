import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface Link {
    label: string;
    value: string;
}
export interface FooterProps extends BaseProps {
    timeout?: Date;
    className?: string;
    links?: Link[];
}
