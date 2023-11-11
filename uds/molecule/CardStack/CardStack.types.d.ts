import { ReactNode } from 'react';
export type CardStackProps = {
    className?: string;
    height?: 'sm' | 'md' | 'lg' | number;
    width?: 'sm' | 'md' | 'lg' | number;
    children?: ReactNode;
    open: boolean;
};
