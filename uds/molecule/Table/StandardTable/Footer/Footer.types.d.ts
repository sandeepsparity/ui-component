import usePagination from '../../../../atom/hook/usePagination';
export interface FooterProps<T> {
    pagination: ReturnType<typeof usePagination<T>>;
    pageSizes?: number[];
    jumper?: boolean;
    label?: string;
    showButtons?: boolean;
    showIconButtons?: boolean;
    className?: string;
}
