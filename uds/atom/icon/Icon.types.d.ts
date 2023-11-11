import React from 'react';
export interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
    fillAlt?: string;
    accent?: string;
    accentAlt?: string;
    onClick?(_?: React.MouseEvent): void;
    className?: string;
    title?: string;
}
