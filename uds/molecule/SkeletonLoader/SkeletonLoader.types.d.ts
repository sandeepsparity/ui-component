/// <reference types="react" />
export interface SkeletonLoaderProps {
    className?: string;
    count?: number;
    height?: number | string;
    circle?: boolean;
    wrapper?: React.FunctionComponent;
    skeletonTheme?: boolean;
    baseColor?: string;
    highlightColor?: string;
    width?: string | number;
    borderRadius?: number;
    inline?: boolean;
    duration?: number;
    direction?: 'ltr' | 'rtl';
    enableAnimation?: boolean;
}
