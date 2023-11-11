import { ReactElement } from 'react';
import { StepProps } from '../Stepper.types';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface StepperVerticalProps extends BaseProps {
    step?: number;
    skippable?: boolean;
    onChange?(_: number): void;
    children?: ReactElement<StepProps> | ReactElement<StepProps>[];
    className?: string;
}
