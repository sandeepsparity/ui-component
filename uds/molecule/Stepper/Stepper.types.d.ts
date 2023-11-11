import { ReactElement, ReactNode } from 'react';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface StepProps extends BaseProps {
    label?: string;
    sublabel?: string;
    tag?: 'edit' | 'view' | ReactNode;
    required?: boolean;
    children?: ReactNode;
}
export type StepperProps = BaseProps & ({
    step?: number;
    steps?: string[];
    skippable?: never;
    onChange?: never;
    children?: never;
    className?: string;
} | {
    step?: number;
    steps?: never;
    skippable?: boolean;
    onChange?(_: number): void;
    children?: ReactElement<StepProps> | ReactElement<StepProps>[];
    className?: string;
});
