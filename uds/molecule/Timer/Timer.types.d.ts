import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface TimerProps extends BaseProps {
    timeout?: Date;
    className?: string;
}
