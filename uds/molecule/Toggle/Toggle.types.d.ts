import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface ToggleProps extends BaseProps {
    checked?: boolean;
    disabled?: boolean;
    small?: boolean;
    onChange?(_: boolean): void;
    className?: string;
}
