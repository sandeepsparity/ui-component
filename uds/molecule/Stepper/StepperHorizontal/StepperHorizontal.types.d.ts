import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface StepperHorizontalProps extends BaseProps {
    step?: number;
    steps?: string[];
    className?: string;
}
