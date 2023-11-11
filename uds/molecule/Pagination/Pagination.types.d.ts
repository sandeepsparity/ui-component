import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface PaginationProps extends BaseProps {
    page: number;
    pages: number;
    siblings?: number;
    boundary?: number;
    showButtons?: boolean;
    showIconButtons?: boolean;
    onChange?(_: number): void;
    className?: string;
    jumper?: boolean;
}
