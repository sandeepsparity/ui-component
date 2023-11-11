/// <reference types="react" />
declare const useBreakpoint: () => {
    ref: import("react").Dispatch<import("react").SetStateAction<HTMLDivElement | null>>;
    width: number;
    height: number;
    breakpoint: string;
    xs: boolean;
    sm: boolean;
    ss: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    '2xl': boolean;
};
export default useBreakpoint;
