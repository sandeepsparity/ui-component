import { BaseProps } from '../../atom/interface/BaseProps.types';
export type ContinuousProgressBar = {
    progress?: number;
    step?: never;
    steps?: never;
};
export type DiscreteProgressBar = {
    progress?: never;
    step: number;
    steps: number;
};
export type ProgressBarProps = BaseProps & {
    width?: number;
    color?: string;
    className?: string;
} & (DiscreteProgressBar | ContinuousProgressBar);
