import { MouseEvent } from 'react';
export interface ChipProps {
    label?: string;
    disabled?: boolean;
    onClick?(_?: MouseEvent<HTMLElement>): void;
    className?: string;
}
