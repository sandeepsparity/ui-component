import { ReactNode } from 'react';
export interface FaderProps {
    isOpen?: boolean;
    duration?: number;
    children?: ReactNode;
    className?: string;
}
